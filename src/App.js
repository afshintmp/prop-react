import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import NavBar from "./pages/components/NavBar";


const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default App;