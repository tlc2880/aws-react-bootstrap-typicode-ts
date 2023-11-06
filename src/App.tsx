import './App.css';
import { Container, Navbar } from "react-bootstrap";
import Counter from "./components/Counter";
import Register from "./components/Register";
import UserList from "./components/UserList";
import PaginatePosts from './components/PaginatePosts';
import PaginateComment from './components/PaginateComment';
import PaginatePhoto from './components/PaginatePhoto';

function App() {
  return (
    <>
      <Navbar bg="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap Typicode</Navbar.Brand>
        </Container>
      </Navbar>
      <Counter/>
      <Register />
      <UserList />
      <PaginatePosts />
      <PaginateComment />
      <PaginatePhoto />
    </>
  );
}

export default App;
