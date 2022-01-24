
import React, { useState, useEffect } from 'react';
import initialAuthentication from '../firebase/firebaseInit';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, FacebookAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

initialAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()

    // authentication provider
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // use effect
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    // google Handler
    const googleHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
    }
    // facebook handler
    const facebookHandler = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
    }

    // github handler
    const GithubHandler = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    return {
        user,
        googleHandler,
        facebookHandler,
        GithubHandler,
        logOut
    }
};

export default useFirebase;