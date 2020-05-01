import React from 'react';
import styles from "./App.module.scss";
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { client } from "./index";
import Registration from "./Registration";
import Authorization from "./Authorization";
import Home from './Home';

import {createBrowserHistory} from 'history';

class AppHeaderInner extends React.Component<{location: any}, {
  mode?: string
}> {
  public constructor(props: {}) {
    // @ts-ignore
    super(props);
    this.state = {
      mode: 'all'
    };
  }

  public render(): React.ReactNode {
    const {location} = this.props;

    return (
        <div>
          <div><Link to="/">Обратные звонки</Link></div>
          <div><Link to="/authorization">Обратные звонки</Link></div>
          <div><Link to="/registration">Обратные звонки</Link></div>
        </div>
    );
  };
}

const AppHeader = withRouter(AppHeaderInner);

export const appHistory = createBrowserHistory();
// export const {router, params, location, routes} = (window as any).props;

const App: React.FC = () => {
  return (
      <Router history={appHistory}>
        <ApolloProvider client={client}>
          <div className={styles.appHeader}>
            <AppHeader/>
            <Switch>
              <Route path="/registration">
                <Registration/>
              </Route>
              <Route path="/authorization">
                <Authorization/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
  );
};

export default App;