import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from '../components/background';
import Navbar from '../components/navbar';
import Home from '../pages/Home';

function MainRouter() {
    return (
        <Router>
            <Background>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Background>
        </Router>
    );
}

export default MainRouter;
