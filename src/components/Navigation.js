import { Navbar, Nav, Container} from 'react-bootstrap'
import Cookies from 'js-cookie';
const Navigation = () => {

    function deleteCookie() {
        Cookies.remove('user-token')
    }
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand='sm' bg="dark" variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/hwsets'>Hardware Sets</Nav.Link>
                            <Nav.Link href='/sources'>Sources</Nav.Link>
                            <Nav.Link href='/' onClick={deleteCookie}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
