import { useState } from "react";
import useFetch from "../services/useFetch";
import { Container, Row, Col, Table } from "react-bootstrap";
import PostList from "./PostList";
import TodoList from "./TodoList";
import { UserType } from "../types";

let UserList = () => {
    const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
    const [id, setId] = useState(1);

    const selectUser = (id: number) => {
        setId(id);
      };

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className="text-primary">Users List</h3>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur deserunt ducimus inventore libero nam officia sit ullam. Ex ipsa nemo nesciunt odio odit quas rerum saepe veritatis vero voluptate!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover className="shadow-lg text-center">
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
                                {data?.map((user: UserType )=> {
                                    return (
                                        <tr key={user.id} onClick={() => selectUser(user.id)}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    )})
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
           <PostList userId={id} />
           <TodoList userId={id} />
        </>
    )
};

export default UserList;
