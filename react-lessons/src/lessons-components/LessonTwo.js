import React from 'react'
import "./LessonTwo.css"
import Button from '../components/Button'

function sayGoodBye() {
    return 'Goodbye'
}

function sayGoodBye2() {
    return (
        <p>GOODBYE</p>
    )
}

export default function LessonTwo() {
    return (
        <React.Fragment>
            <div>
                <h3>Javascript Expressions in JSX</h3>
                <p className="p-tag">2 + 2 = {2 + 2}</p>
                <p className="p-tag">"Harry" + "Styles" = {"Harry" + "Styles"}</p>
                <p className="p-tag" style={{ color: 'yellow', backgroundColor: 'black' }}>Style Me!</p>

                <h3>Functions in Components</h3>
                <p>{sayGoodBye()}</p>
                <p>{sayGoodBye2()}</p>

                <h3>Props for Components</h3>
                <Button /><Button /><Button />
                <p>Components can receive arguments! These arguments are known as props!</p>

            </div>

        </React.Fragment>
    )
}