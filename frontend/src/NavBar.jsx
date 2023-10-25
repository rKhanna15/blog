import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap';


const NavBar = () => {
    return (


        <header>
            <Navbar bg="dark" expand="lg" className="bg-body-primary" style={{"position" : "fixed", "width":"100%", "left":"0px","top":"0px"}}>
            <Container>
                <Navbar.Brand href="/"><h1 style={{"color":"lightBlue"}}><strong>&lt;Blog App/&gt;</strong></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/create-blog">+</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default NavBar