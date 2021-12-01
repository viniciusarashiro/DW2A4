import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Html from './html/Introduction'
import Css from './css/Introduction'

import Home from './Home';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/html" component={Html} />
                <Route path="/css" component={Css} />
                <Redirect to="/home" />
            </Switch>

            <Footer />
        </>
    )
}

export default withRouter(Main);