import React from "react";
import GoogleLogo from "../../assets/google.png";
import "./index.css";
import Logo from "../../assets/logo.png";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const SignIn = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { login, error, isPending } = useLogin();
  if (user) {
    navigate("home");
  }

  return (
    <div className="signin">
      <div className="wrapper card">
        <img src={Logo} alt="" className="logo" />
        <h1>Sign in</h1>
        <p>to BetterMe</p>

        <button onClick={login}>
          <div className="logo-div">
            <img src={GoogleLogo} alt="" />
          </div>
          <div>Continue with Google</div>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
