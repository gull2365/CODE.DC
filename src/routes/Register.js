import React, { useState } from "react";
import Logo from '../img/Logo.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.prevendDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  }

  return   ( 
    <div>
      <nav className="Header">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        </nav>
      <h1 className="login">회원가입</h1>
        <form onSubmit={onSubmit} className="login_info">
          <input type="text" name="email" required placeholder="이메일" />
          <input type="password" name="password" required placeholder="비밀번호" />
          <input type="number" name="phoneNumber" required placeholder="전화번호" />
          <input type="text" name="hakbun" required placeholder="학번" />
          <input type="text" name="name" required placeholder="이름" />
          <input type="submit" value="회원가입" />
        </form>
    </div>
    )
};

export default Register;
