import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Invoice from './assets/pages/Invoice';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Invoice}/>
            </Switch>
        </BrowserRouter>
    );
}