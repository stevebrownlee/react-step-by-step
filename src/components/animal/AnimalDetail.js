import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.breed}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                            .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}