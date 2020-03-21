import React, { useState } from 'react';
import firebase from '../reserveForm/Firebase';
import { Link } from 'react-router-dom';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div >
            </div>
        );
    }

    const userNm = localStorage.getItem('userNm');

    const likeUnBtn = () => {
        document.querySelector('.like-btn').style.display = 'block';
    }

    const likeBtn = () => {

        var like = parseInt(localStorage.getItem("like"))
        console.log('1st',localStorage.getItem("like"))
        {
            localStorage.getItem("like") ? (localStorage.setItem("like", like += 1))
                : (localStorage.setItem("like", 1))
        }
        console.log('2nd',localStorage.getItem("like"))
        var timeed = new Date();
        var like = parseInt(localStorage.getItem("like"))

        var data = [video, timeed, userNm, `liked${like}` ]
        localStorage.setItem(`liked${like}`, JSON.stringify(data));
        var test = JSON.parse(localStorage.getItem(`liked${like}`));
        console.log('from localstorage',test)
        let notify = new Notification(`You liked ${video.snippet.title}`);

        document.querySelector('.like-btn').style.display = 'none';

    }
    const VidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ background: '#073946' }} >
                    <div className="modal-header">
                        <h5 className="modal-title, myHomefont" id="exampleModalLabel" style={{ color: 'rgb(243, 188, 15)' }} >{video.snippet.title}</h5>
                        <button type="button" onClick={likeUnBtn} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" title='close' style={{ color: 'white' }}>&times;</span>
                        </button>
                        <div class="like-btn" onClick={likeBtn}>
                            <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="modal-body">
                        <iframe id="video-iframe" allowFullScreen="allowfullscreen" style={{ height: '300px', width: '100%' }} className="" title='video player' src={VidSrc} />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default VideoDetail;