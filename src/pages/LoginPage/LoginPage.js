import React from 'react';
import { Row, Col, Form, Container, Modal, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./LoginPage.css";
import axios from 'axios';


/** 
 *  This will authenticate the user, calling the authenticate() endpoint in Flask
 *  if the credentials are valid, we will return the user object
 *  if the credentials are invalid, we will return false. 
 */
async function LoginUser(user, pass) {
    const res = await axios.get('https://barons461-backend.herokuapp.com/user/login', {
        params: {
            username: user,
            password: pass
        }   
    })
    
    .then(function (response) {
        if (response["data"][0] === -1) {
            return null;
        }
        else {
            let dbUser = JSON.parse(response["data"][0]);
            console.log(dbUser);
            console.log(dbUser["username"]);
            return dbUser;
        }     
    })
    
    return res;
}

async function RegisterUser(user, pass) {
    console.log(user, pass);
    const params = {
        ID: "0000",
        username: user,
        password: pass
    }
    const res = await axios.post('https://barons461-backend.herokuapp.com/user/new_user', params);
    if (res["data"] === 1) {
        alert("Account created successfully! Please log in")
    }
    else {
        alert("Account creation failed. Please try a different username")
    }
}

export default function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let history = useHistory();

    /**
     * On submission of the login form, we authenticate the user and determine if their credentials are correct
     * If the credentials are invalid the token will be set to false. Need to do some kind of error catching to tell the user
     * that their credentials are invalid. 
     */
    async function handleSubmit(e){
        e.preventDefault();
        const token = await LoginUser(username, password);
        if (token) {
            props.setToken(token["username"]);
            console.log("Successfully logged in with token: " + token["username"]);
            Cookies.set('user-token', token["username"], { expires: 1 });
            history.push("/projects");
            window.location.reload();

        }
        else {
            props.setToken(false);
            console.log("Authentication failed");
            alert("Login failed. Re-enter your credentials or create an account.");
        }
        
        
    }

    return(  
        <Container>
            <div>
                <Row className="center">
                        <div>
                            <form className="form" onSubmit={handleSubmit}>
                                <Col>
                                    <div className="login-form">
                                        <h1>Barons Team</h1>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                                            </Form.Group>
                                            <Button type="button" onClick={handleSubmit}>Log in</Button>
                                            <p>Don't have an account?</p>
                                            <Button type="button" onClick={handleShow}>Register</Button>
                                        </Form>
                                    </div>
                                </Col>
                            </form>               
                            
                        </div>

                </Row>
                <Row>
                    <form>

                    </form>         
                </Row>
            </div>
            <Modal dialogClassName="modal-90w" size="lg" show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Create an account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button type="button" onClick={() => RegisterUser(username, password)}>Register</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>            

    );
}

