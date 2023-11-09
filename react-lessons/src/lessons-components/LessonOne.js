import React from 'react'
import Button from '../components/Button'


export default function LessonOne() {
    return (
        <React.Fragment>
            <h3>Topics Covered:</h3>
            <ol>
                <li>History of ReactJS</li>
                <li>Introduction to JSX</li>
                <li>Setting up React Project</li>
                <li>Building React Applications with Components</li>
                <li>Introduction to Components (Functional)
                    <ul>
                        <li>Types of Components: Functional & className</li>
                        <li>Components are JS files</li>
                        <li>Name of function/class must match filename</li>
                        <li>Criteria of component:
                            <ol>
                                <li>Uppercase for first letter</li>
                                <li>All components returns JSX</li>
                                <li>Export components</li>
                            </ol>
                        </li>
                    </ul>
                </li>
            </ol>
        </React.Fragment>
    )
}