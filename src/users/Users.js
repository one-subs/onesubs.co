import useRoutes from './routes';
import useAuth from "../hooks/auth.hook";
import AuthContext from "../context/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Helmet } from 'react-helmet';
import "./styles/Users.css";

const Users = () => {
  const { token, login, logout, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <></>;
  }

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Helmet>
          <title>Account</title>
          <meta name="description" content="Soon we will launch our service, and you'll be the first to know." />
          <link rel="canonical" href={`${process.env.REACT_APP_ONESUBS}/account`} />
      </Helmet>
      
      <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
        { routes }
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default Users;