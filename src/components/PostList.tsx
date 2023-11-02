import useFetch from "../services/useFetch";
import { Container, Row, Col, Table } from "react-bootstrap";
import { PostType } from "../types.d";

type Props = {
  userId: number;
};

const PostList = ({ userId }: Props) => {
  const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3 className="text-primary">User Posts List</h3>
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
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post: PostType )=> {
                  return (
                    <tr key={post.id}>
                      <td>{post.userId}</td>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default PostList;
