import React from "react";
import Logo from "../img/Logo.png";
import CODEDC from "../img/CODEDC.png";
import Slide from "../components/slide";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const home = () => {
  return <Header />;
};

const Header = () => {
  return (
    <div>
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
      <section>
        <div className="Section_Container1">
          <img src={CODEDC} alt="mainLogo" className="Mainlogo" />
          <div className="Section_Container2">
            <div className="Green_Circle">
              <p className="GC_Text">2학기 신입 부원 모집!</p>
            </div>
            <h2 className="main_text">한세에서 개발자가 되고 싶다구요?</h2>
            <h2 className="main_text2">그렇다면 Code D.C 로 오세요!</h2>
            <p className="main_text3">
              Code D.C 는 한세사이버보안고등학교
              <br />
              <b>유일</b> 개발 동아리로 한세 재학생이라면
              <br />
              <b>누구나</b> 지원하실 수 있습니다!
            </p>
            <button className="main_btn">지원하기!</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="NowCodeDC">
          <p className="NowCodeDCText">지금까지 코드디씨는 ? 🤔</p>
        </div>
        <Slide></Slide>
      </section>
      <section>
        <div>
          <h1 className="Section3_main_text">앞으로의 운영 방향은?</h1>
          <p className="Section3_main_text1">저희 Code D.C 는 기초실력상향 → 개인 과제 → 프로젝트 순으로<br/>
           <b>기초적인 프로그래밍 실력</b>을 학습 한 이후 실제 <b>프로젝트</b>를 진행하고,  이를 바탕으로 실제 서비스를 만들거나 대회에 참여합니다.</p>
        </div>
        <div className="S3_shape">
          <div className="S3_shape1">
            <p className="shape1_text">기초실력향상</p>
          </div>
          <div className="S3_Circle_shape">
            <p className="S3_Circle_shape_text">1</p>
          </div>
          <img src={img1} alt="s3_img1" className="s3_img1" />
        </div>

        <div className="S3_shape2">
          <div className="S3_shape1_2">
            <p className="shape1_text_2">개인과제</p>
          </div>
          <div className="S3_Circle_shape_2">
            <p className="S3_Circle_shape_text_2">2</p>
          </div>
          <img src={img2} alt="s3_img2" className="s3_img2" />
        </div>
        
         <div className="S3_shape3">
          <div className="S3_shape1_3">
            <p className="shape1_text_3">팀원과의 프로젝트</p>
          </div>
          <div className="S3_Circle_shape_3">
            <p className="S3_Circle_shape_text_3">3</p>
          </div>
          <img src={img3} alt="s3_img3" className="s3_img3" />
        </div>
      </section>
      <footer>
        <p className="f_text">Copyright © 2022. CODE.DC All Rights Reserved.</p>
        <p className="f_text1">서비스 이용약관 | 개인정보 처리방침</p>
      </footer>
    </div>
  );
};

export default home;
