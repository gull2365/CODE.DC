import React from "react";
import Logo from '../img/Logo.png'

const Login = () => {
  return ( 
  <div>
    <nav className="Header">
      <a href="/">
        <img src={Logo} alt="Logo" className="logo" />
      </a>
    </nav>
    <h1 className="login">로그인</h1>
  </div>
  )
};

export default Login;
