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
      <div style={{ marginTop: '100px' }}>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default App;