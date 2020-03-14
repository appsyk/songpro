import React from 'react';
import './Modules/card.css';
import { Route, BrowserRouter } from 'react-router-dom';
// import FilmIn from './components/App';
import CuTube from './Cutube';
import ResForm from './reserveForm/App';
import Edit from './reserveForm/Edit';
import Create from './reserveForm/Create';
import Show from './reserveForm/Show';
import FirebaseIntegrate from './FirebaseIntegrate';


// import SearchBar from './SearchBar';
// import FilmInfo from './components/FilmInfo';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={CuTube} />
            {/* <Route path='/liked' component={ResForm} /> */}
            <Route path='/liked' component={FirebaseIntegrate} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
          </div>
        </BrowserRouter>
        {/* <Helper /> */}
      </div>
    );
  }
}
export default App;