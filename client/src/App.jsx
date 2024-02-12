import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
