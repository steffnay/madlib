import React, { Component } from 'react';
import './App.css';
import MadLibs from './madlibs/MadLibs.js';
import Story from './components/Story.js';
import MadlibForm from './components/MadlibForm.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedMadLib: MadLibs[this.getRandomInt(0, MadLibs.length)],
    };
  }


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Update the value of a word in the selected
  // mad lib using setState
  updateWord = (key, value) => {
    const updatedMadLib = this.state.selectedMadLib;
    const changedWord = updatedMadLib.words.find((word) => {
      return word.key === key
    });
    changedWord.value = value;
    this.setState({selectedMadLib: updatedMadLib});

    console.log(this.state.selectedMadLib.words)
  }


  render() {

    return (
      <section className="App">
        <h1>Welcome to MadLibs!</h1>
        <p>Fill in all of the choices to see your final story.</p>
        <MadlibForm words={this.state.selectedMadLib.words} update={this.updateWord} />

          <Story title={ this.state.selectedMadLib.title }
          text={ this.state.selectedMadLib.getText() }
          />
      </section>
    );
  }
}

export default App;
