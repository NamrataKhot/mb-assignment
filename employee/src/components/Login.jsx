import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
             redirect: null 
        }
    }

    login = (e) =>{
        e.preventDefault();
        this.setState({
            redirect:"/dashboard"
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="row mt-5">
                <div className="offset-md-8 col-md-4 ">
                    <Card>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.login}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
  </Button>              <Link className="float-right" to="/sign-up">Register</Link>

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
