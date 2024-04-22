import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Bar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Nav.Link href="/home">Home</Nav.Link>
      </Container>
      <Container>
        <Nav.Link href="/things-to-read">ThingsToRead</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Bar;