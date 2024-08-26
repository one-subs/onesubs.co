import useRoutes from './routes';
import useAuth from "../hooks/auth.hook";
import AuthContext from "../context/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
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
      <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
        { routes }
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default Users;