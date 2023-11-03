import useFetch from "../services/useFetch";
import { Container, Row, Col, Table } from "react-bootstrap";
import { TodoType } from "../types.d";

type Props = {
  userId: number;
};

  const TodoList = ({ userId }: Props) => {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3 className="text-primary">User Todos List</h3>
          </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover className="shadow-lg text-center">
            <thead>
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
              <tbody>
                {data.map((post: TodoType )=> {
                  return (
                    <tr key={post.id}>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      {post.completed ? (
                        <td   className="bg-success">Complete</td>
                        ) : (
                        <td className="bg-danger">Incomplete</td>
                        )
                      }
                    </tr>
                  )})
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default TodoList;
