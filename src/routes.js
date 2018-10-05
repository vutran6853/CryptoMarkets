import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  Dashboard  from './component/dashboard/dashboard';
import News1 from './component/new1/news1'
import News2 from './component/new2/news2'
import News3 from './component/new3/news3'

export default (
  <div>
    <Switch>
      <Route exact path='/' component={ Dashboard } ></Route>
      <Route path='/new1' component={ News1 } ></Route>
      <Route path='/new2' component={ News2 } ></Route>
      <Route path='/new3' component={ News3 } ></Route>

    </Switch>
  </div>
)