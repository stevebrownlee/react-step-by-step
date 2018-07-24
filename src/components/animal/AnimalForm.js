import React, { Component } from "react"
import "./Animal.css"

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => this.setState({ [evt.target.id]: evt.target.value })

    /*
        1. Validate that user made a selection for caretaker
        2. Create a new animal object from state
        3. Use `addAnimal` passed down from ApplicationViews to create animal
        4. Push `/animals` to browser history to show list of animals
    */
    constructNewAnimal = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }
            this.props.addAnimal(animal).then(() => this.props.history.push("/animals"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="animalName"
                               required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="animalName"
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="breed"
                               required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed"
                               placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue=""
                                name="employee"
                                id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                            {
                                this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                            }
                        </select>
                    </div>
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={this.constructNewAnimal}>
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}
