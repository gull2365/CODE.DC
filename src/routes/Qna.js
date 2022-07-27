import { useState, React } from "react";
import Home from "../components/home";

const Qna = () => {
  const [text, chtext] = useState("Q");
  const onchtext = (ev) => {
    if (text === "A") {
      chtext("Q");
    }
  };

  return (
    <div>
      <header>
        <nav className="Header"></nav>
      </header>
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
