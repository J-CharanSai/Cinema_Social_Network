import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from 'axios'
import "./styles.css";/*
class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>user id</label>
                    <input type="text" className="form-control" placeholder="Enter userid" onChange={(e) => {
                        setuseridReg(e.target.value);
                    }}
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => {
                        setemailidReg(e.target.value);
                    }}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => {
                        setpasswordReg(e.target.value);
                    }}
                    />
                </div>
                <button onClick={signup} type="submit" className="btn btn-primary btn-block">Sign Up</button>

                <p className="forgot-password text-right">
                  Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
*/

export default function SignUp() {

    const [userid, setuserid] = useState("");
    const [emailid, setemailid] = useState("");
    const [password, setpassword] = useState("");


    const signup = () => {
        Axios.post("http://localhost:3001/signup", {
            userid: userid,
            emailid: emailid,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    }

    function validateForm() {
        return emailid.length > 0 && password.length > 0 && userid.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="sign">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="userid">
                    <Form.Label>Userid</Form.Label>
                    <Form.Control
                        autoFocus
                        type="UserIid"
                        value={userid}
                        onChange={(e) => setuserid(e.target.value)}
                    />
                </Form.Group>
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
                <Button onClick={signup} class="btn btn-primary btn-block" block size="lg" type="submit" >
                    sign Up
                </Button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </Form>
        </div>
    );
}

