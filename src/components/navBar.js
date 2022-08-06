// import React from "react";
// import './css/navBar.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from "react-bootstrap/Button";
// function navBar(){
//     return(
//       <div className="navbox">
//       <Navbar>
        
//          <div className="logo l1">
//          EETICommunity
//          </div>

//          <div className="logo l2">
//          EETIC
//          </div>
//          <div className="logo l3">
//          ommunity
//          </div>
//          <div className="links">
//            <div className="home mouse">Home</div>
//            <div className="events mouse">Events</div>
//            <div className="about mouse">About Us</div>
//            <div className="team mouse">Team</div>
//            </div>
//            <div className="signIn mouse">Sign in</div>
//         <Button>Sign Up</Button>
//       </Navbar>    
//       </div>
//     );
// }

// export default navBar;


/* ============================================================================================================== */

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
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
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;