import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Student from './components/Student/Student'
import Classlist from './components/ClassList/ClassList'

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={About} path="/about" />
                <Route component={Classlist}  path="/classlist/:class"/>
                <Route component={Student}  path="/student/:id"/>
         
          </Switch>
                )
    }
}
