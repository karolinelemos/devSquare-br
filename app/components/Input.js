import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../app.css';
import Data from '../services/Data';
import Cards from './card/Cards';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      info: []
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({info: Data.getByCity(this.refs.city.value)});
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.inputBox}>
          <form onSubmit={this.handleSubmit} className={styles.inputBox}>
            <input className={styles.input} type="text" ref="city" placeholder="Ex: Joinville" autoFocus/>
            <Link to='search' className={styles.goButton} type="submit"> GO </Link>
          </form>
        </div>
        <div className={styles.boxCard}>
          <Cards info={this.state.info}/>
        </div>
      </div>
    );
  }
};

Input.propTypes = {
  info: React.PropTypes.object
}

export default Input;
