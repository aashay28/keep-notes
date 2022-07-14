import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Keep Notes</Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  );
};
export default Header;
