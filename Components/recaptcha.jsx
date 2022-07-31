import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import {useCallback, useState} from "react";

const MyComponent = () => {
    const [token, setToken] = useState();
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const onVerify = useCallback((token) => {
        setToken(token);
        console.log(token);
    });

    const doSomething = () => {
        console.log(token)
        setRefreshReCaptcha(r => !r);
    }

    return (
        <div>
            <GoogleReCaptcha
                onVerify={onVerify}
                refreshReCaptcha={refreshReCaptcha}
            />
            <button onClick={doSomething}>
                Do Something
            </button>
        </div>
    );
};

const App = () => {

    return (
        <div>
            <GoogleReCaptchaProvider reCaptchaKey="6LcxjDYhAAAAAM9PKIyRrrGMByomWmvHJTxNy1By">
                {/*<GoogleReCaptcha onVerify={handleVerify} />*/}
                <MyComponent/>
            </GoogleReCaptchaProvider>
        </div>
    );
};

export default  App;