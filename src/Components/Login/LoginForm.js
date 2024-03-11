import React, { useContext, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Import Form, Button from react-bootstrap
import AuthContext from "./AuthContext";
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
    const [isLogIn, setIsLogIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(AuthContext);
    const history = useNavigate();

    const email = useRef();
    const password = useRef();

    const switchHandler = () => {
        setIsLogIn((prev) => !prev);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const inputEmail = email.current.value;
        const inputPassword = password.current.value;

        setIsLoading(true);

        fetch("AIzaSyCfZjfaHz4M7gb7WWaPqA4tpvKs9v_0fNg", {
            method: 'POST',
            body: JSON.stringify({
                email: inputEmail,
                password: inputPassword,
                returnToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then((data) => {
            authCtx.logIn(data.idToken, data.email);
            history("/store");
            console.log(data);
        }).catch((err) => {
            alert(err.message);
        });
    };

    return (
        <>
            <h4>{isLogIn ? "LogIn" : "Sign Up"}</h4>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={password} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default LogInForm;
