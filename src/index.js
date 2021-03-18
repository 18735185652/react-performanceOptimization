import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './components/Home'
// import User from './components/User'
import {HashRouter,Link,Route} from 'react-router-dom'

import {dynamic} from './utils'

let LazyHome = dynamic(()=>import(  
  /* webpackPrefetch: true */
  /*webpackChunkName: 'Home'*/'./components/Home'))
let LazyUser = dynamic(()=>import( 
  /* webpackPrefetch: true */
  /*webpackChunkName: 'User'*/'./components/User'))

ReactDOM.render(
  <HashRouter>
     <div>
     <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to='/user'> User </Link></li>
      </ul>
      <Route exact={true} path='/' component={LazyHome}/>
      <Route path='/user' component={LazyUser}/>
     </div>

  </HashRouter>,
  document.getElementById('root')
);


