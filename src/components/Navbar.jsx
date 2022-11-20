import { Link, NavLink, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { login, logOut } from "../redux/AuthSlice";
import { useCurrentUser, useIsLoggedIn } from "../hooks/hooks";

const Navigation = () => {
  const user = useCurrentUser()
  const dispatch = useDispatch()
  const isLoggedIn = useIsLoggedIn()
  const email = useSelector((state) => state.auth.email);
  const navigate = useNavigate();
  return (
    <Navbar bg="lidarkght" variant="dark" expand="md" >
      <Container>
        <Navbar.Brand as={Link} to="/">POKE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {
                (isLoggedIn === true) ?
                  (<>
                    <NavDropdown.Item as={Link} to="/user">{user.email}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/" onClick={() => dispatch(logOut())}>
                      LogOut
                    </NavDropdown.Item></>)
                  :
                  (
                    <NavDropdown.Item as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                  )
              }


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  )
}

export default Navigation
