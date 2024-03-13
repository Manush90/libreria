import AllTheBooks from "./components/AllTheBooks";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import Booklist from "./components/Booklist";

function App() {
  return (
    <div>
      <Welcome></Welcome>
      <MyNav></MyNav>
      <Container fluid>
        <Row className="justify-content-center gap-2 mb-2">
          <h2 className="text-center text-white">Fantasy</h2>
          <div className="d-flex justify-content-center">
            <SingleBook index={0}></SingleBook>
          </div>

          <Booklist></Booklist>
          <h2 className="text-center text-white">Horror</h2>
          <AllTheBooks></AllTheBooks>
        </Row>
      </Container>
    </div>
  );
}

export default App;
