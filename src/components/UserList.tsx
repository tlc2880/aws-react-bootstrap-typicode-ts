import { useEffect, useState } from 'react';
import {UserService} from "../services/UserService";
import {Container, Row, Col, Table} from "react-bootstrap";
import { UserType } from "../types.d"

const UserList = () => {
    const [state , setState] = useState([]);

    useEffect(() => {
        UserService.getAllUsers().then((response) => {
            setState(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className="text-primary">User List</h3>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur deserunt ducimus inventore libero nam officia sit ullam. Ex ipsa nemo nesciunt odio odit quas rerum saepe veritatis vero voluptate!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" className="shadow-lg text-center">
                            <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Company</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    state.length > 0 &&
                                    state.map((user: UserType )=> {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                                <td>{user.company.name}</td>
                                                <td>{user.address.city}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
};
export default UserList;
