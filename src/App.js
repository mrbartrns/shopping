import "./App.css";
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
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
import Detail from "./Detail";
function App() {
  const [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <NavbarWrapper />
      <Switch>
        {/* 여러개가 모두 맞더라도 택1하여 보여줌 */}
        <Route exact path="/">
          <JumbotronWrapper />
          <ShoesContainer shoes={shoes} />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을 때 보여지는 페이지</div>
        </Route>
      </Switch>
    </div>
  );
}

// display navbar
// todo: correct navbar link href
function NavbarWrapper() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">UIShoes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/detail">Detail</Link>
          </Nav.Link>
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
      <p>이번주에만 잡을 수 있는 특별한 기회를 놓치지 마세요.</p>
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
          return <ShoesWrapper data={data} />;
        })}
      </div>
    </div>
  );
}

// 계속 상속하여 컴포넌트 구성도 가능
function ShoesWrapper(props) {
  const shoes = props.data;
  return (
    <div className="col-md-4" key={shoes.id}>
      <img src={shoes.img ? shoes.img : null} />
      <h4>{shoes.title}</h4>
      <p>
        {shoes.content} &<span className="shoes-price"> {shoes.price}</span>
      </p>
    </div>
  );
}

export default App;
