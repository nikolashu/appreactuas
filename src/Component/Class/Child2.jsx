import React, { Component } from 'react'
import Grandchild from './Grandchild'

class Child2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h3>Child 2</h3>
                <Grandchild data={this.props.stock}/>
            </div>
        )
    }
}

export default Child2