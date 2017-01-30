import React, { Component } from 'react';
import info from './info.js';

const Data = {
  getByCity(d) {
    const cityName = d.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    const a = info.map(function(user, key){
      return user.city == cityName ? user : null;
    });
    const byCity = [];
    a.map(function(user) { if(user) byCity.push(user); });
    return byCity;
  }
};

export default Data;
