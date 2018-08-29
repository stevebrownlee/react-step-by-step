import React, { Component } from 'react'
import building from "./building.png"
import "./Location.css"
import DetailCard from '../generic/DetailCard';


export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <DetailCard key={location.id} style={`icon--building`}
                                resource={location}
                                type="location"
                                resourceImage={building} />
                )
            }
            </section>
        )
    }
}