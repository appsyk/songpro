import React from 'react';
// import App from '../components/App';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div >
                {/* <h1 style={{ textAlign:'center', fontSize:'100px' }}>Search Video546545432555</h1> */}
            </div>
        );
    }

    // const VidSrc = 'https://www.youtube.com/embed/' + (video.id.videoId) ;
    const VidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log('asfd',video)

    return (

         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ background: '#073946' }} >
                    <div className="modal-header">
                        <h5 className="modal-title, myHomefont" id="exampleModalLabel" style={{ color: 'rgb(243, 188, 15)' }} >{video.snippet.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" title='close' style={{ color:'white' }}>&times;</span>
                        </button>
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