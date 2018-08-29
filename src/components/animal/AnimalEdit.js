import React, { Component } from "react"
import "./Animal.css"

export default class AnimalEdit extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        employee: "",
        animal: {}
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => this.setState({ [evt.target.id]: evt.target.value })

    editAnimal = evt => {
        evt.preventDefault()

        this.props.editAnimal({
            id: this.state.animal.id,
            name: this.state.animalName,
            breed: this.state.breed,
            employeeId: this.state.animal.employeeId
        })
        .then(() => this.props.history.push("/animals"))
    }

    componentDidMount () {
        const animal = this.props.animals.find(animal =>
            animal.id === parseInt(this.props.match.params.animalId, 10)) || {}

        this.setState({
            animalName: animal.name,
            animal: animal,
            breed: animal.breed
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text"
                            required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            defaultValue={this.state.animal.name}
                            id="animalName"
                            placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="breed"
                            required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            defaultValue={this.state.animal.breed}
                            id="breed"
                            placeholder="Breed" />
                    </div>
                    <button type="submit"
                        className="btn btn-primary"
                        onClick={this.editAnimal}>
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}
