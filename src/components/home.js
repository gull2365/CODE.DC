import React from "react";
import Logo from '../img/Logo.png'
import CODEDC from '../img/CODEDC.png'
const home = () => {
  return(
    <Header />
  );
};

const Header = () => {
  return (
    <div>
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
      <section>
      <img src={CODEDC} alt="mainLogo" className="Mainlogo" />
      <div className="Green_Circle">
        <p className="GC_Text">2학기 신입 부원 모집!</p>
      </div>
      <h2 className="main_text">한세에서 개발자가 되고 싶다구요?</h2>
      <h2 className="main_text2">그렇다면 CODE D.C.로 오세요!</h2>
      <p className="main_text3">Code D.C. 는 한세사이버보안고등학교<br/> 
         <b>유일</b> 개발 동아리로 한세 재학생이라면<br/>
         <b>누구나</b> 지원하실 수 있습니다!</p>
         <button className="main_btn">지원하기!</button>
      </section>

    </div>
  );
};


export default home;
