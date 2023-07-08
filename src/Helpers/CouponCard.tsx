import { Drawer } from "@mui/material";
import {
    CloseButton,
    DrawerBottom,
    DrawerBttn,
    DrawerInput,
    DrawerTandC,
    DrawerTop,
    Drawerdiv,
    HrDwawer,
    LoginDrawerImg,
    LoginLeft,
    LoginRight,
    LoginText,
} from "../Styles/Home.style";
import { useState } from "react";
import SnackbarComponent from "./Snackbar";
import { theme } from "../mui-theme";
export default function CouponCard(props: any) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [coupon, setCoupon] = useState("")

    const handleLogin = async () => {
        try {
            if (coupon != "PP50YC") throw Error("Incorrect coupon")
            localStorage.setItem("coupon", coupon)
            setMessage("Coupon Added");
            setType("success");
            setOpen(true);
            props?.setReload((e: any) => !e)
            props?.setCouponCardToggle(false)
        } catch (e: any) {
            setMessage(`Error ${e.message}`);
            setType("error");
            setOpen(true);
        }
    };





    return (
        <>
            <Drawer
                anchor={"right"}
                open={props.couponCardToggle}
                onClose={() => props.setCouponCardToggle(false)}
            >
                <Drawerdiv>
                    <CloseButton onClick={() => props.setCouponCardToggle(false)}>
                        x
                    </CloseButton>
                    <DrawerTop>
                        <LoginLeft>
                            <LoginText>Add Coupon</LoginText>
                        </LoginLeft>
                        <LoginRight>
                            <LoginDrawerImg src="https://www.allrecipes.com/thmb/beS8LVFvG9oxFe9UgGA3Bn3WG64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/708879-One-Bowl-Chocolate-Cake-III-Dianne-4x3-0b686cb5d1d647cabefd86545b1bccdf.jpg"></LoginDrawerImg>
                        </LoginRight>
                    </DrawerTop>
                    <HrDwawer></HrDwawer>
                    <DrawerBottom>
                        <DrawerInput
                            label="Coupon Code"
                            onChange={(e: any) => setCoupon(() => e.target.value)}
                            sx={{
                                "& .MuiInputLabel-root": {
                                    color: theme.customPalette.Grey,
                                    opacity: 0.5,
                                }, //styles the label
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: theme.customPalette.Grey,
                                        border: "1px solid rgb(83, 86, 101,0.5)",
                                    },
                                },
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: "0px",
                                },
                            }}
                        ></DrawerInput>
                        <DrawerBttn onClick={handleLogin}>Add</DrawerBttn>
                        <DrawerTandC>
                            By clicking on Login, I accept the
                            <b>Terms & Conditions & Privacy Policy</b>
                        </DrawerTandC>
                        <br />
                        <DrawerTandC>
                            Currently we only have one coupon :
                            <b> &nbsp;PP50YC</b>
                        </DrawerTandC>
                    </DrawerBottom>
                </Drawerdiv>
            </Drawer>
            <SnackbarComponent
                open={open}
                setOpen={setOpen}
                message={message}
                type={type}
            />
        </>
    );
}
