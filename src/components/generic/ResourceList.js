import React, { Component } from 'react'
import DetailCard from './DetailCard';

export default class ResourceList extends Component {
    render () {
        return (
            <section className={`${this.props.listStyle}`}>
            {
                this.props.resourceList.map(resource =>
                    <DetailCard key={resource.id}
                                style={this.props.resourceStyle}
                                resource={resource}
                                additionalElement={this.props.additionalElement}
                                resourceImage={this.props.resourceImage} />
                )
            }
            </section>
        )
    }
}