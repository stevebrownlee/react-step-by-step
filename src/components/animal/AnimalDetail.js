import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        const animal = this.props.animals.find(
            animal => animal.id === parseInt(this.props.match.params.animalId, 10)
        ) || {}
        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card__body">
                        <h4 className="card__title">
                            <img alt={`Dog ${animal.id}`} src={dog} className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card__title">{animal.breed}</h6>
                        <button className="card__link"
                                 onClick={() => this.props.deleteAnimal(animal.id)
                                            .then(() => this.props.history.push("/animals"))}>
                            Delete
                        </button>
                        <button className="card__link"
                                onClick={() => this.props.history.push(`/animals/edit/${animal.id}`)}>
                            Edit
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}