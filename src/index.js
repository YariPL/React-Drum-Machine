import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			padsData: [
				{
					id:1,
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
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
					innerText:'E'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
					innerText:'A'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
					innerText:'S'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp',
					innerText:'D'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
					innerText:'Z'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
					innerText:'X'
				},
				{
					id:1,
					className:'drum-pad',
					song:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
					innerText:'C'
				},
			]
		}
	}
  render() {
    return (
      <div className="App">
      	<div id="drum-machine">
      		<Panel />
      		<Controls />
      	</div>
      </div>
    );
  }
}
class Panel extends React.Component {
	render() {
		return(	
			<div id="padsPanel">
				<div class="drum-pad"><span>Q</span></div>
				<div class="drum-pad"><span>W</span></div>
				<div class="drum-pad"><span>E</span></div>
				<div class="drum-pad"><span>A</span></div>
				<div class="drum-pad"><span>S</span></div>
				<div class="drum-pad"><span>D</span></div>
				<div class="drum-pad"><span>Z</span></div>
				<div class="drum-pad"><span>X</span></div>
				<div class="drum-pad"><span>C</span></div>
			</div>
		)
	}
}

class Controls extends React.Component {
	render() {
		return(
			<div id="display">
				<div className="powerButton">
					1afdafaw
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
