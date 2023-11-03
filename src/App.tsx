import './App.css';
import { Container, Navbar } from "react-bootstrap";
import Counter from "./components/Counter";
import Register from "./components/Register";
import UserList from "./components/UserList";
import Paginate from './components/Paginate';

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
      <Paginate />
    </>
  );
}

export default App;
