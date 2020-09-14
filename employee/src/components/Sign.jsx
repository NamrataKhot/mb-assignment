import React, { Component } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Sign extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="offset-md-6 col-md-6 ">
                    <Card>
                        <Card.Header>
                            <h2>Register</h2></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="firstName">
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name." />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="lastName">
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="dob">
                                        <Form.Label>Date of birth</Form.Label>
                                        <Form.Control type="text" placeholder="Enter date of birth" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="company">
                                        <Form.Label>company</Form.Label>
                                        <Form.Control type="text" placeholder="Enter company name" />
                                    </Form.Group>
                                </Form.Row>
                                <Button variant="primary" type="submit">
                                    Submit
                            </Button>
                                <Link className="float-right" to="/sign-up">Login</Link>

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
