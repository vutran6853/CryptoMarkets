import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import  Dashboard  from './component/dashboard/dashboard';
import Cryptogeneric from './component/allCryptoMartketChart/cryptoGenericCharts'
import axios from 'axios';




export default (
  <div>
    <Switch>
      <Route exact path='/' component={ Dashboard } ></Route>
      <Route path={`/api/crypto/:value`} component={ Cryptogeneric } ></Route>


    </Switch>
  </div>
)