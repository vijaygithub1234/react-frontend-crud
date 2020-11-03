import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class EmployeeListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.editEmployee = this.editEmployee.bind(this);

    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState(
                { employees: res.data }
            )
        });

        console.log("componentDidMount EmployeeListComp....")
    }
    editEmployee(id) {

        this.props.history.push(`/save-or-update-employee/${id}`)
    }
    deletetEmployee(id) {
        this.props.history.push(`/deleteEmployee/${id}`)
    }

    addEmployee = () => {
        this.props.history.push("/save-or-update-employee/-1")
    }
    render() {
        return (
            <div>
                <h2 className='text-center' style={{ color: "pink", fontSize: "50px", Text: "bold" }}>Employee List</h2>
                <div>
                    <button type="submit" className="btn btn-outline-success my-2 my-sm-0" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div>
                    <table className='table table-striped table-bordered' >

                        <thead style={{ color: "blue", fontSize: "30px", Text: "bold" }}>
                            <tr>
                                <td>FIRST NAME</td>
                                <td>LAST NAME</td>
                                <td>MAIL</td>
                                <td>ACTIONS</td>

                            </tr>


                        </thead>
                        <tbody style={{ color: "orange", fontSize: "20px", Text: "italic" }}>
                            {this.state.employees.map(employee => <tr key={employee.id}>

                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.editEmployee(employee.id)}>update</button>
                                    <button style={{ marginLeft: "10px" }} className="btn btn-danger " onClick={() => this.deletetEmployee(employee.id)}>delete</button></td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}

export default EmployeeListComponent
