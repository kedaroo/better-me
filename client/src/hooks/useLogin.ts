import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import api from "../api";

const provider = new GoogleAuthProvider();

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  // @ts-ignore
  const { dispatch } = useAuthContext();

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithPopup(auth, provider);

      const apiRes = await api.get("user/login", {
        headers: { Authorization: await res.user.getIdToken() },
      });

      if (apiRes.status === 200) {
        // dispatch login action
        dispatch({
          type: "LOGIN",
          payload: res.user,
        });
      } else {
        throw new Error("Auth failed. Please try again");
      }

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err: any) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};
