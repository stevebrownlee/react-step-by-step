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

    editAnimal = evt => {
        evt.preventDefault()

        this.props.editAnimal({
            id: this.state.animal.id,
            name: this.animalName.value,
            breed: this.animalBreed.value,
            employeeId: this.state.animal.employeeId
        })
        .then(() => this.props.history.push("/animals"))
    }

    componentDidMount () {
        const animal = this.props.animals.find(animal =>
            animal.id === parseInt(this.props.match.params.animalId, 10)) || {}

        this.animalName.value = animal.name
        this.animalBreed.value = animal.breed

        this.setState({
            animal: animal
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
                            ref={input => this.animalName = input}
                            placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="breed"
                            required="true"
                            className="form-control"
                            ref={input => this.animalBreed = input}
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
