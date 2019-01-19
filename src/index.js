import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class App extends React.Component {
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
				fawfwa
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
