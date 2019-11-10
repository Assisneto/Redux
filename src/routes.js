import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Cart';
import Cart from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/cart' exact component={Cart}/>
    </Switch>
  )
}