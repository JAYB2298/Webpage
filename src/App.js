import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Main from "./components/App"
import Demo from  "./components/demo/demo"

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/demo' component={Demo}/>
                </Switch>
            </Router>
        </>
    )
}