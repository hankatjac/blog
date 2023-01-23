import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarMenu = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/write">
              Post
            </Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/?cat=business">
                Business
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/?cat=culture">
                Culture
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/?cat=technology">
                Technology
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/?cat=quotidian">
                Quotidian
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>{currentUser?.username}</Nav.Link>
            {currentUser ? (
              <Nav.Link eventKey={1} as={Link} to="/" onClick={logout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={1} as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link eventKey={2} as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    /* <div class="position-relative">
        <a href="#" class="mx-2">
          <span class="bi-facebook"></span>
        </a>
        <a href="#" class="mx-2">
          <span class="bi-twitter"></span>
        </a>
        <a href="#" class="mx-2">
          <span class="bi-instagram"></span>
        </a>

        <a href="#" class="mx-2 js-search-open">
          <span class="bi-search"></span>
        </a>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </div> */

  );
};

export default NavbarMenu;
