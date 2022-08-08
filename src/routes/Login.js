import React from "react";
import Logo from "../img/Logo.png";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.prevendDefault();
  };

  return (
    <div>
      <nav className="Header">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </nav>
      <h1 className="login">로그인</h1>
      <form onSubmit={onSubmit} className="login_info">
        <input type="text" name="email" required placeholder="이메일" />
        <input
          type="password"
          name="password"
          required
          placeholder="비밀번호"
        />
        <input type="submit" value="로그인" />
        <button className="toRegister">
          Code D.C가 처음이신가요?
          <a href="register">회원가입</a>
        </button>
      </form>
    </div>
  );
};

export default Login;
