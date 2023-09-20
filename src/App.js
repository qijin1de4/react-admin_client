import React, {Component} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'

class App extends Component {

    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Admin} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;