import React, { Component } from "react"
import "./Animal.css"

export default class AnimalEdit extends Component {
    // Set initial state
    state = {
        name: "",
        breed: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => this.setState({ [evt.target.id]: evt.target.value })

    render() {
        const animal = this.props.animals.find(animal =>
            animal.id === parseInt(this.props.match.params.animalId)) || {}
        return (
            <React.Fragment>
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text"
                               required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               defaultValue={animal.name}
                               id="name"
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="breed"
                               required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               defaultValue={animal.breed}
                               id="breed"
                               placeholder="Breed" />
                    </div>
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={() => this.props.editAnimal({
                                id: animal.id,
                                name: this.state.name,
                                breed: this.state.breed,
                                employeeId: animal.employeeId
                            })}>
                        Submit
                    </button>
            </React.Fragment>
        )
    }
}
