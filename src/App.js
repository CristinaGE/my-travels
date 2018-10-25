import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Travels
          destination="Madrid"
          country="Spain"
          photo="https://www.esmadrid.com/sites/default/files/styles/slider_home_full/public/vistaaerea_palacioreal.jpg?itok=hcg2oxd8"
          distance="1 581,9 km"
        />
        <Travels
          destination="Rome"
          country="Italie"
          photo="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5232386545001_5215063851001-vs.jpg?pubId=5104226627001&videoId=5215063851001"
          distance="1 956,6 km"
        />
      </div>
    );
  }
}

export default App;