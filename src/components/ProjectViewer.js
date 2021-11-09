import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FloatingLabel, ButtonGroup, Container, FormControl, ListGroup } from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';
import './ProjectViewer.css';

const url = 'https://barons461-backend.herokuapp.com'

async function getAllUsers() {
    const res = await axios.get(`${url}/user/get_all`)
    
    return res;
}

async function addUser(current_user, new_user, project) {
    console.log(current_user, new_user, project)
    const params = {
        current_user: current_user,
        project_id: project,
        user_name: new_user
    }

    const res = await axios.post(`${url}/project/add_user`, params);
    console.log(res);
    return res;
}

function ProjectViewer(props) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    
    useEffect(async () => {
        let result = await getAllUsers();
        console.log(result["data"]);
        
        setUsers(result["data"]);
        // console.log(users);
        // will likely make a call for hardware sets here and populate state variable for access
    }, [])


    return(  
        <Container>
            <div>
                <Row>
                    <Col>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Hardware Sets">
                                <Form.Select aria-label="Floating label select example">
                                    <option value="1">HW Set 1</option>
                                    <option value="2">HW Set 2</option>
                                    <option value="3">HW Set 3</option>
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Quantity">
                                <Form.Control type="email" placeholder="" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="center">
                        <Button size="lg" variant="outline-success">Check In</Button>
                        <Button size="lg" variant="outline-info">Check Out</Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                    <FloatingLabel controlId="floatingSelect" label="Add user">
                        <Form.Select aria-label="Floating label select example" onChange={(e) => setSelectedUser(e.target.value)}>
                            {users.map(user => <option>{user.username}</option>)}
                        </Form.Select>
                    </FloatingLabel>
                    </Col>
                    <Col className="center">
                        <Button size="lg" variant="outline-dark" onClick={() => addUser(Cookies.get('user-token'), selectedUser, props.project_id)}>Add User</Button>
                    </Col>

                </Row>
            </div>
        </Container>            
    );
}

export default ProjectViewer;
