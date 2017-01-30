import React, { Component } from 'react';
import styles from '../app.css';
import Data from './services/Data';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    function Get(yourUrl){
      var Httpreq = new XMLHttpRequest(); // a new request
      Httpreq.open("GET",yourUrl,false);
      Httpreq.send(null);
      return Httpreq.responseText;
    }

    const jsonObj = JSON.parse(Get('../public/data.json'));
    console.log(jsonObj);
  }
  render () {
    return (
      <div className={styles.inputBox}>
        <form onSubmit={this.handleSubmit} className={styles.inputBox}>
          <input className={styles.input} type="text" ref="city" autoFocus/>
          <button className={styles.goButton} type="submit"> Go </button>
        </form>
      </div>
    );
  }
};

export default Input;
