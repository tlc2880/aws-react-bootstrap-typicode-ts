import useFetch from "../services/useFetch";
import { Container, Row, Col, Table } from "react-bootstrap";
import { AlbumType } from "../types.d";

type Props = {
  userId: number;
};

  const AlbumList = ({ userId }: Props) => {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3 className="text-primary">User Albums List</h3>
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
              </tr>
            </thead>
              <tbody>
                {data.map((post: AlbumType )=> {
                  return (
                    <tr key={post.id}>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
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

export default AlbumList;