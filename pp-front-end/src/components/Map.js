// map scraped from https://www.npmjs.com/package/react-usa-map

import React, { Component } from 'react';
import USAMap from "react-usa-map";
 
class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  render() {
    return (
      <div style={{ marginTop: '250px', width: '100%', height: '100%' }}>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default App;