import React, { Component } from 'react';

class Data extends Component {
  Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
  }
  getByCity(city) {
  //  return axios.get(`../public/data.json`);
  const jsonObj = JSON.parse(Get('../public/data.json'));
  console.log("this is the author name: "+ jsonObj);
  }
};

export default Data;
