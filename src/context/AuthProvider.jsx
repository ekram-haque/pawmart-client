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
  const [loading, setLoading] = useState(true);

  // create account
  const createUserwithEmailPassfunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email/password
  const signInWithEmailAndPasswordfunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with Google
  const signInWithPopupfunc = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // password reset
  const sendPasswordResetEmailfunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //signout
  const logout = () => {
    setLoading(true);
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
    loading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // 🔹 Step 1: save/update user in DB
        await fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || "No name",
            photoURL: firebaseUser.photoURL || "",
          }),
        });

        // 🔹 Step 2: get FULL user from DB
        const res = await fetch(
          `http://localhost:5000/users/${firebaseUser.email}`
        );
        const dbUser = await res.json();

        // 🔹 Step 3: Firebase + DB merge
        setUser({
          ...firebaseUser,
          ...dbUser,
        });
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // main provider
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
