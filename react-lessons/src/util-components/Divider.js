import React from 'react'
import "./Divider.css"


export default function Divider(props) {
    return (
        <div className="divider" style={{ backgroundColor: props.color }}>
            <span style={{ fontWeight: 500 }}>{props.header}</span>
        </div>
    )
}