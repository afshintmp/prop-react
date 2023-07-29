import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import NavBar from "./pages/components/NavBar";
import Footer from "./pages/components/Footer";
import Register from './pages/register/Register';
import Admin from "./pages/admin/Admin";


const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;