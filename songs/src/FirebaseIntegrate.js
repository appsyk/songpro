import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AST_PrefixedTemplateString } from 'terser';
import SearchBar from './SearchBar';
import playIcon from './images/play-icon.png';

const userNm = localStorage.getItem('userNm');

class FirebaseIntegrate extends React.Component {

  state = {
    selectedVid: '',
    selVidTitle: ''
  }

  voiceFunc(){
    var msg = new SpeechSynthesisUtterance(`${userNm}...........this is your favorite videos list`);
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 0.8;
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
  }

  videoModal(e) {
        if (!this.state.selectedVid) {
      console.log("click to view video", this.state.selectedVid)
    }
    const videoSrc = `https://www.youtube.com/embed/${this.state.selectedVid}`;
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ background: '#073946' }} >
              <div className="modal-header">
                <h5 className="modal-title, myHomefont" id="exampleModalLabel" style={{ color: 'rgb(243, 188, 15)' }} >{this.state.selVidTitle}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" title='close' style={{ color: 'white' }}>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe src={videoSrc} id="video-iframe" allowFullScreen="allowfullscreen" style={{ height: '300px', width: '100%' }} className="" title='video player' />

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let likedArray = [];
    for (let i = 0; i < 100; i++) {
      var test = JSON.parse(localStorage.getItem(`${i}liked`));
      if (test !== null) {
        likedArray.unshift(test);
      }
    }
console.log(likedArray)
    return (
      <div className='liked-page'>
        {/* {this.voiceFunc()} */}
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark, navBackColor ">
          <div className="container">
            <a href='/' class="icon-liked-page logo-style" title="Home" >
              <i className="fa fa-music fa-3x" style={{ margin: '7px'}}></i>
              <h2 className="filmIn logoName logo-nm-ad" style={{ color: '#02CBFC', marginTop: '2vh' }} >SongPro</h2>
            </a>
          </div>
        </nav>

        <div className="container" >
          <h2 style={{ marginTop: '15vh' }}>Your favorite videos:</h2>
          <div id="inn" className="row" style={{ marginBottom: '15vh' }}>
            
            {likedArray.map((val, index) => {
              if( userNm == val[2]){
                return (
                  <div id={index} class='like-cards' key={index}>
                     <div class="card-con" >
                       <i type="button" title="Remove Video" class="fa fa-trash rem-btn" onClick={()=>{localStorage.removeItem(val[3]); window.location.reload()}}></i>
                       <p class="liked-time">{val[1]}</p>
                       <img class="liked-img" src={val[0].snippet.thumbnails.medium.url} />
                       <p class="liked-title" >{val[0].snippet.title}</p>
                       <p class="liked-des">{val[0].snippet.description}</p>
                     </div>
                     <div class="card-icon-test" onClick={(e) => {
                       this.setState({
                         selectedVid: val[0].id.videoId,
                         selVidTitle: val[0].snippet.title,
                       })
                     }} >
                       <img src={playIcon} title="Watch Video" class="watch-btn-test" type="button" data-toggle="modal" data-target="#exampleModal" width="50px"/> 
                     </div>
                     {this.videoModal()}
                   </div>
                 );
              }
              
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default FirebaseIntegrate;