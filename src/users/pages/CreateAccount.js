import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/http.hook";
import Alert from "./components/Alert.js";
import { ReactComponent as Join } from '../styles/images/join.svg';

function CreateAccount() {

  const { request, error, clearError } = useHttp();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const create = async (e) => {
    e.preventDefault();
    try {
      const response = await request("/user/registration", "POST", { email });
      if (response) navigate("/account/verification");
    } catch (err) {}
  }

  return (
    <div className="user">
      {error ? <Alert message={error} type={"error"} clearError={clearError}/> : ""}
      <div className="page_width">

        <div className="left" style={{ display: (window.innerWidth > 900) ? "block" : "none" }}>
          <Join style={{ marginTop: '40px', width: '500px', height: '400px' }}/>
        </div>

        <div className="right">
          <div className="form">

            <h1>Sign up</h1>

            <div className="input-container">
              <input type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} required/>
              <label htmlFor="input">Email</label>
            </div>
            
            <h5 style={{ textAlign: "center", fontSize: "15px", fontWeight: "400" }}>Enter your email and receive the verification code to continue registration.</h5>
            
            <button onClick={(e) => create(e)} style={{ margin: "0px" }}>Create</button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;