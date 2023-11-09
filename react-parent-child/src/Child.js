import React from 'react'


export default class ChildComponent extends React.Component {

    renderList() {
        return this.props.objProp.arr.map((c) => {
            return <li>{c}</li>
        })
    }


    render() {
        return (

            <div style={{backgroundColor:"lightblue"}}>
                <h4>Child Component</h4>
                {this.props.objProp.arr}
                {this.renderList()}
                <h5>Alternative</h5>
                {this.props.objProp.arr.map((c) => {
                    return <li>{c}</li>
                })}
            </div>
            

        )
    }


}