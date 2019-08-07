import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login/index.js'
import Main from './pages/Main/index.js'

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Login} />
            <Route path='/dev/:id' component={Main} />
        </BrowserRouter>
    )
}

export default Routes