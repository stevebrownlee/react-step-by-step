import React, { Component } from 'react'
import building from "./building.png"
import "./Location.css"


export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title locationTitle">
                                <img src={building} className="icon--building" />
                                {location.name}
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}