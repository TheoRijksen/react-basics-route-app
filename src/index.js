import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import NoMatch from './NoMatch';
import Fourpointone from './Fourpointone';

ReactDOM.render(
<Router history={history}>
    <div>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/One" component={One}></Route>
            <Route path="/Two" component={Two}></Route>
            <Route path="/Three" component={Three}></Route>
            <Route path="/Four" component={Four} >
                <Route path="/Four/:id" component={Fourpointone} />
            </Route>
            <Route component={NoMatch}/>
        </Switch>
    </div>
</Router>

, document.getElementById('root'));
registerServiceWorker();
