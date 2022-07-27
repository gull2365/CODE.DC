import React from "react";

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
        <ul>
          <button>
            <a href="register">회원가입</a>
          </button>
          <button>
            <a href="login">로그인</a>
          </button>
          <button>
            <a href="qna">QNA</a>
          </button>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
