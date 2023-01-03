import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button, Form} from "react-bootstrap";
import {useContext} from "react";
import {DataContext} from "../../context/context";
import './NavigationBar.css'
import {Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

export const NavigationBar = () => {

    const linkStyle = {color: 'inherit', textDecoration: 'none'}

    const context = useContext(DataContext);


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to={'/'} style={linkStyle}>Logo</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/products">
                            <Nav.Link>All products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products/games">
                            <Nav.Link>Games</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products/consoles">
                            <Nav.Link>Consoles</Nav.Link>
                        </LinkContainer>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                    </Nav>
                    {context.user ?
                        (<NavDropdown title={context.user.nickname} id="basic-nav-dropdown">
                            <LinkContainer to="/profile">
                                <NavDropdown.Item>My profile</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <NavDropdown.Item>Cart</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/wishlist">
                                <NavDropdown.Item>Wishlist</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/wishlist">
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                LogOut
                            </NavDropdown.Item>
                        </NavDropdown>)
                        :
                        (
                            <div className={'navBtnContainer'}>
                                <Button variant="outline-dark"><Link to={'/login'}
                                                                     style={linkStyle}>LogIn</Link></Button>
                                <Button variant="outline-dark"><Link to={'/login'}
                                                                     style={linkStyle}>Register</Link></Button>
                            </div>
                        )


                    }
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

