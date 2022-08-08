import React from "react";
import Logo from "../img/Logo.png";
import CODEDC from "../img/CODEDC.png";
import Slide from "../components/slide";
import hal1 from "../img/hal1.png";
import hal2 from "../img/hal2.png";
import hal3 from "../img/hal3.png";

const home = () => {
  return <Header />;
};

const Header = () => {
  return (
    <div className="home">
      <nav className="Header">
        <a href="/" className="logoa">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="buttons">
          <button>
            <a href="qna" className="qnabtn">
              Q&amp;A
            </a>
          </button>
          <button>
            <a href="login" className="loginbtn">
              로그인
            </a>
          </button>
          <button>
            <a href="register" className="registerbtn">
              회원가입
            </a>
          </button>
        </div>
      </nav>
      <section className="Section_Container1">
        <div className="MainLogoBox">
          <img src={CODEDC} alt="mainLogo" className="Mainlogo" />
        </div>
        <div className="Section_Container2">
          <div className="Green_Circle">
            <p className="GC_Text">2학기 신입 부원 모집!</p>
          </div>
          <h2 className="main_text">한세에서 개발자가 되고 싶다구요?</h2>
          <h2 className="main_text">그렇다면 Code D.C 로 오세요!</h2>
          <p className="main_text2">
            Code D.C 는 한세사이버보안고등학교
            <br />
            <b>유일</b> 개발 동아리로 한세 재학생이라면
            <br />
            <b>누구나</b> 지원하실 수 있습니다!
          </p>
          <button className="main_btn">지원하기!</button>
        </div>
      </section>
      <section className="section">
        <div className="NowCodeDC">
          <p className="NowCodeDCText">지금까지 코드디씨는 ? 🤔</p>
        </div>
        <Slide></Slide>
      </section>
      {/* 여기 */}
      <section className="Sectionphoto">
        <div className="Section_photodiv">
          <div className="Section_text">
            <div className="Section_textdiv">
              <h1 className="Section3_main_text">앞으로의 운영 방향은?</h1>
              <p className="Section3_main_text1">
                저희 Code D.C 는 기초실력상향 → 개인 과제 → 프로젝트 순으로
                <br />
                <b>기초적인 프로그래밍 실력</b>을 학습 한 이후 실제{" "}
                <b>프로젝트</b>를 진행하고, 이를 바탕으로 실제 서비스를 만들거나
                대회에 참여합니다.
              </p>
            </div>
          </div>
          <div className="Section_photo">
            <div className="mainphotodiv">
              <img src={hal1} alt="mainLogo" className="mainphoto" />
              <img src={hal2} alt="mainLogo" className="mainphoto" />
              <img src={hal3} alt="mainLogo" className="mainphoto" />
            </div>
          </div>
        </div>
      </section>
      <div className="homenone">&nbsp;</div>

      <footer>
        <p className="f_text">Copyright © 2022. CODE.DC All Rights Reserved.</p>
        <p className="f_text1">서비스 이용약관 | 개인정보 처리방침</p>
      </footer>
    </div>
  );
};

export default home;
