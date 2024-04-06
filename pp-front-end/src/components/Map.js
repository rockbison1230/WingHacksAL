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

      <>
      {/*had to do inline..*/}
      <h2 style={{position:'relative', marginTop:'200px', fontSize:'60px'}}>Mapped Resources Across the U.S.</h2> 
      <div className="map-container">
        <USAMap onClick={this.mapHandler} />
        {/* Grouping Florida pins */}
        <div className="pins-container">
          {/* Women's Resource Center */} 
          <Pin 
          text="Women's Resource Center. A 501(C)3 nonprofit that provides women of all ages and backgrounds with support, resources, and services. Address: 340 S Tuttle Ave, Sarasota, FL 34237 Website: mywrc.org Phone Number: (941) 747-6797" 
          coordinates={[510, 738]} />
          {/* Lotus House Women's Shelter*/}
          <Pin text="Lotus House Women's Shelter. The largest shelter for women and children in the country: provides shelter, resources, and comprehensive supportive services. Address: 217 NW 15th St, Miami, FL 33136 Website: lotushouse.org Phone Number: (305) 438-0556" coordinates={[530, 784]} />
          {/* Mary's Home of the Treasure Coast */}
          <Pin text="Mary's Home of the Treasure Coast. A faith-based transitional home that provides residential and non-residential services for homeless, pregnant women. Address: 1033 E 14th St, Stuart, FL 34996 Website: maryshome.org Phone Number: (772) 223-5000" coordinates={[505, 775]} />
          {/* Hannah's House Domestic Violence Shelter */}
          <Pin text="Hannah's House Domestic Violence Shelter. A 17 unit income-based apartment complex for women and children only. Address: 102 Carlton St, Wauchula, FL 33873 Website: aofm-hannahshouse.org Phone Number: (863) 773-5717" coordinates={[500, 755]} />
          {/* Mary & Martha House*/}
          <Pin style={{}}text="Mary & Martha House. Offers sanctuary of safety and support to women and their children. Address: 312 S U.S. Hwy 41, Ruskin, FL 33570 Website: marymarthahouse.org Phone Number: (813) 645-7874" coordinates={[490, 738]} />
          {/* Trinity Rescue Mission */}
          <Pin text="<bTrinity Rescue Mission. Helps all types of women and their children, no matter what kind of background they come from, or what their needs are. Address: 622 W Union St, Jacksonville, FL 32202 Website: trinityrescue.org Phone Number: (904) 355-1205" coordinates={[450, 745]} />
        </div>

        {/*California Pins */ }
        <div className = "pins-container">
        {/*Rachel's Women's Center*/} 
        <Pin text="Rachel's Women's Center. Provides a safe, supportive environment and opportunities for women with few or no resoures to begin and continue self-help efforts. Address: 759 Eighth Ave, San Diego, CA 92101 Website: ccdsd.org Phone Number: (619) 696-0873" coordinates={[360, 90]} />
        {/*University Homeless Women Center*/} 
        <Pin text="University Homeless Women Center. Profides food for homeless and low income families in need. Address: 1450 University Ave f127, Riverside, CA 92507 Website: checkbca.org Phone Number: (951) 224-9438" coordinates={[320, 83]} />
        {/*WISEPlace*/} 
        <Pin text="WISEPlace. Provides women with safe shelter, counseling, and mental health services. Address: 1411 N Broadway, Santa Ana, CA 92706 Website: wiseplace.org Phone Number: (714) 542-3577" coordinates={[330, 60]} />
        {/*Women's & Children's Crisis Shelter*/} 
        <Pin text="Women's & Children's Crisis Shelter. Committed to providing safety, shelter, and hope to victims of domestic violence. Address: 7702 Washington Ave 2nd Floor, Whittier, CA 90602 Website: wccshope.org Phone Number: (562) 945-3937" coordinates={[300, 50]} />
         {/*Good Shepherd Center For Homeless Women*/} 
        <Pin text="Good Shepherd Center For Homeless Women. Offers core programs of selter, food, and employment services to guide homeless women to lives of independence. Address: 1671 Beverly Blvd, Los Angeles, CA 90026 Website: gschomeless.org Phone Number: (213) 235-1460" coordinates={[250, 30]} />
        {/*Gardner Street Women's Bridge Housing Center*/} 
        <Pin text="Gardner Street Women's Bridge Housing Center. Provides temporary housing and comprehensive services to women experiencing homelessness. Address: 1403 N Gardner St, Los Angeles, CA 90046 Phone Number: (209) 340-5990" coordinates={[200, 55]} />
        {/*The Arroyo - Women's Shelter*/} 
        <Pin text="The Arroyo - Women's Shelter. Provides housing and critical, life-saving services that end homelessness, for good. Address: 12860 Arroyo St, Sylmar, CA 91342 Website: lafh.org Phone Number: (747) 277-9507" coordinates={[172, 69]} />
      </div>
</div>
</>
    );
  }
}

export default Map;