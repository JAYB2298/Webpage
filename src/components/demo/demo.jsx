import React from 'react'
import {Link} from "react-router-dom"
export default function demo() {
    return (
        <div>
            <h1>Hello from demo</h1>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    )
}
