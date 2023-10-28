import SlideRight from "../Components/Animators/SlideRight";
import SlideLeft from "../Components/Animators/SlideLeft";
import FadeIn from "../Components/Animators/FadeIn";

import { TextField, Button } from "@mui/material";

// TODO: Linking signup page with login ( routing ) and integrating backend login with front end.

const imageSrc = 'https://res.cloudinary.com/dke9xzbl6/image/upload/v1698510102/Fake%20News%20Detector/Hand_holding_smartphones_with_online_newspaper_newsletter_Converted_rkgoix.png';

const Login = () => {
    return (
        <div className="login-signup">
            <div className="entity left">
                <img src={imageSrc} alt="error"></img>
            </div>
            <SlideLeft delay={1} duration={2}>
                <div className="entity right">
                    <div className="content">
                        <div className="title">
                            <SlideRight delay={2} duration={1.5} >LOGIN</SlideRight>
                            <SlideRight delay={3.5} duration={1.5}><div className="border" /></SlideRight>
                        </div>
                        <FadeIn delay={5} duration={1}>
                            <div className="form">
                                <div>Enter your Email : </div>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                />
                                <div>Enter your Password : </div>
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                />
                                <div>
                                    <Button variant="contained">
                                        LOGIN
                                    </Button>
                                </div>
                                <div>
                                    Don't have an account? Sign up
                                </div>
                                <div>
                                    Forgot Password?
                                </div>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </SlideLeft>
        </div>
    )
}


export default Login;