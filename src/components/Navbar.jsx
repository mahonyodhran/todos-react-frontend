import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNavbar() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#action/3.1'>Put</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>Stuff</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.3'>Here</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>Please</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicNavbar;
