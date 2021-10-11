import { Navbar, Nav, Container} from 'react-bootstrap'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand='sm' bg="dark" variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/hwsets'>Hardware Sets</Nav.Link>
                            <Nav.Link href='/sources'>Sources</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
