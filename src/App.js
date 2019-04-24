import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import HeroCard from "./components//HeroCard/index.js"
import Wrapper from "./components/Wrapper/index.js"
import Title from "./components/Title/index.js"
import character from "./../src/character.json"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <Title>CLICK HERE! GOOD LUCK! :D</Title>
          {this.state.character.map(character => (
            <HeroCard
              name={character.name}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
