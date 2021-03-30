import React, { useContext } from "react";
import { menuContext } from "../context";
import Newsfeed from "../pages/Newsfeed";
import Futreyting from "../pages/Futreyting";
import Streams from "../pages/Streams";
import AccountHub from "../pages/AccountHub";
import Lessons from "../pages/Lessons";
import Members from "../pages/Members";
import Futcoins from "../pages/Futcoins";
import FutTournaments from "../pages/FutTournaments";
import Profil from "../pages/Profil";
import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
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
        <Route exact path="/" component={Newsfeed} />
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
      <Switch>
        <Route path="/Profil" component={Profil} />
      </Switch>
      <Switch>
        <Route path="/Members" component={Members} />
      </Switch>
      <Switch>
        <Route path="/Futcoins" component={Futcoins} />
      </Switch>
      <Switch>
        <Route path="/FutTournaments" component={FutTournaments} />
      </Switch>
      <Switch>
        <Route path="/*" component={Newsfeed} />
      </Switch>
    </div>
  );
}
