import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './pages/HomePage/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import SignUp from './pages/SignUp'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/services' component={Services} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
    )
}

export default Routes
