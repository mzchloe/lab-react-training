import React from "react"

export default function Random(props) {
    let random = Math.floor(Math.random()* props.max) + 1
    return (
        <div>
            <span>Random value between {props.min} and {props.max} =&gt; {random}</span>
        </div>
    )
} 