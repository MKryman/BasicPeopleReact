import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';


class PersonTable extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        people: []
    }

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }

    onLastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }

    onAgeChange = e => {
        this.setState({  age: e.target.value })
    }

    addClick = () => {
        const copy = [...this.state.people]
        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        };
        copy.push(person);
        this.setState({ people: copy, firstName: "", lastName: "", age: "" })
    }

    deleteClick = () => {
        this.setState({ firstName: "", lastName: "", age: "" })
    }

    render() {
        return (
            <div className="container mt-5">
                <PersonForm firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    firstNameChange={this.onFirstNameChange}
                    lastNameChange={this.onLastNameChange}
                    ageChange={this.onAgeChange}
                    addClick={this.addClick}
                    deleteClick={this.deleteClick} />
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PersonRow firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            age={this.state.age}
                            people={this.state.people} />
                    </tbody>
                </table>
            </div>
        )
    }

}

export default PersonTable;