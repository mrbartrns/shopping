import "./App.css";
import React, { useState } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
  Jumbotron,
} from "react-bootstrap";
import Data from "./data";
function App() {
  const [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <NavbarWrapper />
      <JumbotronWrapper />
      <ShoesContainer shoes={shoes} />
    </div>
  );
}

function NavbarWrapper() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">UIShoes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function JumbotronWrapper() {
  return (
    <Jumbotron className="jumbo">
      <h1>20% Season OFF 감사제</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

function ShoesContainer(props) {
  return (
    <div className="container products">
      <div className="row">
        {/* 3등분하는법 -> col-md-4 내부에 넣고싶은것 넣기 */}
        {props.shoes.map((data) => {
          return (
            <div className="col-md-4" key={data.id}>
              <img src={data.img ? data.img : null} />
              <h4>{data.title}</h4>
              <p>
                {data.content} <span className="shoes-price">{data.price}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
