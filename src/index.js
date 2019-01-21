import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			padsData: [
				{
					id:0,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
					innerText:'Q',
					charCode:81
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
					innerText:'W',
					charCode:87
				},
				{
					id:2,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
					innerText:'E',
					charCode:69
				},
				{
					id:3,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
					innerText:'A',
					charCode:65
				},
				{
					id:4,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
					innerText:'S',
					charCode:83
				},
				{
					id:5,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
					innerText:'D',
					charCode:68
				},
				{
					id:6,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
					innerText:'Z',
					charCode:90
				},
				{
					id:7,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
					innerText:'X',
					charCode:88
				},
				{
					id:8,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
					innerText:'C',
					charCode:67
				}
			],
			active:true,
			volumeValue:50
		}
		this.updateState = this.updateState.bind(this);

	}
	updateState (active) {
		this.setState({
			active:!active
		});
		if(this.state.active){
			document.querySelector('#drum-machine').style.opacity = 0.5;
		} else {
			document.querySelector('#drum-machine').style.opacity = 1;
		}
		console.log(this.state.active)
	}
	
  render() {
    return (
      <div className="App">
      	<div id="drum-machine">
      		<Panel padsData={this.state.padsData} active={this.state.active}/>
      		<Controls active={this.state.active} updatestate={this.updateState} />
      	</div>
      </div>
    );
  }
}
class Panel extends React.Component {
	constructor() {
		super();
		this.clickPad = this.clickPad.bind(this);
	}
	//need to catch the keydown event
	componentWillMount(){
		document.addEventListener("keypress", this.clickPad.bind(this));
	}		

	clickPad(e) {
		if(this.props.active){
			if(e.charCode){
				//checking if button which is clicked is one from the list of 9 in data
				if(this.props.padsData.map((pad) => pad.charCode === e.charCode ? document.querySelector(`audio[tabIndex="${e.charCode}"]`).play() : false));
			}else if (e.target){
				e.target.querySelector('audio').play();
			}
		}
	}
	render() {
		return(	
			<div id="padsPanel">
				{this.props.padsData.map((pad) => {
					return <div onClick={this.clickPad} onKeyPress={
						() => this.clickPad} key={pad.song} id={pad.id} className={pad.className}>
						<span>
							<audio tabIndex={pad.charCode} id={pad.innerText} className="clip" src={pad.song} />
							{pad.innerText}
						</span>
					</div>})}
			</div>
		)
	}
}

class Controls extends React.Component {
	constructor(){
		super();
		this.onOff = this.onOff.bind(this);
		this.changeVolumeLevel = this.changeVolumeLevel.bind(this);

	}
	onOff(e){
		if(e.target.tagName === "INPUT") {} else {this.props.updatestate(this.props.active);}
	}
	changeVolumeLevel(volumeLevel) {
		let vid = document.querySelectorAll("audio");
		for(let i=0;i<vid.length; i++) {
			vid[i].volume = volumeLevel.target.value/100;
		}
	}
	render() {

		return(
			<div id="displayBlock">
				<div className="powerButton">
					<label className="switch" htmlFor='checkPower' onClick={this.onOff}>
					  <input type="checkbox" id='checkPower' defaultChecked />
					  <span className="slider round"></span>
					</label>
				</div>
				<div className="displayCurrent" id="display">
				</div>
				<div className="volume">
				<input id="vol-control" type="range" min="0" max="100" step="1" defaultValue={this.props.volumeValue} onChange={this.changeVolumeLevel} />
				</div>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
