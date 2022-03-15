import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios'
import SignUp from './components/signup';
import SignIn from './components/signin';
import Footer from './components/Footer';

import Header from './components/Header';
import Navbar from "./components/Navbar";

function App() {
    return (
        <form>
            <Navbar />
            <SignUp />
            <SignIn />
            <Footer />
        </form>
  );
}

export default App;
