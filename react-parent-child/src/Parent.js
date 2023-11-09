import React from 'react'
import ChildComponent from './Child'

export default class ParentComponent extends React.Component {

    state = {
        object: {
            test: "tested",
            arr: ["one", "two", "three"]
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Parent Component</h1>
                <ChildComponent objProp={this.state.object}/>

            </React.Fragment>
            
        )
    }
}