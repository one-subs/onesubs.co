import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { GoogleLogin } from '@react-oauth/google';
import AuthContext from "../../context/AuthContext";
import useHttp from "../../hooks/http.hook";

import Alert from "./components/Alert.js";
import { ReactComponent as LoginImage } from '../styles/images/login.svg';

import Loading from "../../pages/Loading.js";

function Login() {

  const auth = useContext(AuthContext);
  const { request, error, clearError, loading } = useHttp();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await request("/user/login", "POST", { email, password });
      if (response) {
        auth.login(response.token, response.userId);
        navigate("/account");
      }
    } catch (err) {}
  }

  const googleAccount = async (credential) => {
    try {
      const response = await request("/user/google-account", "POST", { credential });
      if (response) {
        auth.login(response.token, response.userId);
        navigate("/account");
      }
    } catch (err) {}
  }

  if (loading) return <Loading/>;
  
  return (
    <div className="user">
      {error ? <Alert message={error} type={"error"} clearError={clearError}/> : ""}
      <div className="page_width">

        <div className="left">
          <div className="form">

            <h1>Login</h1>

            <div className="input-container">
              <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required/>
              <label htmlFor="input">Email</label>
            </div>

            <div className="input-container">
              <input name="password" type={visible ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required/>
              <label htmlFor="input">Password</label>
              <span
                className="toggle-visibility"
                onClick={() => setVisible(!visible)}
                title={visible ? "Hide Password" : "Show Password"}
              >{visible ? "🙈" : "👁️"}</span>
            </div>

            <div className="header" style={{ textAlign: "center", marginTop: "-15px", justifyContent: "space-between", display: "flex" }}>
              <Link to="/account/reset-password" style={{ textDecoration: 'none', color: '#1e293b' }}>
                <span>Forgot password?</span>
              </Link>
              <Link to="/account/create-account" style={{ textDecoration: 'none', color: '#1e293b' }}>
                <span style={{ marginLeft: "15px" }}>Sign up</span>
              </Link>
            </div>

            <button onClick={(e) => login(e)}>
              <span> Sign in </span>
            </button>

            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={credentialResponse => {
                googleAccount(credentialResponse.credential);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              width="330"
            />

            <div className="header" style={{ textAlign: 'center', marginTop: '15px' }}>
              <Link to={`${process.env.REACT_APP_BUSINESS}/`} style={{ textDecoration: 'none', color: '#2174ea' }}>
                <span style={{ fontSize: '18px' }}><b>Business account</b></span>
              </Link>
            </div>

          </div>
        </div>

        <div className="right" style={{ display: (window.innerWidth > 900) ? "block" : "none" }}>
          <LoginImage style={{ marginTop: '40px', width: '600px', height: '500px' }}/>
        </div>

      </div>
    </div>
  );
}

export default Login;