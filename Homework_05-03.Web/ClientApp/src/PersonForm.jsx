import React from "react";
import PersonTable from "./PersonTable";


class PersonForm extends React.Component{
    render() {
   
    return (
        <div className="row">
            <div className="col-auto mb-4">
                <input type="text" className="form-control" placeholder="First Name" value={this.props.firstName} onChange={this.props.firstNameChange} />
            </div>
            <div className="col-auto mb-4">
                <input type="text" className="form-control" placeholder="Last Name" value={this.props.lastName} onChange={this.props.lastNameChange} />
            </div>
            <div className="col-auto mb-4">
                <input type="text" className="form-control" placeholder="Age" value={this.props.age} onChange={this.props.ageChange} />
            </div>
            <button className="col-md-1 mb-4 btn btn-success" onClick={this.props.addClick}>Add</button>
            <button className="col-md-1 mb-4 btn btn-danger"  onClick={this.props.deleteClick}>Delete</button>
        </div>

        )
    }
}
export default PersonForm;