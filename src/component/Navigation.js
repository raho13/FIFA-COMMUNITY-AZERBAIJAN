import React, { useContext } from "react";
import { menuContext } from "../context";
import Newsfeed from "../pages/Newsfeed";
import Futreyting from "../pages/Futreyting";
import Streams from "../pages/Streams";
import AccountHub from "../pages/AccountHub";
import Lessons from "../pages/Lessons";
import { Switch, Route, Link } from "react-router-dom";
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
        <Route path="/" exact component={Newsfeed} />
      </Switch>
      <Switch>
        <Route path="/streams" component={Streams} />
      </Switch>
      <Switch>
        <Route path="/Lessons" component={Lessons} />
      </Switch>
      <Switch>
        <Route path="/Fut-reyting" component={Futreyting} />
      </Switch>
      <Switch>
        <Route path="/Accounthub" component={AccountHub} />
      </Switch>
    </div>
  );
}
