import { useState, React, useRef, useEffect } from "react";
import Logo from "../img/Logo.png";
/* 코드 불편한사람 ★직접★ 줄이세요. 난 못합니다, 귀찮고*/
const Qna = () => {
  const [chat, setchat] = useState([]);
  const One = (e) => {
    return (
      <div className="onebox">
        <div className="onechatbox">
          <div className="twodiv">
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
          <div className="twodiv">
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
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
        </div>
      );
    }
    if (e === 3) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
        </div>
      );
    }
    if (e === 4) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
        </div>
      );
    }
    if (e === 5) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
        </div>
      );
    }
    if (e === 6) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
        </div>
      );
    }
    if (e === 7) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
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
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
          <Two text="모집 인원 제한은 없습니다." />
        </div>
      );
    }
    if (e === 9) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
          <Two text="모집 인원 제한은 없습니다." />
          <One text="동아리에서는 주로 무슨 활동을 하나요?" />
        </div>
      );
    }
    if (e === 10) {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
          <Two text="모집 인원 제한은 없습니다." />
          <One text="동아리에서는 주로 무슨 활동을 하나요?" />
          <Two
            text="저희 Code D.C는 기초실력 향상 → 개인 과제 순으로 기초적인 프로그래밍 실력을 학습 한 이후
부원들끼리 실제 프로젝트를 진행하고, 이를 바탕으로 실제 서비스를 만들거나 대회에 참여합니다."
          />
        </div>
      );
    } else {
      return (
        <div>
          <One text="Code D.C는 어떤 동아리인가요?" />
          <Two text="Code D.C는 한세 유일 개발 동아리로 웹, 앱, 디자인 등 개발과 관련 있는 ㅤ여러 분야를 공부하는 동아리입니다." />
          <One text="전공에 대한 지식이 없어도 괜찮을까요?" />
          <Two text="전공에 대한 지식이 없어도 배우고자 ㅤ하는 의지만 있다면 괜찮습니다!" />
          <One text="노트북이 필요한가요?" />
          <Two text="노트북이 있으면 좋지만 없어도 상관없습니다." />
          <One text="모집 인원은 몇 명인가요?" />
          <Two text="모집 인원 제한은 없습니다." />
          <One text="동아리에서는 주로 무슨 활동을 하나요?" />
          <Two
            text="저희 Code D.C는 기초실력 향상 → 개인 과제 순으로 기초적인 프로그래밍 실력을 학습 한 이후
부원들끼리 실제 프로젝트를 진행하고, 이를 바탕으로 실제 서비스를 만들거나 대회에 참여합니다."
          />
        </div>
      );
    }
  };
  const chatbtn = (e) => {
    if (e >= 10) {
      return (
        <div className="chatboxs">
          <div className="chatboxdiv">
            <div className="chat">
              <textarea
                className="chatinput"
                value={text}
                onChange={onChangetext}
                onkeypress={onkeypress}
              ></textarea>
            </div>
          </div>
          <div className="chatbuttondiv">
            <button className={` ${text.length === 0 ? "qnano" : "qnaok"}`}>
              전송
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="qnacheckdiv">
          <button className="qnacheckbtn" onClick={onClick}>
            다음
          </button>
        </div>
      );
    }
  };
  const onChangetext = (event) => {
    event.preventDefault();
    addtext(event.target.value);
  };
  const [text, addtext] = useState("");
  const plustext = (e) => {
    if (text === "") {
      return;
    }
    addtexts([...texts, text]);
    addtext("");
  };
  const onClick = () => {
    setchat([...chat, "num"]);
  };
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  useEffect(() => {
    if (chat.length >= 8) {
      scrollToBottom();
    } else {
      return;
    }
  }, [chat, text]);
  const [texts, addtexts] = useState([]);
  const onkeypress = (e) => {
    if (e.key === "Enter") {
      plustext();
    }
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
            <div className="sebox">
              {story(chat.length)}
              <div ref={messagesEndRef} className="kakaonone">
                &nbsp;
              </div>
            </div>
            <div className="chatbox">{chatbtn(chat.length)}</div>
          </div>
        </div>
      </div>
      <div className="homenone">&nbsp;</div>
      <footer>
        <p className="f_text">Copyright © 2022. CODE.DC All Rights Reserved.</p>
        <p className="f_text1">서비스 이용약관 | 개인정보 처리방침</p>
      </footer>
    </div>
  );
};

export default Qna;
