import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from 'axios'
import "./styles.css";/*
class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign in</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {
                        setemailid(e.target.value);
                    }}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {
                        setpassword(e.target.value);
                    }}
                    />
                </div>
                <button onClick={signin} type="submit" className="btn btn-primary btn-block">Sign in</button>
            </form>
        );
    }
}*/

export default function SignIn() {

    const[password, setpassword] = useState("");
    const[emailid, setemailid] = useState("");


    const signin = () => {
        console.log("login")
        Axios.post("http://localhost:3001/signin", {
            emailid: emailid,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    }

    function validateForm() {
        return emailid.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="sign">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={emailid}
                        onChange={(e) => setemailid(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={signin} class="btn btn-primary btn-block" block size="lg" type="submit" >
                    sign in
                </Button>
            </Form>
        </div>
    );
}

