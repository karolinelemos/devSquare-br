import React, { Component } from 'react';
import info from './info.js';
import GithubUser from './GitHubUser';

const Data = {
  getByCity(d) {
    const cityName = d.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    const a = info.map(function(user, key){
      return user.city == cityName ? user : null;
    });
    const byCity = [];
    a.map(function(user) {
       if(user) {
         GithubUser.getByUsername(user.githubUsername).then((response) => {
            user.avatar = response.data.avatar_url;
            user.github = response.data.html_url;
            user.bio = response.data.bio;
            byCity.push(user);
          });
       }
     });
     return byCity;
  }
};

export default Data;
