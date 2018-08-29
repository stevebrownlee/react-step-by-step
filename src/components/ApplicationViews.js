import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"
import LocationList from "./location/LocationList"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import Login from "./auth/Login"
import AnimalEdit from "./animal/AnimalEdit";
import ResourceList from "./generic/ResourceList";

import person from "./employee/person.png"
import building from "./location/building.png"


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

    addAnimal = animal => AnimalManager.addAndList(animal)
        .then(animals => this.setState({
            animals: animals
        }))

    editAnimal = animal => AnimalManager.editAndList(animal)
        .then(animals => this.setState({
            animals: animals
        }))

    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null

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
                <Route exact path="/locations" render={(props) => {
                    return <ResourceList listStyle="locations"
                                  resourceList={this.state.locations}
                                  resourceStyle="icon--building"
                                  resourceImage={building} />
                }} />


                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                    return <AnimalEdit {...props}
                                        animals={this.state.animals}
                                        editAnimal={this.editAnimal} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees} />
                }} />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <ResourceList listStyle="employees"
                                  resourceList={this.state.employees}
                                  resourceStyle="icon--person"
                                  resourceImage={person}
                                  additionalElement={
                                    <button onClick={() => this.deleteEmployee()}>Hello</button>
                                  } />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}
