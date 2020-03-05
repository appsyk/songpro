import './greenfair/css/style.css';
import './greenfair/css/isotope/style.css';
import './greenfair/css/animate.min.css';
import './greenfair/css/bootstrap.min.css';
import './greenfair/css/carousel.css';
import './greenfair/css/font-awesome.min.css';
import './greenfair/css/responsive.css';

import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Youtube from './API/Youtube';
import VideoList from './Modules/VideoList';
import VideoDetail from './Modules/VideoDetail';
import HomePage from './HomePage';


// import Images from './images/Images';
import SpinSearch from './Modules/SpinSearch';
// import Spinner from './Modules/Spinner';

class CuTube extends React.Component {

    state = {
        vids: [],
        selectedVid: null,
        // title: null,
        // poster: null,
        // actors: null,
        // country: null,
        // director: null,
        // release_date: null,
        // year: null,
        // genre: null,
        response: null,
        // plot: null,
        // boxoffice: null,
        // imdbRating: null,
        // production: null,
        // language: null,
        // website: null,
        // runTime: null
    };

    onTermSubmit = async (term) => {

        const response1 = await axios.get(`https://www.omdbapi.com/?t=${term}&apikey=af7bfde9`, {
            // http://www.omdbapi.com/?i=tt3896198&apikey=af7bfde9
            params: { query: term },
        });
        // // console.log(response1)
        // this.setState({
        //     title: response1.data.Title,
        //     poster: response1.data.Poster,
        //     actors: response1.data.Actors,
        //     year: response1.data.Year,
        //     director: response1.data.Director,
        //     genre: response1.data.Genre,
        //     country: response1.data.Country,
        //     release_date: response1.data.Released,
            // response: response1.data.Response,
        //     plot: response1.data.Plot,
        //     boxoffice: response1.data.BoxOffice,
        //     production: response1.data.Production,
        //     imdbRating: response1.data.imdbRating,
        //     language: response1.data.Language,
        //     website: response1.data.Website,
        //     runTime: response1.data.Runtime


        // });
        // console.log(this.state.title)
        // if (this.state.title) {
            var response = await Youtube.get('/search', {
                params: {
                    // q: term
                    q: `feeling ${term} hindi and english songs`
                }
            });
            this.setState({ 
                vids: response.data.items,
                response: response1.data.Response,
            });
        // } else {
        //     document.querySelector('#not-show1').style.display = 'none';
        //     document.querySelector('#not-show2').style.display = 'none';
        // }
        console.log(term)



        // console.log(`${this.state.title} ${this.state.year} ${this.state.actors} movie official trailer`)


    };
    onVidSelect = (video) => {
        this.setState({ selectedVid: video });
    }

    // onlikeClick = (e) => {

    //     var like = parseInt(localStorage.getItem("like"))

    //     {
    //         localStorage.getItem("like") ? (localStorage.setItem("like", like += 1))
    //         : (localStorage.setItem("like", 0))
    //     }

    //     setInterval(function () {
    //         var like = localStorage.getItem("like");
    //         document.querySelector('.icon-up').innerHTML = like;
    //     }, 10);

    // }

    // onDislikeClick = (e) => {

    //     var dislike = parseInt(localStorage.getItem("dislike"))

    //     {
    //         localStorage.getItem("dislike") ? (localStorage.setItem("dislike", dislike += 1))
    //         : (localStorage.setItem("dislike", 0))
    //     }

    //     setInterval(function () {
    //         var dislike = localStorage.getItem("dislike");
    //         document.querySelector('.icon-down').innerHTML = dislike;
    //     }, 10);

    // }

    render() {
        // var like = parseInt(localStorage.getItem("like"));
        // var dislike = localStorage.getItem("dislike"); 
        console.log(this.state.response)

        return (

            <div className="container" >
                <div className="maincomp">

                    <SearchBar onFormSubmitProp={this.onTermSubmit} spinStop={this.state.response} />
                    {this.state.response ? (
                        <div className='' >
                            {/* <div className="up-down-icon">
                                <i className="fa fa-thumbs-up fa-2x icon-up" onClick={this.onlikeClick} aria-hidden="true">{localStorage.getItem("like")}</i>

                                <span className="fa fa-2x icon-down">{localStorage.getItem("dislike")}</span><i className="fa fa-thumbs-down fa-flip-horizontal fa-2x icon-down" onClick={this.onDislikeClick} aria-hidden="true"></i>
                            </div> */}
                            <div className=''>
                                <div><VideoDetail video={this.state.selectedVid} /></div>
                                {this.state.vids[0] === undefined ? (<div id='not-show1' style={{textAlign:'center'}} className='' >
                                    <div className="spinner-border" style={{ color: 'white', textAlign:'center', width: '10rem', height: '10rem', fontSize: '30px', marginTop: '15%'}} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>

                                </div>) : (<div className='' id='not-show1'>
                                    <iframe id="video-iframe" allowFullScreen="allowfullscreen" className="main-video-frame" title='video player' src={`https://www.youtube.com/embed/${this.state.vids[0].id.videoId}`} />

                                </div>)}


                                <div className='container' id='not-show2'>
                                    <h3 style={{ color: 'white' }}>Related Videos:</h3>
                                    <VideoList onSelectVid={this.onVidSelect} vidList={this.state.vids} key={this.state.vids} />

                                </div>

                                <SpinSearch />

                            </div>

                        </div>
                    ) : (
                            <HomePage />

                        )}
                </div>

            </div>
        );
    }
}

export default CuTube;