import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
//import User from '../types.d'

const Register = () => {
    const [state , setState] = useState({
        user : {
            username : '',
            email : '',
            password : ''
        }
    });

    let updateInput = (e: any) => {
        const { name, value } = e.target;
        setState({ ...state, [name] : value})
    };

    let register = (e: any) => {
        e.preventDefault();
        console.log(state.user);
    };

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col md={3}>
                        <Card  bg={'Dark'} className="shadow-lg">
                            <Card.Header className="p-3" style={{backgroundColor: '#ffc107'}}>
                                <h4>Register</h4>
                            </Card.Header>
                            <Card.Body style={{backgroundColor : '#f7f5f0'}}>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="username"
                                            onChange={updateInput}
                                            type="text" placeholder="Username"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="email"
                                            onChange={updateInput}
                                            type="email" placeholder="Email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="password"
                                            onChange={updateInput}
                                            type="password" placeholder="Password"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Button onClick={register} variant="warning" type="submit">Register</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};
export default Register;