import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.goToMainPage = this.goToMainPage.bind(this);
  }

  goToMainPage() {
    // this.props.history.push("/");
    this.props.history.push("/employees");
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee First Name: </label>
              <div>&nbsp;{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label> Employee Last Name: </label>
              <div>&nbsp;{this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label> Employee Email Address: </label>
              <div>&nbsp;{this.state.employee.emailId}</div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="col text-center">
          <button className="btn btn-secondary" onClick={this.goToMainPage.bind(this)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
