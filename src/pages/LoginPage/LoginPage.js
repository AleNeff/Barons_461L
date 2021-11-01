import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./LoginPage.css";


/** 
 *  This will authenticate the user, calling the authenticate() endpoint in Flask
 *  if the credentials are valid, we will return the user object
 *  if the credentials are invalid, we will return false. 
 */
function LoginUser(credentials) {
    const token = {
        username: "tester",
        password: "foo"
    }
    return token;
}

export default function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /**
     * On submission of the login form, we authenticate the user and determine if their credentials are correct
     * If the credentials are invalid the token will be set to false. Need to do some kind of error catching to tell the user
     * that their credentials are invalid. 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = LoginUser(username, password);
        props.setToken(token);
        console.log(token);
    }

    return(  
        <Container>
            <div>
                <Row>
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                        <h1>Barons Team</h1>

                            <TextField id="outlined basic" label="Username" variant="standard" value={username} onChange={e => setUsername(e.target.value)}/>
                            <TextField id="outlined basic" label="Password" variant="standard" value={password} onChange={e => setPassword(e.target.value)}/>
                            <Button type="button" variant="contained" color="primary" onClick = {handleSubmit}>Log in</Button>
                        </form>                        
                    </div>
                </Row>
                <Row className="center">
                    <form>
                        <p>Don't have an account?</p>
                        <Button type="button" variant="contained" color="primary">Register</Button>
                    </form>
                </Row>
            </div>
        </Container>            
    );
}

