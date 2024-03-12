import AllTheBooks from "./components/AllTheBooks";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome></Welcome>
      <MyNav></MyNav>
      <Container fluid>
        <Row className="justify-content-center gap-2 mb-2">
          <AllTheBooks></AllTheBooks>
        </Row>
      </Container>
    </div>
  );
}

export default App;
