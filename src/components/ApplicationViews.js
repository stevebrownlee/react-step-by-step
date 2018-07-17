import { Route } from 'react-router-dom'
import React, { Component } from "react"
import settings from "../settings"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


export default class ApplicationViews extends Component {
    state = {
        data: {
            locations: [],
            animals: [],
            employees: []
        }
    }

    componentDidMount() {
        fetch(`${settings.remoteURL}/db`)
            .then(e => e.json())
            .then(data => this.setState({ data: data }))
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.data.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.data.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.data.employees} />
                }} />
            </React.Fragment>
        )
    }
}