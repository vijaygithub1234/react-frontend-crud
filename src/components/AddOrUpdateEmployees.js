import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class AddOrUpdateEmployees extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            contact: '',
            email: '',
        }

    }

    changeFirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    changeLastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    changeContactHandler = (event) => {
        this.setState({
            contact: event.target.value
        })
    }
    changeEmailIdHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    componentDidMount() {
        if (this.props.match.params.id == -1) {
            return
        }
        else {
            EmployeeService.getEmployeesById(this.state.id).then((res) => {
                let employees = res.data;
                this.setState({
                    firstName: employees.firstName, lastName: employees.lastName, email: employees.email
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, email: this.state.email };
        if (this.props.match.params.id == -1) {
            console.log("addEmployeee....")
            EmployeeService.addEmployee(employee).then(res => {
                this.props.history.push("/employees")
            })
        }
        else {
            console.log("Update Employeee....")
            EmployeeService.upateEmployee(employee, this.state.id).then(res => {
                this.props.history.push("/employees")
            })
        }



    }
    cancel = () => {
        this.props.history.push("/employees")
    }

    getTitle() {
        let queryId = this.props.match.params.id
        if (queryId == -1) {
            return <h3 className="text-center">Add Employee</h3>
        }
        else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        // let pageName;
        // const id = this.state.id;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }

                            <div className="card-body"></div>
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input type="text" name="firstname" placeholder="First Name" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input type="text" name="lastname" placeholder="Last Name" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>
                                <div className="from-group">
                                    <label>Email Id:</label>
                                    <input type="email" name="email" placeholder="Email Id" className="form-control" value={this.state.email} onChange={this.changeEmailIdHandler} />
                                </div>
                                <div className="from-group">
                                    <label>Contact Number:</label>
                                    <input type="text" name="contact" placeholder="Contact Number" className="form-control" value={this.state.contact} onChange={this.changeContactHandler} />
                                </div>



                                <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}> save</button>
                                <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "20px" }}>cancel</button>

                            </form>
                        </div>
                    </div>
                </div >
            </div >
        )
    }

}

export default AddOrUpdateEmployees
