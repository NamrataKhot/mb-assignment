import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'

export default function Header(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Employee Management System</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}

                <Button variant="primary" onClick={props.handleShow}>
                    Add Employee
      </Button>
            </Navbar>
        </div>
    )
}
