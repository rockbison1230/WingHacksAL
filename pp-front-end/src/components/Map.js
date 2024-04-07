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
      <h2 style={{position:'relative', marginTop:'50vh', transform: 'translateY(-50%)', fontSize:'43px'}}>Mapped Resources Across the U.S.</h2> 
     
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
          <Pin text="Trinity Rescue Mission. Helps all types of women and their children, no matter what kind of background they come from, or what their needs are. Address: 622 W Union St, Jacksonville, FL 32202 Website: trinityrescue.org Phone Number: (904) 355-1205" coordinates={[450, 745]} />
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


      {/*Iowa Pins */}
      <div className = "pins-container">
        {/*Micah House*/} 
        <Pin text= "Micah House. Provides a safe and nurturing environment with support services for families and individuals experiencing homelessness. Address: 1415 Avenue J, Council Bluffs, IA 51501 Website: themicahhouse.org Phone Number: (712) 323-4416" coordinates={[220, 479]} />
        {/*Lotus Community Project*/} 
        <Pin text= "Lotus Community Project. Strives to help single women and all family units create better lives for themselves. Address: 2980 170th St, Vincent, IA 50594 Website: lotuscommunityproject.org Phone Number: (515) 571-8802" coordinates={[205, 510]} />
        {/*Young Women's Resource Center*/} 
        <Pin text= "Young Women's Resource Center. Supports, educates, and advocates for girls and young women ages 10-24. Address: 818 5th Ave, Des Moines, IA 50309 Website: ywrc.org Phone Number: (515) 244-4901" coordinates={[225, 520]} />
        {/*Salvation Army*/} 
        <Pin text= "The Salvation Army Women & Children's Emergency Shelter. Supports homeless women and domestic abuse victims. Address: 603 S Hackett Rd, Waterloo, IA 50701 Phone Number: (319) 232-0397" coordinates={[209, 540]} />
        {/*Shelter House*/} 
        <Pin text= "Shelter House. Gives resources to those in need, such as health care, employment, and housing. Address: 429 Southgate Ave, Iowa City, IA 52240 Website: shelterhouseiowa.org Phone Number: (319) 351-0326" coordinates={[220, 550]} />
      </div>
      
      {/*Colorado Pins */}
      <div className = "pins-container">
         {/*YWCA*/} 
         <Pin text= "YWCA. Dedicated to empowering women and promoting peace, justice, freedom, and dignity for all. Address: 801 N Santa Fe Ave, Pueblo, CO 81003 Website: ywca.org Phone Number: (719) 542-6904" coordinates = {[290, 330]} />
         {/*Women Partnering*/} 
         <Pin text= "Women Partnering. Forms relationships that nuture wholeness of body, mind, and spirit with financially vulnerable women. Address: 961 E Colorado Ave, Colorado Springs, CO 80903 Website: womenpartnering.org Phone Number: (719) 577-9404" coordinates = {[300, 320]} />
         {/*The Gathering Place*/} 
         <Pin text= "The Gathering Place. Offers access to basic necessities and care options to women and GNC minorities. Address: 1535 High St, Denver, CO 80218 Website: tgpdenver.org Phone Number: (303) 321-4198" coordinates = {[270, 315]} />
         </div>

      {/*Montana Pins */}
      <div className = "pins-container">
         {/*Great Falls Rescue Mission Women's Shelter*/} 
         <Pin text= "Great Falls Rescue Mission Women's Shelter. Provide guidance to help the homeless find a purpose and a place to belong. Address: 317 2nd Ave S, Great Falls, MT 59405 Website: greatfallsrescuemission.org Phone Number: (406) 452-1483" coordinates={[70, 240]} />
         {/*Friendship Center of Helena*/} 
         <Pin text= "Friendship Center of Helena. Serves those affected by domestic violence, sexual assault, and stalking. Address: 1430 N Sanders St, Helena, MT 59601 Website: thefriendshipcenter.org Phone Number: (406) 442-6800" coordinates={[80, 220]} />
         {/*Women's Resource Center*/} 
         <Pin text="Women's Resource Center. Provides advocacy services to survivors of domestic and sexual violence. Address: 236 E Reeder St, Dillon, MT 59725 Website: wrcmt.org Phone Number: (406) 683-6106" coordinates={[115, 215]} />
         {/*Haven*/} 
         <Pin text= "Haven. Provides confidential support, counseling, and a safe place for anyone impacted by domestic violence, sexual assault, and more. Address: 132 Pond Row, Bozeman, MT 59718 Website: havenmt.org Phone Number: (406) 586-4111" coordinates={[100, 230]} />
         {/*YMCA Gateway House*/} 
         <Pin text="YMCA Gateway House. Provides emergency and transitional services to survivors of dometic violence, sexual assault, and human trafficking. Address: 909 Wyoming Ave, Billings, MT 59101 Website: ywcabillings.org Phone Number: (406) 245-4472" coordinates={[110, 290]} />
      </div>


      {/*Arkansas Pins */}
      <div className = "pins-container">
         {/*Women's Crisis Center-South*/} 
         <Pin text= "Women's Crisis Center-South. Focused mission to help women who have faced trauma or need immediate care. Address: 1112 W Washington St, Camden, AR 71701 Phone Number: (870) 836-0375" coordinates={[400, 532]} />
         {/*NWA Women's Shelter Thrift Store*/} 
         <Pin text= "NWA Women's Shelter Thrift Store. Provides high-quality access to accessories, appliances, clothes, and essential needs. Address: 1112 W Washington St, Camden, AR 71701 Website: nwaws.org Phone Number: (479) 621-6116" coordinates={[364, 522]} />
         </div>

        {/*Michigan Pins */}
        <div className = "pins-container">
         {/*All Things Women, Inc*/} 
         <Pin text= "All Things Women, Inc. Provides services designed to remove the barriers faced by underrepresented populations. Address: 2340 Calvert Ave, Detroit, MI 48206 Website: allthingswomeninc.org Phone Number: (313) 733-6265" coordinates={[150, 650]} />
         {/*Alternatives For Girls*/} 
         <Pin text= "Alternatives For Girls. Offers safe shelter, crisis support, and more for homeless young women. Address: 903 W Grand Blvd, Detroit, MI 48208 Website: alternativesforgirls.org Phone Number: (313) 361-4000" coordinates={[160, 660]} />
         {/*Every Womans Place Inc*/} 
         <Pin text= "Every Woman's Place, Inc. Provides services for victims and survivors of sexual assault. Address: 1221 W Laketon Ave, Muskegon, MI 49441 Website: everywomansplace.org Phone Number: (231) 759-7909" coordinates={[150, 630]} />
         </div>

         {/*Washington Pins */}
        <div className = "pins-container">
         {/*Everett Gospel Mission Women and Children's Shelter*/} 
         <Pin text= "Everett Gospel Mission Women And Children's Shelter. Assists homeless women in receiving necessities and care. Address: 5126 S 2nd Ave, Everett, WA 98203 Website: egmission.org" coordinates={[50, 100]} />
         {/*Hope House*/} 
         <Pin text= "Hope House. Offers women personal care, including food, clean clothes, and hygiene items. Address: 318 S Adams St #99201, Spokane, WA 99201 Website: voaspokane.org Phone Number: (509) 816-1669" coordinates={[50, 150]} />
         </div>

         {/*Maine Pins */}
        <div className = "pins-container">
         {/*New Hope Women's Shelter*/} 
         <Pin text= "New Hope Women's Shelter. Serves the homeless and reaches out to women where they are. Address: 111 N Main St, Solon, ME 04979 Website: newhopeshelter.com Phone Number: (207) 643-6015" coordinates={[75, 879]} />
         {/*New Hope For Women*/} 
         <Pin text= "New Hope For Women. Address: 6 Public Safety Way, Belfast, ME 04915 Website: newhopeforwomen.org Phone Number: (207) 338-6569" coordinates={[100, 890]} />
         </div>

       {/*Pennsylvania Pins */}
       <div className = "pins-container">
         {/*Women's Help Center Inc*/} 
         <Pin text= "Women's Help Center Inc. Provides support to less fortunate women in times of need. Address: 809 Napoleon St, Johnstown, PA 15901 Website: womenshelpcenter.org Phone Number: (814) 536-5361" coordinates={[220, 760]} />
         {/*Ruth's Place*/} 
         <Pin text= "Ruth's Place. Provides emergency shelter and personal hygeine equipment to women in need. Address: 425 N Pennsylvania Ave, Wilkes-Barre Township, PA 18702 Website: voapa.org Phone Number: (570) 822-6817" coordinates={[200, 795]} />
         {/*Women's Center of Beaver County*/} 
         <Pin text= "Women's Center of Beaver County. Advocates for all victims of domestic violence and sexual assault. Address: 190 3rd St, Beaver, PA 15009 Website: womenscenterbc.org Phone Number: (724) 775-0131" coordinates={[205, 750]} />
          </div>
</div>

</>
    );
  }
}

export default Map;