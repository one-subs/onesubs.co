import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useHttp from "../../hooks/http.hook";
import Alert from "./components/Alert.js";
import { ReactComponent as Question } from '../styles/images/question.svg';

function ResetPassword() {

  const { request, error, clearError } = useHttp();

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const reset = async (e) => {
    e.preventDefault();
    try {
      const response = await request("/user/reset-password", "POST", { email });
      if (response) navigate("/account/verification");
    } catch (err) {}
  }

  return (
    <div className="user">
      {error ? <Alert message={error} type={"error"} clearError={clearError}/> : ""}
      <div className="page_width">
        <div className="left" style={{ display: (window.innerWidth > 900) ? "block" : "none" }}>
          <Question style={{ marginTop: '30px', width: '500px', height: '400px' }}/>
        </div>
        <div className="right">
          <div className="form">
            <h1>Reset password</h1>
            <div className="input-container">
              <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required/>
              <label htmlFor="input">Email</label>
            </div>
            <h5 style={{ textAlign: "start", fontSize: "15px", fontWeight: "400" }}>No worries! We've got you covered. If you've forgotten your password, simply enter your email, and we'll send you verification code to create new password.</h5>
            <button onClick={(e) => reset(e)} style={{ margin: "0px" }}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;