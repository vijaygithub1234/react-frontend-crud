import axios from 'axios'


const FIND_LIST_OF_EMPLOYEES = 'http://localhost:1234/api/v1/employees';
const FIND_LIST_OF_ADD_EMPLOYEES = 'http://localhost:1234/api/v1/add-employee';
const FIND_LIST_OF_UPDATE_EMPLOYEES = 'http://localhost:1234/api/v1/update-employee';
const FIND_EMPLOYEES_BY_ID = 'http://localhost:1234/api/v1/employees';
const DELETE_EMPLOYEES_BY_ID = 'http://localhost:1234/api/v1/delete-employees';
class EmployeeService {
    getEmployees() {
        return axios.get(FIND_LIST_OF_EMPLOYEES)
    }
    addEmployee(employee) {
        return axios.post(FIND_LIST_OF_ADD_EMPLOYEES, employee)
    }
    upateEmployee(employee, id) {
        return axios.put(FIND_LIST_OF_UPDATE_EMPLOYEES + `/` + id, employee)
    }
    getEmployeesById(employeeId) {
        return axios.get(FIND_EMPLOYEES_BY_ID + `/` + employeeId)
    }

    deleteEmployee(employeeId) {
        return axios.get(DELETE_EMPLOYEES_BY_ID + `/` + employeeId)
    }
}
export default new EmployeeService()