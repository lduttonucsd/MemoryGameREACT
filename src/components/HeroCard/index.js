import React from "react";
import "./style.css";

function HeroCard(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
{this.state.characters.map(character => {
  <Card 
  key={character.key}
  id={character.id}
  name={character.name}
  image={character.image}
  />
})}
        </div>
      </div>
    </div>
  );
}

export default HeroCard;