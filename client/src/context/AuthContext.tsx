import { User } from "firebase/auth";
import { createContext, useReducer, useEffect } from "react";
import { auth } from "../firebase/config";
import React from "react";

export const AuthContext = createContext({});

interface State {
  user: User;
  authIsReady: boolean;
}

interface Action {
  type: "LOGIN" | "LOGOUT" | "AUTH_IS_READY";
  payload: any;
}

export const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
