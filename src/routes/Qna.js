import { useState, React } from "react";
import Logo from "../img/Logo.png";
/* 코드 불편한사람 ★직접★ 줄이세요. 난 못합니다, 귀찮고*/
const Qna = () => {
  const [chat, setchat] = useState([]);
  const One = (e) => {
    return (
      <div className="onebox">
        <div className="onechatbox">
          <div>
            <div className="onetextbox">
              <p className="onetext">{e.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Two = (e) => {
    return (
      <div className="twobox">
        <div className="twoProbox">
          <div className="twoPro">
            <img src={Logo} alt="Logo" className="Pro" />
          </div>
        </div>
        <div className="twochatbox">
          <div>
            <div className="twoproname">Code D.C</div>
            <div className="twotextbox">
              <p className="twotext">{e.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const story = (e) => {
    if (e === 0) {
      return;
    }
    if (e === 1) {
      return <One text="Code D.C는 어떤 동아리인가요?" />;
    }
    if (e === 2) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
        </div>
      );
    }
    if (e === 3) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
        </div>
      );
    }
    if (e === 4) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 하는 의지만 있다면 괜찮습니다!" />
        </div>
      );
    }
    if (e === 5) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
        </div>
      );
    }
    if (e === 6) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
        </div>
      );
    }
    if (e === 7) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
        </div>
      );
    }
    if (e === 8) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
          <Two text="모집 인원 제한은 없습니다." />
        </div>
      );
    } else {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
          <Two text="모집 인원 제한은 없습니다." />
        </div>
      );
    }
  };
  const onClick = () => {
    setchat([...chat, "num"]);
  };
  return (
    <div className="QNA">
      <header>
        <nav className="Header">
          <a href="/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </nav>
      </header>
      <div className="QNAMain">
        <div className="QNAtextbody">
          <p id="QAtext">Q&amp;A</p>
        </div>
        <div className="mainbox">
          <div className="vbox">
            <div className="sebox">{story(chat.length)}</div>
            <div className="chatbox">
              <button className="a" onClick={onClick}>
                sadsa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
