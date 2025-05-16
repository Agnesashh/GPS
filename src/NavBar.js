import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./gps.css";

function NavBar() {
  const navigate = useNavigate();

 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand>GPS App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/Location">
              Location
            </Nav.Link>
            <Nav.Link as={Link} to="/Profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/destination">
              Find your destination
            </Nav.Link>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/company/action">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company/another">
                Another Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/company/something">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/company/separated">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/History">
              History
            </Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
            
              </Navbar>
    );
    }
    export default NavBar;
