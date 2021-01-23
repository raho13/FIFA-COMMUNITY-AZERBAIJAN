import React, { useContext } from "react";
import { menuContext } from "../context";
import Newsfeed from '../pages/Newsfeed'
import Streams from '../pages/Streams'
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Navigation() {
    const { menuVisible, msgWidget } = useContext(menuContext);

    const gridPosition = () => {
        if (
            (menuVisible === false && msgWidget === false) ||
            (menuVisible === true && msgWidget === true)
        ) {
            return "content-grid container";
        }
        if (menuVisible === true) {
            return "content-grid container1";
        }
        if (msgWidget === true) {
            return "content-grid container2";
        }
    };
    return (
        <div className={gridPosition()}>
            <Switch>
                <Route path='/' exact component={Newsfeed} />
            </Switch>
            <Switch>
                <Route path='/streams' exact component={Streams} />
            </Switch>
        </div>
    )
}
