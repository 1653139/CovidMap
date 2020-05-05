import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import appRoutes from './routes';
import Layout from './components/Layout';
function App() {
    return (
        <Layout>
            <Switch>
                {appRoutes.map((prop, key) => (
                <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={key}
                />
                ))}
            </Switch>
            <Route exact path="/" render={() => <Redirect to="/" />} />
        </Layout>
        
    );
}

export default App;
