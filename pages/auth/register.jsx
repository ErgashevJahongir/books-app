import Link from "next/link";
import Image from 'next/image'
import styles from '../../styles/auth.module.css'
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import google from "../../public/Image/Google.png";
import facebook from './../../public/Image/Facebook.png';
import {Container} from "@nextui-org/react";
import App from "../../Components/recaptcha";


const clientId = 'AIzaSyA8N0GXbjdHt6gWVQkDbL_raQ-E84mmTAU.apps.googleusercontent.com' ;

const responseFacebook = (response) => {
    console.log(response);
}

const componentClicked = () => {
    console.log('salom')
}

const onSuccess = (res) => {
    console. log( ' [Login Success ] currentUser: ' , res . profileobj ) ;
};

const onFailure = (res ) => {
    console.log(' [Login failed] res: ', res);
};

const handleLogin = async (googleData) => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
            token: googleData.tokenId
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    // store returned user somehow
}

export default function Register() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={styles.register}>
            <Container>
                <div className={styles.register_page}>
                    <form >
                        <h1>Ro&apos;yhatdan o&apos;tish</h1>
                        <div>
                            <input type="text" placeholder='Ismingizni kiriting' />
                        </div>
                        <div>
                            <input type="email" placeholder='Emailingizni kiriting' />
                        </div>
                        <div>
                            <input type="password" placeholder='Parol kiriting' />
                        </div>
                        <div>
                            <input type="password" placeholder='Parolni takrorlang' />
                        </div>
                        <div className={styles.no_account_div}>
                            <p className={styles.no_account}>Sizning accauntingiz bormi?  <Link href='/auth/login'><a className={styles.span}>Kirish</a></Link></p>
                        </div>
                        <div className={styles.register_buttons}>
                            <button className={styles.sign_up}>Ro&apos;yhatdan o&apos;tish</button>
                            <span>or</span>
                            <div className={styles.with_register}>
                                <div className={styles.google_register}>
                                    <GoogleLogin
                                        clientId={clientId}
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick} className={styles.google_btn} ><Image src={google} alt="google" /></button>
                                        )
                                        }
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        cookiePolicy={'single_host_origin' }
                                        style={{ marginTop: '100px' }}
                                        isSignedIn={true} />
                                </div>
                                <div>
                                    <FacebookLogin
                                        appId="1088597931155576"
                                        textButton=''
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick} className={styles.google_btn}><Image src={facebook} alt="google" /></button>
                                        )}
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        icon="fa-facebook"
                                        onClick={componentClicked}
                                        callback={responseFacebook} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <App/>
                        </div>
                    </form>
                    <div className={styles.register_picture}></div>
                </div>
            </Container>
        </div>
    )
}
