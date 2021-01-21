import React from 'react'
import Newsfeed from '../pages/Newsfeed'
import Streams from '../pages/Streams'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Navigation() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Newsfeed} />
            </Switch>
            <Switch>
                <Route path='/streams' exact component={Streams} />
            </Switch>
        </Router>
    )
}
