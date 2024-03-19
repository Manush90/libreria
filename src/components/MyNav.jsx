import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logolibrary.png";

const MyNav = function () {
  return (
    <Navbar expand="lg" className="bg-warning p-0">
      <Container fluid>
        <Navbar.Brand href="">
          <img src={logo} width="70" height="70" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Horror</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Tutti i Libri</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
