import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import eventplannerlogo from './images/EventPlanner.png';
import { Link, Outlet } from 'react-router-dom';


const Layout=()=>{
    return(
        <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">
            EventPlanner
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
               Home
            </Nav.Link>
            <Nav.Link as={Link} to="sheduleEvent">Shedule your event</Nav.Link>
            <Nav.Link as={Link} to="events">Your Events</Nav.Link>
            <Nav.Link as={Link} to="search">Search Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      <footer>
      <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Event Planner. All rights reserved.
      </p>
    </footer>
      </footer>
        </>
    )
}
const styles = {
  footer: {
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    padding: '10px 20px',
    textAlign: 'center',
    
    left: '0',
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Layout;