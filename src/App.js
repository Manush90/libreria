import AllTheBooks from "./components/AllTheBooks";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import Booklist from "./components/Booklist";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <div>
      <Welcome />
      <MyNav />
      <Container fluid>
        <Row className="justify-content-center gap-2 mb-2">
          <div className="bg-white divPromo text-center">
            <h3>Ultime Uscite</h3>
            <h1>In Evidenza</h1>
            <p>
              Non perderti le proposte più interessanti <br />
              del momento.
            </p>
          </div>
          <div className="d-flex justify-content-center wrap">
            <SingleBook index={0} />
            <SingleBook index={33} />
            <SingleBook index={9} />
            <SingleBook index={76} />
          </div>
          <h2 className=" text-center">Fantasy</h2>
          <div className="container text-center">
            <div className="row pe-4">
              <div className="col-12 col-lg-7 col-md-7 d-flex  flex-wrap">
                <Booklist></Booklist>
              </div>
              <div className="col-12 col-lg-5 col-md-5 pt-2 commentarea">
                <CommentArea></CommentArea>
              </div>
            </div>
          </div>

          <h2 className="text-center ">Horror</h2>
          <AllTheBooks />
        </Row>
      </Container>
    </div>
  );
}

export default App;
