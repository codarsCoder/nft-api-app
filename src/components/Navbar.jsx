import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState ,useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  
    const userL = {email : true}
  useEffect(() => {
    setLogin(true)
  }, [])

    const [IsOpen, setIsOpen] = useState(false)
 const  toggleOpen = () => setIsOpen(!IsOpen);

  
  const [login, setLogin] = useState(false)
const searchZero = ()=>{
  setTimeout(() => {
    // setSearch("")
  }, 10);
  
} 

  const navigate = useNavigate();
  return (
    <Navbar bg="lidarkght" variant="dark" expand="md" >
      <Container>
        <Navbar.Brand  as={Link}  to="/">POKE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/detail/8">Link</Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    

  )
}

export default Navigation
