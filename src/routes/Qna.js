import { useState, React } from "react";
import Logo from '../img/Logo.png'

const Qna = () => {
  const [text, chtext] = useState("Q");
  const onchtext = (ev) => {
    if (text === "Q") {
      chtext("A");
    } else {
      chtext("Q");
    }
  };

  return (
    <div>
      <nav className="Header">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </nav>
      <div className="QNAMain">
        <div className="QNAtextbody">
          <p id="QAtext">Q&amp;A</p>
        </div>
        <div className="Zelbody">
          <p id="Zeltext">자주 묻는 질문</p>
        </div>
        <div className="Chatbody">
          <div className="Chatbox">
            <div className="Qbox">
              <button onClick={onchtext} className="Q">
                <p className="QA">{text}</p>
              </button>
            </div>
            <div className="QF"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
