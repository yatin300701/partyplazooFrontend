import { Drawer } from "@mui/material";
import {
    CloseButton,
    DrawerBottom,
    DrawerBttn,
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
export default function SignOut(props: any) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    const handleLogin = async () => {
        try {
            localStorage.clear()
            setMessage("SignOut");
            setType("success");
            setOpen(true);
            props.setUser(undefined)
            props?.setReload((e: any) => !e)
            props?.setLoginToggle(false)
        } catch (e: any) {
            setMessage(`Error ${e}`);
            setType("error");
            setOpen(true);
        }
    };





    return (
        <>
            <Drawer
                anchor={"right"}
                open={props.loginToggle}
                onClose={() => props.setLoginToggle(false)}
            >
                <Drawerdiv>
                    <CloseButton onClick={() => props.setLoginToggle(false)}>
                        x
                    </CloseButton>
                    <DrawerTop>
                        <LoginLeft>
                            <LoginText>Sign Out</LoginText>
                        </LoginLeft>
                        <LoginRight>
                            <LoginDrawerImg src="https://www.allrecipes.com/thmb/beS8LVFvG9oxFe9UgGA3Bn3WG64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/708879-One-Bowl-Chocolate-Cake-III-Dianne-4x3-0b686cb5d1d647cabefd86545b1bccdf.jpg"></LoginDrawerImg>
                        </LoginRight>
                    </DrawerTop>
                    <HrDwawer></HrDwawer>
                    <DrawerBottom>
                        <DrawerBttn onClick={handleLogin}>SignOut</DrawerBttn>
                        <DrawerTandC>
                            By clicking on Login, I accept the
                            <b>Terms & Conditions & Privacy Policy</b>
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
