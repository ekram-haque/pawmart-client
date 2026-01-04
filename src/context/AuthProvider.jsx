// AuthProvider.jsx
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

  // ---------- Auth Functions ----------
  const createUserwithEmailPassfunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailAndPasswordfunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithPopupfunc = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const sendPasswordResetEmailfunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ---------- Auth State Observer ----------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        // save/update user
        await fetch("https://pawmart-server-gamma.vercel.app/users", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName || "No name",
            photoURL: firebaseUser.photoURL || "",
          }),
        });

        // get user
        const res = await fetch(
          `https://pawmart-server-gamma.vercel.app/users/${firebaseUser.email}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user from DB");
        }

        const dbUser = await res.json();

        setUser({ ...firebaseUser, ...dbUser });
      } catch (err) {
        console.error("Auth error:", err);
        setUser(firebaseUser); // fallback
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    createUserwithEmailPassfunc,
    signInWithEmailAndPasswordfunc,
    signInWithPopupfunc,
    sendPasswordResetEmailfunc,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
