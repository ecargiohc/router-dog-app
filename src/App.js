import React, {Component} from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import {Switch, Route} from 'react-router-dom';
import hazel from './images/hazel.jpg'
import tubby from './images/whiskey.jpg'
import whiskey from './images/whiskey.jpg'
import './App.css';
import DogDetails from './DogDetails';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };

  render() {
    return (
      <Switch>
        <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>} />
        <Route exact path='/dogs/:name' render={() => <DogDetails />} />
      </Switch>
    );
  }
}

export default App;
