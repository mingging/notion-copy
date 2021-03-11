import React from 'react'
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Atoms from "../Pages/Atoms";


const AppRoute = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/atoms" component={Atoms}/>
                </Switch>
            </Router>
        </>
    )
}

export default AppRoute