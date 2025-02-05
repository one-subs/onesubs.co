import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

import useHttp from "../../hooks/http.hook";

import Alert from "./components/Alert.js";
import { ReactComponent as Join } from '../styles/images/join.svg';

import Loading from "../../pages/Loading.js";

function CreateAccount() {

  const { request, error, clearError, loading } = useHttp();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const create = async (e) => {
    e.preventDefault();
    try {
      const response = await request("/user/registration", "POST", { email });
      if (response) {
        navigate(`/account/verification?email=${ email }`);
      }
    } catch (err) {}
  }

  if (loading) return <Loading/>;

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
            
            <button onClick={(e) => create(e)} style={{ margin: "0px" }}><span>Create</span></button>

            <div className="header" style={{ textAlign: 'center', marginTop: '15px' }}>
              <Link to="/account" style={{ textDecoration: 'none', color: '#2174ea' }}>
                <span style={{ fontSize: '17px' }}>Already have an account</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;