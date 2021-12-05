import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Next } from "react-bootstrap/esm/PageItem";
import UserContext from "../context/user-context";

function Header() {
  const userContext = useContext(UserContext);
  let [user, setUser] = useState(false);
  let [admin, setAdmin] = useState(false);
  let [manager, setManager] = useState(false);
  const Admin = () => {
    if (localStorage.getItem("UserType") === "Admin") {
      setAdmin(true);
    }
  };

  const Manager = () => {
    if (localStorage.getItem("UserType") === "Manager") {
      setManager(true);
    }
  };

  const Users = () => {
    if (localStorage.getItem("UserType") === "User") {
      setUser(true);
    }
  };
  useEffect(() => {
    Admin();
    Manager();
    Users();
  });

  const User = () => {
    let role = localStorage.getItem("UserType");
    let username = localStorage.getItem("Username");
    if (localStorage.getItem("mytoken") && role === "Admin") {
      return role;
    } else if (localStorage.getItem("mytoken") && role === "User") {
      return username;
    } else {
      return "Travel Request Management App";
    }
  };

  return (
    <div className="navbarnfkt">
      <div className="headerTitle">
        <div className="headerContent">Travel Request Management System</div>
      </div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand >{User()}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!admin && !manager && <Nav.Link>
                <Link to="/home" className="navItem">
                  Home
                </Link>
              </Nav.Link>
              }
              {localStorage.getItem("mytoken") && (
                <Link
                  className="navItem"
                  onClick={() => {
                    userContext.logout(); window.location = "/home/login"
                  }}
                  to="home/login"
                >
                  Logout
                </Link>
              )}
              {!localStorage.getItem("mytoken") && (
                <Link className="navItem" to="/home/login">
                  Login
                </Link>
              )}
              {!localStorage.getItem("mytoken") && (
                <Link className="navItem" to="/home/register">
                  Register
                </Link>
              )}

              {admin && (
                <Link className="navItem" onClick={() => {
                  userContext.logout();
                }} to="/admin/register-manager">
                  Add Manager
                </Link>
              )}

              {!admin && !manager && (
                <NavDropdown title="Travel Request" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to="/home/travel-request">Travel Request</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
