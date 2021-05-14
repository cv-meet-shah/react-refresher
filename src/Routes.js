import { Home, Login, Checkout, ProductDetail } from "./pages";
import { Switch, Route, useLocation } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="/product/:id" component={ProductDetail} />
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
);

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
