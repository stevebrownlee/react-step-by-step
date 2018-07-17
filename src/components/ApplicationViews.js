import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


export default class ApplicationViews extends Component {
    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ],
        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 3, name: "Angus" },
            { id: 4, name: "Henley" },
            { id: 5, name: "Derkins" },
            { id: 6, name: "Checkers" }
        ],
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}