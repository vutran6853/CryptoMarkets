import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Dashboard  from './component/dashboard/dashboard';
import Cryptogeneric from './component/allCryptoMartketChart/cryptoGenericCharts'

export default (
    <Switch>
      <Route exact path='/' component={ Dashboard } ></Route>
      <Route path={`/api/crypto/:value`} component={ Cryptogeneric } ></Route>
    </Switch>
)