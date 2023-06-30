import { useEffect, useState } from "react";
import {
  ButtonsReview,
  CommentBottom,
  CommentInput,
  NameField,
  ReplySection,
  ReplySectionReply,
  ReplyTag,
  Review,
  Rightother,
  SubmitReview,
} from "../Styles/reviewsection.style";
import axios from "axios";
import { theme } from "../mui-theme";
import SnackbarComponent from "./Snackbar";

export default function zReplySectionBox(props: any) {

  const [replies, setReplies] = useState<any>([])
  // reply
  const [myreply, setMyreply] = useState("")
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [to, setTo] = useState<any>(props.to)
  const [reload, setReload] = useState(false)


  const onExitClick = async (index: any) => {
    const replyArry = { ...props.reply };
    replyArry[index] = false;
    props.setReply(replyArry);
  };


  useEffect(() => { getReplies() }, [reload])
  const getReplies = async () => {
    try {
      const result = await axios.get(`https://backendpartyplazoo.up.railway.app/api/comments/reply/${props.replyId}`)
      setReplies(result.data.data)
    } catch (e: any) {
      setMessage(`Error ${e.message}`);
      setType("error");
      setOpen(true);
    }
  }


  const onSubmitReply = async () => {
    try {
      const utemp = localStorage.getItem("user")
      if (!utemp) {
        throw Error("Login Please")
      }
      const user = JSON.parse(utemp);

      await axios.post(`https://backendpartyplazoo.up.railway.app/api/comments/reply/${props.replyId}`, {
        to: to,
        comment: myreply,
        by: user.username
      })

      setMyreply("")

      setReload(true)


    } catch (e: any) {
      setMessage(`Error ${e.message}`);
      setType("error");
      setOpen(true);
    }
  }
  const toReply = (by: string) => {
    setTo(by)
  }
  return (

    <>
      <ReplySection>
        {
          replies?.map((reply: any) => {
            return <>

              <Rightother>
                <NameField>
                  {" "}
                  <span>{reply?.by}</span>{" "}
                  <span style={{ fontSize: "12px", color: theme.customPalette.Grey, padding: "0px 0px" }}> Replied To : {reply?.to}</span>
                </NameField>
                <CommentInput>
                  {reply?.comment}
                </CommentInput>
                <CommentBottom style={{
                  fontSize: "13px",
                  margin: "10px 0px",
                  marginRight: "10px",
                  cursor: "pointer",
                  color: "	deepskyblue",
                  fontWeight: "900"
                }} onClick={() => toReply(reply?.by)}>Reply</CommentBottom>
              </Rightother >


            </>
          })
        }
        <ReplySectionReply>
          <ReplyTag>Reply</ReplyTag>
          <span style={{ fontSize: "12px", color: theme.customPalette.Grey, padding: "0px 0px" }}> Replied To : {to}</span>
          <Review type="text" value={myreply} onChange={(e: any) => setMyreply(e.target.value)}></Review>
          <ButtonsReview>
            <SubmitReview onClick={onSubmitReply}>Submit</SubmitReview>
            <SubmitReview onClick={() => onExitClick(props.index)}>
              Exit
            </SubmitReview>
          </ButtonsReview>
        </ReplySectionReply>
      </ReplySection >
      <SnackbarComponent
        open={open}
        setOpen={setOpen}
        message={message}
        type={type}
      />
    </>
  );
}
