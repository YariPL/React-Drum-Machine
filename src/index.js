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
					charCode:113
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
					innerText:'W',
					charCode:119
				},
				{
					id:2,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
					innerText:'E',
					charCode:101
				},
				{
					id:3,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
					innerText:'A',
					charCode:97
				},
				{
					id:4,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
					innerText:'S',
					charCode:115
				},
				{
					id:5,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
					innerText:'D',
					charCode:100
				},
				{
					id:6,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
					innerText:'Z',
					charCode:122
				},
				{
					id:7,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
					innerText:'X',
					charCode:120
				},
				{
					id:8,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
					innerText:'C',
					charCode:99
				}
			]
		}
		this.updateState = this.updateState.bind(this);

	}
	updateState () {
		console.log('smth');
	}

	
  render() {
    return (
      <div className="App">
      	<div id="drum-machine">
      		<Panel padsData={this.state.padsData} updateState={this.updateState}/>
      		<Controls />
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
		console.log('clickPad || touchPad');
		console.log(e.charCode);
		console.log(';afaf');
		if(this.props.padsData.map((pad) => (pad.charCode === e.charCode ? console.log(pad.charCode) : false ) )){

			console.log('play1')
			//document.querySelector(`audio[tabIndex="${e.charCode}"]`).play();
		} else {
			console.log('play2')
			//e.target.querySelector('audio').play();
		}
		//console.log(e.charCode)
		//e.target.querySelector('audio').play();(
		//console.log(e.charCode);
		//this.props.updateState();
	}
	render() {
		return(	
			<div id="padsPanel">
				{this.props.padsData.map((pad) => {return <div onClick={this.clickPad} onKeyPress={() => this.clickPad} key={pad.id} className={pad.className}> <span><audio tabIndex={pad.charCode} id={pad.id} src={pad.song} />{pad.innerText}</span></div>})}
			</div>
		)
	}
}

class Controls extends React.Component {
	constructor(){
		super();
		this.onOff = this.onOff.bind(this);

	}
	onOff(){

	}
	render() {
		return(
			<div id="display">
				<div className="powerButton">
					<label className="switch" onClick={this.onOff}>
					  <input type="checkbox" defaultChecked />
					  <span className="slider round"></span>
					</label>
				</div>
				<div className="displayCurrent">
					2afdafaw
				</div>
				<div className="volume">
					3afdafaw
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
