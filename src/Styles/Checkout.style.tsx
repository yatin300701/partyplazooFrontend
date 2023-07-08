import { styled } from "@mui/material";
import { theme } from "../mui-theme";

export const MainBody = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "60% 40%",
  backgroundColor: "#e9ecee",
  "@media(max-width:799px)": {
    display: "flex",
    flexDirection: "column"
  }
  //   gap: "40px",
}));
export const RightDisplay = styled("div")(() => ({
  margin: "30px auto ",
  padding: "30px 30px",
  width: "400px",
  backgroundColor: "white",
  "@media(max-width:965px)": {
    width: "300px"
  },
  "@media(max-width:799px)": {
    width: "90%",
    margin: "20px auto",
    padding: "30px",
  }
}));
export const LeftDisplay = styled("div")(() => ({
  backgroundColor: "white",
  width: "90%",
  margin: "20px auto",
  padding: "30px",
  "@media(max-width:799px)": {

  }
}));
export const CheckoutTitle = styled("div")(() => ({
  display: "flex",
  height: "50px",
  "@media(max-width:993px)": {
    flexDirection: "column",
    height: "auto"
  }
}));
export const CheckoutImg = styled("img")(() => ({
  height: "40px",
  width: "200px"
}));
export const CheckoutHeading = styled("div")(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
  "@media(max-width:993px)": {
    // flexDirection: "row"
  }
}));
export const CheckoutH = styled("h3")(() => ({
  fontSize: "20px",
  margin: "0px",
  padding: "0px ",
}));
export const CheckoutP = styled("p")(() => ({
  fontSize: "15px",
  margin: "0px",
  padding: "0px ",
}));
export const BillFullDetails = styled("div")(() => ({}));
export const Coupons = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
export const Suggestions = styled("p")(() => ({
  fontSize: "12px",
  backgroundColor: "#e9ecee",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
}));
export const ApplyCoupon = styled("div")(() => ({
  height: "40px",
  fontSize: "18px",
  border: "1px dotted black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.customPalette.Grey,
}));
export const Bills = styled("div")(() => ({}));
export const BillH = styled("h3")(() => ({
  fontSize: "15px",
}));
export const BillP = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0px ",
}));
export const BillSpan = styled("div")(() => ({
  fontSize: "15px",
}));
export const BillBP = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const BillBSpan = styled("div")(() => ({
  fontSize: "18px",
  fontWeight: "600",
}));
export const Items = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "15px",
  justifyContent: "space-between",
}));
export const ItemName = styled("p")(() => ({
  width: "40%"
}));
export const ItemInfo = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "0px",
  padding: "0px",
  // height: "30  px",
}));
export const ItemCount = styled("p")(() => ({
  width: "30%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));
export const ItemPrice = styled("p")(() => ({
  width: "30%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
}));
export const Account = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "30px 0px 50px 0px",
  alignItems: "start"
}));
export const AHeading = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));
export const Ah1 = styled("h3")(() => ({
  margin: "0px",
  padding: "0px 0px 10px 0px",
}));
export const Ap = styled("p")(() => ({
  margin: "0px",
  padding: "0px 0px 20px 0px",
  fontSize: "15px",
  color: theme.customPalette.Grey,
}));
export const Abody = styled("div")(() => ({
  display: "flex",
  width: "100%",
  padding: "30px 40px",
  justifyContent: "space-between",
  border: "1px dotted grey"
}));
export const HaveAccount = styled("div")(() => ({
  border: "1px solid green",
  color: "green",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "600",
  padding: "10px 30px",
  margin: "0px 30px 0px 0px",
}));
export const SignUp = styled("div")(() => ({
  border: "1px solid green",
  color: "green",
  fontSize: "18px",
  fontWeight: "600",
  padding: "10px 30px",
  cursor: "pointer",
}));
export const Address = styled("div")(() => ({
  margin: "60px 0px 70px 0px",
}));
export const Payment = styled("div")(() => ({
  margin: "100px 0px 50px 0px",
}));
export const AImg = styled("img")(() => ({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  "@media(max-width:1066px)": {
    display: "none"
  }
}));
export const AddressInput = styled("input")(() => ({
  height: "100px",
  width: "100%",
  overflow: "hidden"
}));
export const AbodyC = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
}));
export const Addiv = styled("div")(() => ({
  border: "1px dotted grey",
  display: "flex",
  width: "100%",
  padding: "30px"
}))
export const LeftAdd = styled("div")(() => ({
}))
export const RightAdd = styled("div")(() => ({
  padding: "0px 20px",
  overflow: "hidden"
}))
export const SpanButton = styled("div")(() => ({
  padding: "10px 0px",
  fontSize: "15px",
  cursor: "pointer",
  color: theme.customPalette.Orange,
  fontWeight: "800",

}))
export const AbodyL = styled("div")({
  "@media(max-width:1066px)": {
    fontSize: "15px"
  }

})
export const AbodyR = styled("div")({})
export const BtnDiv = styled("div")(() => ({
  fontSize: "18px",
  cursor: "pointer"
}))
