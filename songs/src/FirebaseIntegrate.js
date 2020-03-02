import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import ResForm from './reserveForm/App';
import * as serviceWorker from './serviceWorker';
import Edit from './reserveForm/Edit';
import Create from './reserveForm/Create';
import Show from './reserveForm/Show';

class FirebaseIntegrate extends React.component{
	render(){
		return(
<Router>
      <div>
        <Route exact path='/' component={ResForm} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Router>			
		);
	}
}

export default FirebaseIntegrate;