import './card.css';
import React from 'react';
// width:"50vw", height:"30vh", 
const VideoItem = ({ video, onVideoSelect }) => {
    // const VidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // const FirstVidSrc = `https://www.youtube.com/embed/${video[0].id.videoId}`;

    // console.log('flinntesting',video[0])
    return (
        
            
            <div className="col-sm-12 video-card video-list-anime" type='button' key={video.id.videoId} >
            <div className='' style={{ background: "#023646"}}  onClick={() => onVideoSelect(video)} data-toggle="modal" data-target="#exampleModal" >
                <div className="" style={{ marginTop: '0%' }}>
                    <img className='vlist' alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}  height='100%' width='100%' />
                </div>
                <div className='list-content'>
                    <p className='listTitle' key={video.snippet.title} >{video.snippet.title}</p>
                </div>
                
            </div>
        </div>
    
    );
};

export default VideoItem;
