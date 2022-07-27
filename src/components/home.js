import React from "react";
import Logo from '../img/Logo.png'

const home = () => {
  return(
    <Header />
  );
};

const Header = () => {
  return (
    <header>
      <h1>사이트명</h1>
      <nav className="Header">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="buttons">
          <button>
            <a href="qna" className="qnabtn">Q&amp;A</a>
          </button> 
          <button>
            <a href="login" className="loginbtn">로그인</a>
          </button>
          <button>
            <a href="register" className="registerbtn">회원가입</a>
          </button>
        </div>
      </nav>
    </header>
  );
};


export default home;
