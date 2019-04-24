import React from "react"
import JumbotronStyles from "./JumbotronStyles.css"

function Jumbotron() {
    return (<p>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Character Memory game</h1>
                <p class="lead">Click on a character's image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    
    </p>
    )
}

export default Jumbotron;