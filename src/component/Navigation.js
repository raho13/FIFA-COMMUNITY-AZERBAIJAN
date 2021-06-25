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
import Marketplace from "../pages/Marketplace";
import FifaTournaments from "../pages/FifaTournaments";
import { useRecoilState } from "recoil";
import { menuVisibility, storyBar } from "../Atoms/global";
export default function Navigation() {
  const [menuVisible] = useRecoilState(menuVisibility);
  const [msgWidget] = useRecoilState(storyBar);

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
        <Route path="/lessons" component={Lessons} />
      </Switch>
      <Switch>
        <Route path="/fut-reyting" component={Futreyting} />
      </Switch>
      <Switch>
        <Route path="/accounthub" component={AccountHub} />
      </Switch>
      <Switch>
        <Route path="/profil" component={Profil} />
      </Switch>
      <Switch>
        <Route path="/members" component={Members} />
      </Switch>
      <Switch>
        <Route path="/futcoins" component={Futcoins} />
      </Switch>
      <Switch>
        <Route path="/futTournaments" component={FutTournaments} />
      </Switch>
      <Switch>
        <Route path="/farketplace" component={Marketplace} />
      </Switch>
      <Switch>
        <Route path="/fifaTournaments" component={FifaTournaments} />
      </Switch>
    </div>
  );
}
