import React, { Component } from 'react'

export default class DetailCard extends Component {
    render () {
        return (
            <React.Fragment>
                <div key={this.props.resource.id} className={`card card--${this.props.type}`}>
                    <div className="card__body">
                        <h5 className="card__title">
                            <img alt={`Resource ${this.props.resource.id}`}
                                 src={this.props.resourceImage}
                                 className={`${this.props.style}`} />
                            {this.props.resource.name}
                        </h5>
                    </div>
                </div>

                <section>
                    {this.props.additionalElement}
                </section>
            </React.Fragment>
        )
    }
}
