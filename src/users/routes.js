import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Verification from './pages/Verification';
import ResetPassword from './pages/ResetPassword';
import Info from './pages/Info';
import Navigation from './pages/Navigation';

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="*" element={<><Navigation/><Info/></>}/>
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/reset-password" element={<ResetPassword/>} />
                <Route path="/create-account" element={<CreateAccount/>} />
                <Route path="/verification" element={<Verification/>} />
                <Route path="*" element={<Login/>}/>
            </Routes>
        );
    }
}

export default useRoutes;