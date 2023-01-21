import { User } from "firebase/auth";
import { createContext, useReducer, useEffect } from "react";
import { auth } from "../firebase/config";
import React from "react";

interface State {
  user: User | null;
  authIsReady: boolean;
  notificationIntervals: NodeJS.Timer[];
}

export const AuthContext = createContext<State>({
  user: null,
  authIsReady: false,
  notificationIntervals: [],
});

type ACTIONTYPE =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "AUTH_IS_READY"; payload: User }
  | { type: "NOTIFICATION_INTERVALS"; payload: NodeJS.Timer[] };

export const authReducer = (state: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    case "NOTIFICATION_INTERVALS":
      return { ...state, notificationIntervals: action.payload };
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
    notificationIntervals: [],
  });

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user! });
      unsub();
    });
  }, []);

  return (
    // @ts-ignore
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
