import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
// import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookLists from "./components/BookLists";

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <Welcome />
      <MyNav />
      <Container>
        {/* <AllTheBooks /> */}
        <BookLists books={fantasy} />
      </Container>
      {/* <MyFooter /> */}
    </>
  );
}

export default App;
