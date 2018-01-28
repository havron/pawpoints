import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactProgressMeter from 'react-progress-meter'

class App extends Component {
 
    constructor() {
        super();
 
        this.state = {
            myProgress: 0,
        }
    }

		handleClick(){
					this.setState({
							myProgress : this.state.myProgress + 4
					})
		}

		handleClickDown(){
					this.setState({
							myProgress : this.state.myProgress - 3
					})
		}

    render() {
        return (
        <div>
        <div>
        <span styles={{float : 'left', paddingRight : '5px'}}>
            <br></br>
            <br></br>
            <ReactProgressMeter 
                currentProgress={this.state.myProgress} 
                showPercent={true}
                show={true}
                color="yellow"/>
              </span>
        </div>
        <center><button type="button" onClick={this.handleClick.bind(this)}> heckin doggo :) {this.state.myProgress} </button>
        <br></br>
        <button type="button" onClick={this.handleClickDown.bind(this)}> smol pupper :( {this.state.myProgress} </button>
          </center>
       
        </div>
        )
    }
}

// make a button 

//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//      </div>
//    );
//  }

export default App;
