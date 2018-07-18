import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: []
    }

    deleteAnimal = id => AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
        }))

    deleteEmployee = id => EmployeeManager.removeAndList(id)
        .then(employees => this.setState({
            employees: employees
        }))


    componentDidMount() {
        const _state = {}

        AnimalManager.listWithCaretaker().then(animals => _state.animals = animals)
            .then(() => EmployeeManager.all())
            .then(employees => _state.employees = employees)
            .then(() => LocationManager.all())
            .then(locations => _state.locations = locations)
            .then(() => {
                this.setState(_state)
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}
