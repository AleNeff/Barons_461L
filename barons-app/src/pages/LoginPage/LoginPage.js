import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./LoginPage.css";


function Login() {
    return(          
        <div>
            <Row>
                <h1>Barons Team</h1>
            </Row>
            <Row>
                <form className="form">
                    <TextField id="outlined basic" label="Username" variant="outlined" margin="dense"/>
                    <TextField id="outlined basic" label="Password" variant="outlined" margin="dense"/>
                    <Button type="button" color="primary" className="form__custom-button">Log in</Button>
                </form>
            </Row>
        </div>
    );
}

export default Login;
