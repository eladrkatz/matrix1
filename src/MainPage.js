import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <div>
                            <Link to='/one' >sdf</Link>
                            <Link to='/two'>sdf </Link>

                            <Route path='/two' component={SecondPage} />
                            <Route path='/one' component={FirstPage} />
                        </div>
                    </Switch>


                </BrowserRouter>
            </div>
        );
    }
}