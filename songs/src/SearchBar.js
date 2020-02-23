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
    listening: false
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
      console.log('Final Text', finalTranscript,"-----",interimTranscript)
      this.setState({
        term: finalTranscript
      })

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
          <span class="intro-banner-vdo-play-btn pinkBg" target="_blank">
            <i class="fa fa-microphone" style={micStyle} aria-hidden="true"></i>
            <span class="ripple pinkBg"></span>
            <span class="ripple pinkBg"></span>
            <span class="ripple pinkBg"></span>
          </span>
        </div>
    );
  }

  render(props) {

    


    return (

      <div>
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark, navBackColor ">
          <div className="container">
            <i className="fa fa-music fa-3x" style={{ textShadow: '4px 4px 4px rgb(0, 0, 0)', color: 'rgb(2, 203, 252)' }}></i>
            <a href='/'><h2 className="filmIn logoName logo-nm-ad" style={{ color: '#02CBFC', marginTop: '2vh' }} >SongPro</h2></a>

            <form className="form-inline, searchBar myHomefont" onSubmit={this.onSubmitHandle}>
              <input className="form-control mr-sm-4 col-sm-12"
                type='search'
                onChange={e => { this.setState({ term: e.target.value }) }}
                value={this.state.term}
                placeholder='Search for songs ....'
                aria-label="Search"
                list="search"
                autoComplete="on"
              />
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
