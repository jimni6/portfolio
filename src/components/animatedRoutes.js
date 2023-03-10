import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/home/home";

const AnimatedRoutes = ({ personalDetails }) => {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home name={personalDetails.name} tagline={personalDetails.tagline} />} />
        </Routes>
    );
};

export default AnimatedRoutes;