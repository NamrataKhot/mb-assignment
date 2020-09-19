import React, { Component } from 'react'
import { Button, Col, Form, Modal, Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { fetchEmployees, saveEmployees, deleteEmployees, updateEmployees, clearState } from '../store/actions/Employee';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: {
                empId: 0,
                firstName: "",
                lastName: "",
                address: "",
                dob: "",
                mobile: "",
                city: ""
            },
            isUpdateOperation: false,
            confirm:{
                status: false,
                title:"",
                operation: false
            },
            deleteId: 0
        }
    }

    confirmBox(){
        const {status, title} = this.state.confirm;
        return (<Modal show={status} onHide={this.confirmClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.confirmClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.onConfirmation}>
                            Confirm
          </Button>
                    </Modal.Footer>
                </Modal>)
    }

    confirmClose = () =>{
        var {confirm} = this.state;
        confirm.status = false;
        confirm.title = "";
        confirm.operation = false;
        this.setState({confirm});
    }

    onConfirmation = () =>{
        var {confirm} = this.state;
        confirm.status = false;
        confirm.title = "";
        confirm.operation = true;
        this.setState({confirm});
        if(this.state.isUpdateOperation){
            this.props.updateEmployees(this.state.employee);
            this.setState({ isUpdateOperation: false });
            this.props.handleClose();
            this.clearFields();

        }else{
           this.props.deleteEmployees(this.state.deleteId);
        }
    }

    confirmDeleteOperation = (empId) =>{
        var {confirm} = this.state;
        confirm.status = true;
        confirm.title = "Are you sure to delete this employee.";
        confirm.operation = false;
        
        this.setState({
            deleteId: empId,
            confirm
        })
    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    componentDidUpdate(prev) {
        if (prev.employee.empId !== this.props.employee.empId || this.props.isUpdated || this.props.isDeleted) {
            this.props.fetchEmployees();
            this.props.handleClose();
            this.props.clearState();
        }
    }

    onChange = (e) => {
        var employee = { ...this.state.employee };
        employee[e.target.name] = e.target.value;
        this.setState({
            employee
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { isUpdateOperation } = this.state;
        if (isUpdateOperation) {
            var {confirm} = this.state;
            confirm.status = true;
            confirm.title = "Are you sure to update this employee.";
            confirm.operation = false;
            this.setState({
                confirm
            });
            
        } else {
            this.props.saveEmployees(this.state.employee)
            this.clearFields();
        }

        
    }

    clearFields = () =>{
        const employee = {
            empId: 0,
            firstName: "",
            lastName: "",
            address: "",
            dob: "",
            mobile: "",
            city: ""
        }

        this.setState({ employee })
    }
    handleClose = () => {
        this.props.handleClose();
        const employee = {
            empId: 0,
            firstName: "",
            lastName: "",
            address: "",
            dob: "",
            mobile: "",
            city: ""
        }

        this.setState({ employee, isUpdateOperation: false })
    }
    render() {

        const { employees } = this.props;
        const { employee, isUpdateOperation } = this.state;
        const { handleShow, show } = this.props;


        const empList = employees.sort((a, b) => {
            return a.empId - b.empId;
        }).map(employee => (
            <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.firstName + ' ' + employee.lastName}</td>
                <td>{employee.address}</td>
                <td>{employee.dob}</td>
                <td>{employee.mobile}</td>
                <td>{employee.city}</td>
                <td><Button variant="danger" onClick={() => { this.confirmDeleteOperation(employee.empId)}}>Delete</Button></td>
                <td><Button variant="warning" onClick={() => { this.setState({ employee }); handleShow(); this.setState({ isUpdateOperation: true }) }}>Update</Button></td>
            </tr>
        ))

        return (
            <div className="mt-4">
                {this.confirmBox()}
                <Modal show={show} onHide={this.handleClose}>
                    <Form>
                        <Modal.Header closeButton>
                            <Modal.Title>New Employee</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group hidden={!isUpdateOperation} controlId="empId">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" value={employee.empId} readOnly={true} />
                            </Form.Group>
                            <Form.Row>

                                <Form.Group as={Col} controlId="firstName">
                                    <Form.Label>First Name:</Form.Label>
                                    <Form.Control type="text" name="firstName" value={employee.firstName} placeholder="Enter first name." onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="lastName">
                                    <Form.Label>Last Name:</Form.Label>
                                    <Form.Control type="text" name="lastName" value={employee.lastName} placeholder="Enter last name" onChange={this.onChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" value={employee.address} placeholder="Enter address" onChange={this.onChange} />
                            </Form.Group>
                            <Form.Group controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" value={employee.city} placeholder="Enter city" onChange={this.onChange} />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="dob">
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control type="text" name="dob" value={employee.dob} placeholder="Enter date of birth" onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="mobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="text" name="mobile" value={employee.mobile} placeholder="Enter mobile number" onChange={this.onChange} />
                                </Form.Group>
                            </Form.Row>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
          </Button>
                            <Button variant="primary" onClick={this.onSubmit}>
                                Save Changes
          </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Employee Name</th>
                            <th>Address</th>
                            <th>DOB</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {empList}
                    </tbody>
                </Table>
            </div>
        )
    }
}

Dashboard.propTypes = {
    employees: PropTypes.array.isRequired,
    employee: PropTypes.object.isRequired,
    message: PropTypes.object,
    fetchEmployees: PropTypes.func,
    saveEmployees: PropTypes.func,
    deleteEmployees: PropTypes.func,
    updateEmployees: PropTypes.func,
    clearState: PropTypes.func,
}

const mapStateToPosts = state => ({
    employees: state.employee.employees,
    employee: state.employee.employee,
    isUpdated: state.employee.isUpdated,
    isDeleted: state.employee.isDeleted,

})

export default connect(mapStateToPosts, { fetchEmployees, saveEmployees, deleteEmployees, updateEmployees, clearState })(withRouter(Dashboard));
