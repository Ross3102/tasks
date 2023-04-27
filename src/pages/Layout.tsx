import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Tasks</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link as={Link} to="/tasks">
                Tasks
              </Nav.Link>
              <Nav.Link as={Link} to="/calendar">
                Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/schedules">
                Schedules
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{paddingTop: 10, paddingBottom: 10}}>
        <Outlet />
      </Container>
    </>
  );
}
