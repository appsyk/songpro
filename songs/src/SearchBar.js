import React from 'react';

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
// recognition.lang = 'en-US'


//------------------------COMPONENT-----------------------------

class SearchBar extends React.Component {

  state = {
    term: '',
    spin: false,
    spn: false,
    listening: false,
    autoFoc: false
  };
  //-----------------------------------------------------------------

  toggleListen = () => {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
    setInterval(() => {
      this.setState({
        listening: false
      }, this.handleListen)
    }, 20000);
  }

  handleListen = () => {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      // document.getElementById('interim').innerHTML = interimTranscript
      // document.getElementById('final').innerHTML = finalTranscript
      // console.log('Final Text', finalTranscript, "-----", interimTranscript)
      // this.setState({
      //   term: finalTranscript
      // })

      var moodArray = [

        // positive

        'amused', 'blissful', 'calm', 'cheerful', 'content', 'dreamy', 'ecstatic', 'energetic', 'excited',

        'flirty', 'giddy', 'good', 'happy', 'joyful', 'loving', 'mellow', 'optimistic', 'peaceful', 'silly', 'sympathetic',

        // negative

        'angry', 'annoyed', 'apathetic', 'bad', 'cranky', 'depressed', 'envious', 'frustrated', 'gloomy', 'grumpy', 'guilty',

        'indifferent', 'irritated', 'melancholy', 'pessimistic', 'rejected', 'restless', 'sad', 'stressed', 'weird'

      ];

      // console.log(moodArray)

      for (let mod = 0; mod< moodArray.length; mod++){

        // console.log(moodArray[mod])

        // debugger;

        if((interimTranscript === moodArray[mod]) || interimTranscript === `'feeling' ${moodArray[mod]}` ){

        console.log(12345,interimTranscript,'---',moodArray[mod])
        console.log('Final Text', finalTranscript, "-----", interimTranscript)

        this.setState({

          term: interimTranscript,
          autoFoc: true
        })

      }}

      // }

      //   else{

      //     console.log(finalTranscript,'---',moodArray[mod])

      //   }

      // }

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementById('final').innerHTML = finalText

        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }
  //------------------------------------------------------------------
  onSubmitHandle = (event) => {
    event.preventDefault();
    this.setState({ spin: true, spn: !this.state.spn });

    this.props.onFormSubmitProp(this.state.term);
    setTimeout(() => {
      document.querySelector('.mic-style').style.display = 'none';
      document.querySelector('.mic-btn').style.cssText = "display: 'block'; transition: 1s ease-out";
    }, 1000);

  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.spinner(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);

  }
  spinner() {
    if (this.props.spinStop === 'True' || this.props.spinStop === 'False') {
      this.setState({
        spin: false
      });
    }
  }

  micLogo() {
    const micStyle = {
      textShadow: '4px 4px 4px rgb(0, 10, 42)',
      color: 'black'
    }
    return (
      <div onClick={this.toggleListen}>
        <span className="intro-banner-vdo-play-btn pinkBg" target="_blank">
          <i className="fa fa-microphone" style={micStyle} aria-hidden="true"></i>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
          <span className="ripple pinkBg"></span>
        </span>
      </div>
    );
  }

  render(props) {

    // if(this.state.term){
    //   const autO = true;
    // }

    // document.querySelector('clickid').autoFocus;
    console.log(this.state.autoFoc)


    return (

      <div>
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark, navBackColor ">
          <div className="container">
            <i className="fa fa-music fa-3x" style={{ textShadow: '4px 4px 4px rgb(0, 0, 0)', color: 'rgb(2, 203, 252)' }}></i>
            <a href='/'><h2 className="filmIn logoName logo-nm-ad" style={{ color: '#02CBFC', marginTop: '2vh' }} >SongPro</h2></a>

            <button className="mic-btn" style={{ display: 'none' }} id="mic-btn-id" onClick={this.toggleListen}>
              <i className="fa fa-microphone" style={{ color: 'black' }} title="Activate Mic" aria-hidden="true"></i>
            </button>

            <form className="form-inline, searchBar myHomefont" onSubmit={this.onSubmitHandle}>
            {/* {this.state.term ? ( */}
            <input className="form-control mr-sm-4 col-sm-12"
                type='search'
                onChange={e => { this.setState({ term: e.target.value }) }}
                value={this.state.term}
                placeholder='Search for songs ....'
                aria-label="Search"
                list="search"
                autoComplete="on"
                autoFocus={this.state.autoFoc}
            />
             {/* ) : (<input className="form-control mr-sm-4 col-sm-12"
              type='search'
              onChange={e => { this.setState({ term: e.target.value }) }}
              value={this.state.term}
              placeholder='Search for songs ....'
              aria-label="Search"
              list="search"
              autoComplete="on"
              autoFocus="flase"
            />)} */}
              
            </form>

            <div className="myHomefont" style={{ marginLeft: '0.5%' }}>
              {(this.state.spin === true && this.props.spinStop === null) || (this.state.spin === true && this.props.spinStop === 'True') || (this.state.spin === true && this.props.spinStop === 'False')
                ? (<div className="clearfix">
                  <div className="spinner-border text-light float-right" role="status">
                  </div>
                </div>) : (<div className='offspin'><i style={{ color: 'white' }} className="fa fa-search fa-2x float-right" onClick={this.onSubmitHandle} aria-hidden="true"></i></div>)}
            </div>

          </div>

        </nav><br /><br />
        <div className="mic-style">
          {this.micLogo()}
        </div>
      </div>
    );
  }
}

export default SearchBar;
