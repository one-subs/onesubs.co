import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/http.hook.js";
import Alert from "./components/Alert.js";
import { ReactComponent as Mail } from '../styles/images/mail.svg';

function Verification() {

  const { request, error, clearError } = useHttp();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verification, setVerification] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const timeoutRef = useRef(null);

  const verify = async (e) => {
    e.preventDefault();
    try {
      const response = await request("/user/verification", "POST", { email, verification, password });
      if (response) navigate("/account/login");
    } catch (err) {}
  }

  return (
    <div className="user">
      {error ? <Alert message={error} type={"error"} clearError={clearError}/> : ""}
      <div className="page_width">
        <div className="left"> 
          <div className="form">
            <h1>Verify</h1>
            <div className="input-container">
              <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required/>
              <label htmlFor="input">Email</label>
            </div>
            <div className="input-container">
              <input type="number" name="code" onChange={(e) => setVerification(e.target.value)} required/>
              <label htmlFor="input">Verification code</label>
            </div>
            <div className="input-container">
              <input type={showPassword ? "text" : "password"} name="password" onChange={(e) => {
                  setPassword(e.target.value)
                  setShowPassword(true)
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = setTimeout(() => setShowPassword(false), 1500)
                }} required/>
              <label htmlFor="input">Create password</label>
            </div>
            <button onClick={(e) => verify(e)} style={{ marginBottom: "20px" }}>Create</button>
            <p style={{ fontSize: "15px", margin: "0", width: "100%" }}>Check your email for the verification code</p>
          </div>
        </div>
        <div className="right" style={{ display: (window.innerWidth > 900) ? "block" : "none" }}>
          <Mail style={{ marginTop: '40px', width: '600px', height: '500px' }}/>
        </div>
      </div>
    </div>
  );
}

export default Verification;