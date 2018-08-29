import React, { Component } from 'react'
import person from "./person.png"
import "./Employee.css"
import AnimalCard from '../animal/AnimalCard';
import DetailCard from '../generic/DetailCard';


export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <DetailCard key={employee.id}
                                style="icon--employee"
                                resource={employee}
                                resourceImage={person} />
                )
            }
            </section>
        )
    }
}