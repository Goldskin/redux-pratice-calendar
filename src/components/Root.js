import React from 'react'
import { Provider } from 'react-redux'
import Day from './DayApp'
import Month from './MonthApp'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/month/:year?/:month?" component={Month} />
                    <Route path="/day/:year?/:month?/:day?" component={Day} />
                    <Route path="/" render={() => <Redirect from="/" to="day" />} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default Root