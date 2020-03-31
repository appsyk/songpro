// 'use strict';

import React from 'react';

import './Modules/homePage.css';
import './Modules/LoadStyle.css';

// import SongProfo from './components/SongProfo';
import Helper from './components/Helper';
import SpinSearch from './Modules/SpinSearch';
import sanjuAvatar from './images/sanju-avatar1.jpg'

import image1 from './images/avatar.jpg';
import image2 from './images/ironman.jpg';
import image3 from './images/wonderwoman.jpg';
import image4 from './images/avengers.jpg';
import image5 from './images/farzand.jpg';
import image6 from './images/300.jpg';
import image7 from './images/bahubali.jpg';
import image8 from './images/bumblebee.jpg';

// import SearchBar from './SearchBar';

class HomePage extends React.Component {
    render() {


        // let notify = new Notification('Click on mic to give a command to SongPro', {
        //     // body:'you can simply click on mic ic',
        //     icon: './images/not-found-pic.png'
        // })

        // if (window.Notification) {
        //     Notification.requestPermission()
        //         .then(function () {
        //             if (Notification.permission === 'granted') {
        //                 return { notify }
        //             }
        //         })
        // }

        // setTimeout(() => {
        //     notify.close();
        // }, 7000);

        return (
            <div className=''>
                {/* <video autoplay muted loop id="myVideo">
                    <source src={backVid} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video> */}
                <section id="mic-view">
                    <div className="mic-area">

                    </div>
                </section>
                <section class='' >
                    <div class='team-title'>
                        <p>Team Members</p>
                    </div>
                    <div id='team-section' class='row justify-content-center'>
                        <div class='team-cards'>
                            <img class='mem-avatar' alt='avatar' src={sanjuAvatar} />
                            <p class='team-content'>Priyanka</p>
                        </div>
                        <div class='team-cards'>
                        <img class='mem-avatar' alt='avatar' src={sanjuAvatar} />
                            <p class='team-content'>Sonal</p>
                        </div>
                        <div class='team-cards'>
                        <img class='mem-avatar' alt='avatar' src={sanjuAvatar} />
                            <p class='team-content'>Shital</p>
                        </div>
                    </div>
                </section>
                <section id="slider container">
                        <div style={{ margin: '1%' }} id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel" data-interval="3100">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="5"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="6"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="7"></li>
                            </ol>

                            <div className="carousel-inner" role="listbox" >
                                <div className="item active">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image1} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text center ">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image2} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text center">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image3} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text center">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image4} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image5} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image6} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image7} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="slider_overlay">
                                        <img className="blog-img" src={image8} title="Wonder Woman" alt="Avatar"></img>
                                        <div className="carousel-caption">
                                            <div className="slider_text">
                                                <h3 className='logoName'>SongPro</h3>
                                                <h2 className='logoName'>Search for songs</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SpinSearch />
                        </div>
                        <div>
                            <Helper />
                        </div>
                    </section>

            </div>
        );
    }

}
export default HomePage;
