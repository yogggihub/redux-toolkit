import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Menu() {
  const products = useSelector(state => state.cart);
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/" as={Link}>Product</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link to="/cart" as={Link}>Cart {products.length}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;