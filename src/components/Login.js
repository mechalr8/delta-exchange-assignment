import React from 'react'
import { useDispatch } from 'react-redux'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase-config';
import { GoogleButton } from "react-google-button";

const Login = () => {
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    const getUser = (usr) => {
        dispatch({
            type: "setUser",
            payload: usr
        })
    }
    const loginHandle = async () => {
        const response = await signInWithPopup(auth, provider);
        localStorage.setItem("token", response.user.accessToken);
        getUser(response.user.accessToken);
    };
    return (
        <div>
            <GoogleButton onClick={loginHandle} />
        </div>
    );
}

export default Login
