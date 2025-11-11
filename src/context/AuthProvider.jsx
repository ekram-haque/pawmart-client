// authprovider.jsx
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create account
  const createUserwithEmailPassfunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email/password
  const signInWithEmailAndPasswordfunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with Google
  const signInWithPopupfunc = () => {
    return signInWithPopup(auth, provider);
  };

  // password reset
  const sendPasswordResetEmailfunc = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //signout
  const logout = () => {
  return signOut(auth);
};

  //  export everything through context
  const authInfo = {
    user,
    setUser,
    createUserwithEmailPassfunc,
    signInWithEmailAndPasswordfunc,
    signInWithPopupfunc,
    sendPasswordResetEmailfunc,
    logout
  };

  useEffect(() =>{

    const unsubscribe = onAuthStateChanged(auth, (user) =>{
        console.log(user )
        setUser(user)
    });
    return () =>{
       unsubscribe() 
    }
  },[])

  // main provider
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
