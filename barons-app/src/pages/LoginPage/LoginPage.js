import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import "./LoginPage.css";


function Login() {
    return(          
        <div>
            <Row>
                <h1>Barons Team</h1>
            </Row>
            <Row>
                <div>
                    <form className="form">
                        <TextField id="outlined basic" label="Username" variant="standard" margin="dense"/>
                        <TextField id="outlined basic" label="Password" variant="standard" margin="dense"/>
                        <Button type="button" variant="contained" color="primary" className="form__custom-button">Log in</Button>
                    </form>
                    <p>Don't have an account?</p>
                    <Button type="button" variant="contained" color="primary">Register</Button>
                </div>
            </Row>
        </div>
    );
}

export default Login;
