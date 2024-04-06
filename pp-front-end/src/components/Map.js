// map scraped from https://www.npmjs.com/package/react-usa-map

import React, { Component, useState } from 'react';
import USAMap from "react-usa-map";
import Pin from './Pin';
import './Map.css';
import './Pin.css';
 
class Map extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  render() {
    return (
      <div className="map-container">
        <USAMap onClick={this.mapHandler} />
        {/* Grouping Florida pins */}
        <div className="pins-container">
          {/* Women's Resource Center */} 
          <Pin text="Women's Resource Center. A 501(C)3 nonprofit that provides women of all ages and backgrounds with support, resources, and services. Address: 340 S Tuttle Ave, Sarasota, FL 34237 Website: mywrc.org Phone Number: (941) 747-6797" coordinates={[510, 738]} />
          {/* Lotus House Women's Shelter*/}
          <Pin text="Lotus House Women's Shelter. The largest shelter for women and children in the country: provides shelter, resources, and comprehensive supportive services. Address: 217 NW 15th St, Miami, FL 33136 Website: lotushouse.org Phone Number: (305) 438-0556" coordinates={[530, 784]} />
          {/* Mary's Home of the Treasure Coast */}
          <Pin text="Mary's Home of the Treasure Coast. A faith-based transitional home that provides residential and non-residential services for homeless, pregnant women. Address: 1033 E 14th St, Stuart, FL 34996 Website: maryshome.org Phone Number: (772) 223-5000" coordinates={[505, 775]} />
          {/* Hannah's House Domestic Violence Shelter */}
          <Pin text="Hannah's House Domestic Violence Shelter. A 17 unit income-based apartment complex for women and children only. Address: 102 Carlton St, Wauchula, FL 33873 Website: aofm-hannahshouse.org Phone Number: (863) 773-5717" coordinates={[500, 755]} />
          {/* Mary & Martha House*/}
          <Pin text="Mary & Martha House. Offers sanctuary of safety and support to women and their children. Address: 312 S U.S. Hwy 41, Ruskin, FL 33570 Website: marymarthahouse.org Phone Number: (813) 645-7874" coordinates={[490, 738]} />
          {/* Trinity Rescue Mission */}
          <Pin text="Trinity Rescue Mission. Helps all types of women and their children, no matter what kind of background they come from, or what their needs are. Address: 622 W Union St, Jacksonville, FL 32202 Website: trinityrescue.org Phone Number: (904) 355-1205" coordinates={[450, 745]} />
        </div>

        {/*California Pins */ }
        {/*Rachel's Women's Center*/} 
        <Pin text="Rachel's Women's Center. Provides a safe, supportive environment and opportunities for women with few or no resoures to begin and continue self-help efforts. Address: 759 Eighth Ave, San Diego, CA 92101 Website: ccdsd.org Phone Number: (619) 696-0873" coordinates={[360, 90]} />
        {/*University Homeless Women Center*/} 
        <Pin text="University Homeless Women Center. Profides food for homeless and low income families in need. Address: 1450 University Ave f127, Riverside, CA 92507 Website: checkbca.org Phone Number: (951) 224-9438" coordinates={[320, 83]} />
        {/*WISEPlace*/} 
        <Pin text="WISEPlace. Provides women with safe shelter, counseling, and mental health services. Address: 1411 N Broadway, Santa Ana, CA 92706 Website: wiseplace.org Phone Number: (714) 542-3577" coordinates={[330, 60]} />
        {/* */} 
        <Pin text=": " coordinates={[300, 50]} />
         {/* */} 
        <Pin text=": " coordinates={[510, 738]} />
        {/* */} 
        <Pin text=": " coordinates={[510, 738]} />
        {/* */} 
        <Pin text=": " coordinates={[510, 738]} />
      </div>
    );
  }
}

export default Map;