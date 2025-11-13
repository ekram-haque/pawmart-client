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
  const [loading,setLoading] = useState(true)

  // create account
  const createUserwithEmailPassfunc = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email/password
  const signInWithEmailAndPasswordfunc = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with Google
  const signInWithPopupfunc = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  // password reset
  const sendPasswordResetEmailfunc = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  //signout
  const logout = () => {
    setLoading(true)
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
    logout,
    loading
  };

  useEffect(() =>{

    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      
        setUser(user)
        setLoading(false)
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
