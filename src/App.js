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
          <div className="d-flex justify-content-center wrap">
            <div className="bg-white divPromo">
              <h3>Ultime Uscite</h3>
              <h1>In Evidenza</h1>
              <p>
                Non perderti le proposte più interessanti <br />
                del momento.
              </p>
            </div>
            <SingleBook index={0}></SingleBook>
            <SingleBook index={9}></SingleBook>
            <SingleBook index={76}></SingleBook>
          </div>
          <h2 className=" text-center">Fantasy</h2>
          <Booklist></Booklist>
          <h2 className="text-center ">Horror</h2>
          <AllTheBooks></AllTheBooks>
        </Row>
      </Container>
    </div>
  );
}

export default App;
