import { useEffect, useState } from "react";
import Navbar from "../Helpers/Navbar";
import { ChooseCakePageBody } from "../Styles/Cake.style";
import FooterBodyComponent from "../Helpers/FooterBodyComponent";
import cpyImg from "../assets/Logo.png";
import PlaceIcon from '@mui/icons-material/Place';
import PercentIcon from "@mui/icons-material/Percent";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  AHeading,
  AImg,
  Abody,
  AbodyC,
  AbodyL,
  AbodyR,
  Account,
  Addiv,
  Address,
  AddressInput,
  Ah1,
  Ap,
  ApplyCoupon,
  BillBP,
  BillBSpan,
  BillFullDetails,
  BillH,
  BillP,
  BillSpan,
  Bills,
  BtnDiv,
  CheckoutH,
  CheckoutHeading,
  CheckoutImg,
  CheckoutP,
  CheckoutTitle,
  Coupons,
  HaveAccount,
  ItemCount,
  ItemInfo,
  ItemName,
  ItemPrice,
  Items,
  LeftAdd,
  LeftDisplay,
  MainBody,
  Payment,
  RightAdd,
  RightDisplay,
  SignUp,
  SpanButton,
  Suggestions,
} from "../Styles/Checkout.style";
import { Button } from "@mui/material";
import { theme } from "../mui-theme";
import LoginComponent from "../Helpers/LoginComponent";
import SignUpComponent from "../Helpers/SignUpComponent";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import SignOut from "../Helpers/SignOut";
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import CouponCard from "../Helpers/CouponCard";
import { Display } from "../Styles/Home.style";

export default function CheckoutPage() {
  const [reload, setReload] = useState(false);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState<any>();
  const [loginToggle, setLoginToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("")
  const [signOut, setSignOut] = useState(false)
  const [couponCardToggle, setCouponCardToggle] = useState(false)
  const [coupon, setCoupon] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    getAllData()
  }, [reload]);

  const cart = useSelector((state: RootState) => state.cart.cart);

  const getAllData = () => {
    let totalNum: any = cart.reduce((acc: any, obj: any) => acc + (Number(obj.price)) * Number(obj.quantity), 0)

    setTotal(Number(totalNum))
    const couponi = localStorage.getItem("coupon")

    couponi != null || couponi == "" ? setCoupon(couponi) : setCoupon("");
    const location = localStorage.getItem("address")
    location != null || location == "" ? setAddress(location) : setAddress("")
    location != null || location == " " ? setLocation(location) : setLocation("")

    const useri = localStorage.getItem("user")
    if (!useri) return;
    setUser(JSON.parse(useri))

  }

  const handleAddress = () => {
    localStorage.setItem("address", location);
    setAddress(location);
    setReload((p) => !p);
  };
  const handleEditAddress = () => {
    localStorage.removeItem("address");
    setAddress("");
    setLocation("")
    setReload((p) => !p);
  };

  return (
    <>
      <ChooseCakePageBody>
        <Navbar />
        <MainBody>

          <LeftDisplay>
            <Account>
              <BtnDiv onClick={() => navigate("/speakers")}>
                <ArrowBackIcon />
              </BtnDiv>
              <AHeading>
                <Ah1>Account</Ah1>
                <Ap>
                  To place your order now, log in to your exiting account or
                  sign up.
                </Ap>
              </AHeading>
              <Abody>
                <AbodyL>
                  {user?.username ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "5px 0px"
                          // justifyContent: "center",
                        }}
                      >
                        <PersonIcon style={{ fontSize: "19px" }} /> &nbsp;{user.username}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <EmailIcon style={{ fontSize: "17px" }} /> &nbsp;{user.email}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "5px 0px"
                        }}
                      >
                        <LocalPhoneIcon style={{ fontSize: "18px" }} /> &nbsp;{user.phoneNo}
                      </div>

                    </div>
                  ) : (
                    <div style={{ display: "flex", height: "100px" }}>
                      <HaveAccount style={{ height: "50px" }} onClick={() => setLoginToggle(true)}>
                        Log In
                      </HaveAccount>
                      <SignUp style={{ height: "50px" }} onClick={() => setSignupToggle(true)}>
                        Sign Up
                      </SignUp>
                    </div>
                  )}
                </AbodyL>
                <AbodyR>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AImg src="https://deowgxgt4vwfe.cloudfront.net/uploads/1664171278_small.jpg"></AImg>
                  </div>
                </AbodyR>

              </Abody>

            </Account>
            <hr style={{ border: "1px dotted black" }} />
            <Address>
              <AHeading>
                <Ah1>Delivery Address</Ah1>
                <Ap>Please provide us your current address</Ap>
              </AHeading>
              <AbodyC>
                {address == "" ? (
                  <>
                    {" "}
                    <AddressInput
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                    ></AddressInput>
                    <Button
                      style={{ padding: "20px 0px", color: theme.customPalette.Orange, fontWeight: "800" }}
                      onClick={handleAddress}
                    >
                      Add
                    </Button>
                  </>
                ) : (
                  <Addiv>
                    <LeftAdd>
                      <PlaceIcon />
                    </LeftAdd>
                    <RightAdd>
                      <p style={{ padding: "0px", margin: "0px" }}>{address}</p>
                      <SpanButton

                        onClick={handleEditAddress}
                      >
                        Edit
                      </SpanButton>
                    </RightAdd>

                  </Addiv>
                )}
              </AbodyC>
            </Address>
            <hr style={{ border: "1px dotted black" }} />
            <Payment>
              <AHeading>
                <Ah1>Payment</Ah1>
                <Ap>Please provide us your card number for payments</Ap>
              </AHeading>
              <AbodyC
                style={{ fontSize: "20px", color: theme.customPalette.Grey }}
              >
                We are working on it please wait
              </AbodyC>
            </Payment>
          </LeftDisplay>
          <RightDisplay>
            <CheckoutTitle>
              <CheckoutImg src={cpyImg}></CheckoutImg>
              <CheckoutHeading>
                <CheckoutH>PartyPlazoo</CheckoutH>
                <CheckoutP>Bill</CheckoutP>
              </CheckoutHeading>
            </CheckoutTitle>
            <hr style={{ borderTop: "dotted 1px" }} />
            <BillFullDetails>
              <Items>
                <ItemInfo>
                  <ItemName>Name</ItemName>

                  <ItemCount>Quantity</ItemCount>
                  <ItemPrice>Price</ItemPrice>
                </ItemInfo>

                {cart.map((data: any) => {
                  return (
                    <>
                      <ItemInfo>
                        <ItemName>{data?.name}</ItemName>

                        <ItemCount>{data?.quantity}</ItemCount>
                        <ItemPrice>{data?.price * data?.quantity}</ItemPrice>
                      </ItemInfo>
                    </>
                  );
                })}
              </Items>
            </BillFullDetails>
            <Coupons>
              <Suggestions>
                Any Suggestions? We will pass it on...
                <FormatQuoteIcon style={{ fontSize: "15px" }} />
              </Suggestions>
              <ApplyCoupon style={{ cursor: "pointer" }}>
                {" "}
                {coupon == "" ? <div onClick={() => setCouponCardToggle(true)}><PercentIcon
                  style={{
                    fontSize: "18px",
                  }}
                />{" "}
                  &nbsp; Apply Coupon</div> : <>{coupon}  &nbsp; &nbsp; &nbsp; <ClearIcon onClick={() => { localStorage.setItem("coupon", ""), setCoupon("") }} style={{ fontSize: "20px" }} /></>}
              </ApplyCoupon>
            </Coupons>
            <Bills>
              <BillH>Bill Details</BillH>
              <BillP>
                <BillSpan>Items Total</BillSpan>
                <BillSpan>Rs {total}</BillSpan>
              </BillP>
              <BillP>
                <BillSpan>Delivery Fee</BillSpan>
                <BillSpan>Rs {address ? <>{total == 0 ? 0 : 30}
                </> : <>--</>}</BillSpan>
              </BillP>

              <BillP>
                <BillSpan>GST</BillSpan>
                <BillSpan>Rs {0.1 * total}</BillSpan>
              </BillP>
              {coupon ? <BillP>
                <BillSpan>Discount</BillSpan>
                <BillSpan>Rs {(total + 0.1 * total + 30) * 0.1}</BillSpan>
              </BillP> : ""}
              <hr />
              <BillBP>
                <BillBSpan>To Pay</BillBSpan>
                <BillBSpan>{
                  address ? <>Rs {total + (total == 0 ? 0 : 30) + 0.1 * total - (coupon ? (total + 0.1 * total + 30) * 0.1 : 0)}</> : <>Rs --</>
                }

                </BillBSpan>
              </BillBP>
              <hr />
            </Bills>
          </RightDisplay>
        </MainBody>
      </ChooseCakePageBody>
      <FooterBodyComponent />
      <LoginComponent
        loginToggle={loginToggle}
        setReload={setReload}
        setLoginToggle={setLoginToggle}
        setSignupToggle={setSignupToggle}
      />
      <SignUpComponent
        signupToggle={signupToggle}
        setSignupToggle={setSignupToggle}
        setReload={setReload}
      />
      <SignOut loginToggle={signOut}
        setUser={setUser}
        setLoginToggle={setSignOut}
        setReload={setReload} />
      <CouponCard couponCardToggle={couponCardToggle} setCouponCardToggle={setCouponCardToggle} setReload={setReload} />
    </>
  );
}
