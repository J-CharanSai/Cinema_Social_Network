import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Axios from 'axios';
import SignUp from './signup'
import SignIn from './signin';
import Footer from './Footer';
import Actor from './Actor';
import Navbar from "./Navbar";

import Header from "./Header";
import Films from "./Films";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function Main() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/films" element={<Films />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default Main;
