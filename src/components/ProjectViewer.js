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

async function checkInHW(user, id, name, amount) {
    amount = Number(amount);
    const params = {
        current_user: user,
        project_id: id,
        hwset_name: name,
        amount_in: amount
    }
    console.log(params)
    const res = await axios.post(`${url}/project/check_in`, params);
    if (res["data"] === 0) {
        alert(`Successfully checked in ${amount} hardware!`)
    }
    
    console.log(res);
}

async function checkOutHW(user, id, name, amount) {
    amount = Number(amount);
    const params = {
        current_user: user,
        project_id: id,
        hwset_name: name,
        amount_out: amount
    }
    console.log(params)
    const res = await axios.post(`${url}/project/check_out`, params);
    if (res["data"] === 0) {
        alert(`Successfully checked out ${amount} hardware!`)
    } 
    else if (res["data"] === 1){
        alert(`Only some of the requested hardware could be checked out due to availability.`)
    }
    console.log(res);
}



function ProjectViewer(props) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [hwsetName, setHWSetName] = useState(props.hwsets[0].Name);
    const [quantity, setQuantity] = useState();
    
    useEffect(async () => {
        let result = await getAllUsers();
        
        setUsers(result["data"]);

    }, [])

    function verifyInput(num) {
        if (Number(num) < 0) {
            alert("Please only enter positive numbers")
        }
        else {
            setQuantity(num);
        }
    }

    return(  
        <Container>
            <div>
                <Row>
                    <Col>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingSelectGrid" label="Hardware Sets">
                                <Form.Select aria-label="Floating label select example" onChange={(e) => setHWSetName(e.target.value)}>
                                    {props.hwsets.map(set => <option>{set.Name}</option>)}
                                </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingInputGrid" label="Quantity">
                                <Form.Control  placeholder="" type="number" min="0" onChange={(e) => verifyInput(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="center">
                        <Button size="lg" variant="outline-success" onClick={() => checkInHW(Cookies.get('user-token'), props.project_id, hwsetName, quantity)}>Check In</Button>
                        <Button size="lg" variant="outline-info" onClick={() => checkOutHW(Cookies.get('user-token'), props.project_id, hwsetName, quantity)}>Check Out</Button>
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
