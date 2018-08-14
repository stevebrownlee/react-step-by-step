import React, { Component } from 'react'

export default class DetailCard extends Component {
    render () {
        return (
            <React.Fragment>
                <div key={this.props.resource.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={this.props.resourceImage} className={`${this.props.style}`} />
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