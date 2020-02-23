import React from 'react';
import './Modules/card.css';
import { Route, BrowserRouter } from 'react-router-dom';
// import FilmIn from './components/App';
import CuTube from './Cutube';
// import SearchBar from './SearchBar';
// import FilmInfo from './components/FilmInfo';


class App extends React.Component {
  render() {
    return (
      <div class="bg-image">
        <BrowserRouter>
          <div>
            <Route path='/' component={CuTube} />
            {/* <Route path='/${}' component={FilmInfo} /> */}
          </div>
        </BrowserRouter>
        {/* <Helper /> */}
      </div>
    );
  }
}
export default App;