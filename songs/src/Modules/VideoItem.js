import './card.css';
import React from 'react';
import playIcon from '../images/play-icon.png';

// width:"50vw", height:"30vh", 
const VideoItem = ({ video, onVideoSelect }) => {

  const userNm = localStorage.getItem('userNm');

  const likeUnBtn = () => {
    document.querySelector('.like-btn-list').style.display = 'block';
  }

  const likeBtn = () => {

    var like = parseInt(localStorage.getItem("like"))
    console.log('1st', localStorage.getItem("like"))
    {
      localStorage.getItem("like") ? (localStorage.setItem("like", like += 1))
        : (localStorage.setItem("like", 1))
    }
    console.log('2nd', localStorage.getItem("like"))
    var timeed = new Date();
    var like = parseInt(localStorage.getItem("like"))

    var data = [video, timeed, userNm, `liked${like}`]
    localStorage.setItem(`liked${like}`, JSON.stringify(data));
    var test = JSON.parse(localStorage.getItem(`liked${like}`));
    console.log('from localstorage', test)
    let notify = new Notification(`You liked ${video.snippet.title}`);

    document.querySelector('.like-btn-list').style.display = 'none';

  }

  return (
    // <div className="col-sm-12 video-card video-list-anime" type='button' key={video.id.videoId} >
    //     <div className='' style={{ background: "#023646" }} onClick={() => onVideoSelect(video)} data-toggle="modal" data-target="#exampleModal" >
    //         <div className="" style={{ marginTop: '0%' }}>

    //     /* <img className='vlist' alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} height='100%' width='100%' />
    // </div>
    // <div className='list-content'>
    //     <p className='listTitle' key={video.snippet.title} >{video.snippet.title}</p>
    // </div>

    //     </div> */}
    <div class='like-cards-ytlist' onClick={() => onVideoSelect(video)} type="button" key={video.id.videoId}>
      <div class="card-con" data-toggle="modal" data-target="#exampleModal" >
        {/* <i type="button" title="Remove Video" class="fa fa-trash rem-btn"></i> */}
        <img class="liked-img" src={video.snippet.thumbnails.medium.url} />
        <p class="liked-title" >{video.snippet.title}</p>
        <p class="liked-des">{video.snippet.description}</p>
      </div>
      {/* <div class="card-icon-test">
        <img src={playIcon} title="Watch Video" class="watch-btn-test" type="button" onClick={() => onVideoSelect(video)} data-toggle="modal" data-target="#exampleModal" width="50px" />
      </div> */}
    </div>
// </div>

  );
};

export default VideoItem;
