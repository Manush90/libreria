import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNav = function () {
  return (
    <>
      <Navbar bg="success" className="mb-3 align-content-center " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Libreria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
