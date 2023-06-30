import { useEffect, useState } from "react";
import {
  Body,
  CommentBottom,
  CommentInput,
  Heading,
  Leftother,
  MyReview,
  NameField,
  OtherReview,
  Others,
  ReplyTag,
  Review,
  ReviewBody,
  Rightother,
  SubmitReview,
} from "../Styles/reviewsection.style";
import { Avatar, Rating } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReplySectionBox from "./ReplySection";
import SnackbarComponent from "./Snackbar";

export default function ReviewSection() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("0");
  // all comments without my comment
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(false);
  // my comment on this product
  const [myreview, setMyreview] = useState<any>([]);
  const [mycommit, setMycommit] = useState<any>();
  const [reply, setReply] = useState<any>();
  const [myreply, setMyreply] = useState<any>(false);

  const { id } = useParams();

  useEffect(() => {
    getReviews();
  }, [reload]);

  const handleReplyClick = (index: any) => {
    const replyArry = { ...reply };
    replyArry[index] = true;
    setReply(replyArry);
  };

  const getReviews = async () => {
    const token = localStorage.getItem("token");
    const userTemp = localStorage.getItem("user")

    try {
      if (!userTemp) throw Error("Not loged in")
      const user = JSON.parse(userTemp)
      let config = {
        headers: {
          Authorization: token,
        },
      };
      await axios.get(
        `https://backendpartyplazoo.up.railway.app/api/comments/comments/${id}`,
        config
      );
      const mycomment = comments.filter(
        (obj: any) => obj.userId == user._id
      );
      const restComment = comments.filter(
        (obj: any) => obj.userId != user._id
      );

      setMyreview(mycomment);
      setComments(restComment);
      const falseArray = Array(comments.length).fill(false);
      setReply(falseArray);
    } catch (e: any) {
      setMessage(`Error ${e.message}`);
      setType("error");
      setOpen(true);
    }
  };

  const handleEditClick = async () => {
    setMycommit(myreview[0]?.comment);
    setMyreview([]);
  };

  const handleSubmitMyComment = async () => {
    try {
      const token = localStorage.getItem("token");
      const userparse = localStorage.getItem("user");
      if (!userparse) throw Error("Not Logedin");
      const user = JSON.parse(userparse);
      let config = {
        headers: {
          Authorization: token,
        },
      };
      const body = {
        comment: mycommit,
        userId: user._id,
        stars: value,
        productsId: id,
      }
      await axios.put(
        "https://backendpartyplazoo.up.railway.app/api/comments/comments", body,
        config
      );
      setReload(true)
    } catch (e: any) {
      setMessage(`Error ${e.message}`);
      setType("error");
      setOpen(true);
    }
  };

  return (
    <>
      <ReviewBody>
        <Heading>Reviews</Heading>
        <Body>
          {myreview.length == 0 ? (
            <MyReview>
              <Rating
                style={{ padding: "0px 0px 30px 0px" }}
                name="simple-controlled"
                value={Number(value)}
                onChange={(event, newValue) => {
                  if (!newValue) return;
                  setValue(newValue.toString());
                }}
              />
              <Review
                type="text"
                value={mycommit}
                onChange={(e: any) => setMycommit(e.target.value)}
              ></Review>
              <SubmitReview onClick={handleSubmitMyComment}>
                Submit
              </SubmitReview>
            </MyReview>
          ) : (
            <>
              {myreview.map((commenti: any, index: any) => (
                <Others key={index}>
                  <Leftother>
                    <Avatar>{commenti?.user.username[0].toUpperCase()}</Avatar>
                  </Leftother>
                  <Rightother>
                    <NameField>
                      {" "}
                      <span>{commenti?.user.username}</span>{" "}
                      <Rating
                        style={{ fontSize: "18px", padding: "0px 0px" }}
                        name="rating"
                        value={Number(commenti?.stars)}
                        readOnly
                      />
                    </NameField>
                    <CommentInput>{commenti?.comment}</CommentInput>
                    <CommentBottom>
                      {myreply != true ? (
                        <>
                          <ReplyTag onClick={() => setMyreply(true)}>
                            Reply
                          </ReplyTag>
                          <ReplyTag onClick={handleEditClick}>Edit</ReplyTag>
                        </>
                      ) : (
                        <ReplySectionBox
                          replyId={commenti?._id}
                          to={commenti?.user.username}
                          index={index}
                          reply={myreply}
                          setReply={setMyreply}
                        />
                      )}
                    </CommentBottom>
                  </Rightother>
                </Others>
              ))}
            </>
          )}

          <OtherReview>
            {comments.map((comment: any, index) => (
              <Others key={index}>
                <Leftother>
                  <Avatar>{comment?.user.username[0].toUpperCase()}</Avatar>
                </Leftother>
                <Rightother>
                  <NameField>
                    {" "}
                    <span>{comment?.user.username}</span>{" "}
                    <Rating
                      style={{ fontSize: "18px", padding: "0px 10px 0px 0px" }}
                      name="rating"
                      value={comment?.stars}
                      readOnly
                    />
                  </NameField>
                  <CommentInput>{comment?.comment}</CommentInput>
                  <CommentBottom>
                    {reply[index] != true ? (
                      <ReplyTag onClick={() => handleReplyClick(index)}>
                        Reply
                      </ReplyTag>
                    ) : (
                      <ReplySectionBox
                        replyId={comment?._id}
                        to={comment?.user.username}
                        index={index}
                        reply={reply}
                        setReply={setReply}
                      />
                    )}
                  </CommentBottom>
                </Rightother>
              </Others>
            ))}
          </OtherReview>
        </Body>
      </ReviewBody>
      <SnackbarComponent
        open={open}
        setOpen={setOpen}
        message={message}
        type={type}
      />
    </>
  );
}
