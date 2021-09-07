import { Navbar as Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav bg="light">
      <Container>
        <Nav.Brand href="/">
          <img
            alt="Space Traveler's Hub"
            src="logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />{' '}
        SPACE TRAVELER'S HUB
        </Nav.Brand>
      </Container>
    </Nav>
  );
};

export default Navbar;
