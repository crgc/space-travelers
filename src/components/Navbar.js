import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const sections = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <Navbar className="py-4" bg="light">
      <Container className="navbar-container d-flex flex-row justify-content-between">
        <Navbar.Brand href="/">
          <img
            alt="Space Traveler's Hub"
            src="logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
          />{' '}
        SPACE TRAVELER'S HUB
        </Navbar.Brand>
        <Nav>
          {sections.map((section) => (
            <Nav.Link key={section.id}>
              <NavLink
                to={section.path}
                activeClassName="active-link"
                exact
              >
                {section.text}
              </NavLink>
            </Nav.Link>
            ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
