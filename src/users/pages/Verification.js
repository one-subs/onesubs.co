import { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import useHttp from "../../hooks/http.hook.js";

import Alert from "./components/Alert.js";
import { ReactComponent as Mail } from '../styles/images/mail.svg';

import Loading from "../../pages/Loading.js";

function Verification() {

  const auth = useContext(AuthContext);
  const { request, error, clearError } = useHttp();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [verification, setVerification] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setEmail(searchParams.get('email'));
  }, []);

  const verify = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await request("/user/verification", "POST", { email, verification, password });
      if (response) {
        setLoading(false);
        auth.login(response.token, response.userId);
        navigate("/account");
      };
    } catch (err) {}
  }

  if (loading) return <Loading/>;

  return (
    <div className="user">
      {error ? <Alert message={error} type={"error"} clearError={clearError}/> : ""}
      <div className="page_width">

        <div className="left"> 
          <div className="form">

            <h1>Verify</h1>

            <p style={{ fontSize: "15px", marginBottom: "35px", width: "100%", color: "#666666" }}>Email: {email}</p>

            <div className="input-container">
              <input type="number" name="code" onChange={(e) => setVerification(e.target.value)} verification={verification} required/>
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