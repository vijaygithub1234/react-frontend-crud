import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class DeleteEmployee extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        EmployeeService.deleteEmployee(this.props.match.params.id).then((res) => {
            let result = res.data
            console.log(`result: ${result}`)
            this.props.history.push("/employees")
        })

    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default DeleteEmployee
