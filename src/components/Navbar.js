import React from "react"
import NavStyles from "./NavStyles.css"

function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="OWvector.ico"></a>
            <ul class="nav sticky-top navbar-dark bg-dark">
                <li class="nav-item">
                    <a class="nav-link scoreStuff active">Memory Clicker Fun Time</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scoreStuff">Your score:</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scoreStuff">High score:</a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;