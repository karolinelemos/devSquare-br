import React from 'react';
import styles from '../app.css';
import Input from './Input';
import GithubRibbon from './GithubRibbon';

const Search = React.createClass({
  render() {
    return (
      <div className={styles.search}>
        <GithubRibbon />
        <h1 className={styles.move}>Digite o nome da cidade:</h1>
        <Input />
      </div>
    );
  }
});

export default Search;
