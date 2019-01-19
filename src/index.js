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
					innerText:'Q'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
					innerText:'W'
				},
				{
					id:2,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
					innerText:'E'
				},
				{
					id:3,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
					innerText:'A'
				},
				{
					id:4,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
					innerText:'S'
				},
				{
					id:5,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
					innerText:'D'
				},
				{
					id:6,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
					innerText:'Z'
				},
				{
					id:7,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
					innerText:'X'
				},
				{
					id:8,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
					innerText:'C'
				},
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
			

	clickPad(e) {
		console.log('clickPad')
		e.target.querySelector('audio').play();
		console.log(e.target.querySelector('audio'))
		//this.props.updateState();
	}
	render() {
		return(	
			<div id="padsPanel">
				{this.props.padsData.map((pad) => {return <div onClick={this.clickPad} key={pad.id} className={pad.className}> <span><audio id={pad.id} src={pad.song} />{pad.innerText}</span></div>})}
			</div>
		)
	}
}

class Controls extends React.Component {
	constructor(){
		super();

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
