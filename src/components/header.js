import React from 'react';
import logo from '../images/logo.jpg';

export default function () {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li><a href="https://github.com/axecopfire">Github</a></li>
                <li><a href="https://twitter.com/schusterbraun">Twitter</a></li>
                <li><a href="https://dev.to/schusterbraun">Dev.to</a></li>
            </ul>
      </header>
    )
}