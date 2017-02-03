import React from 'react';
import styles from '../app.css';
import { Router, Route, Link, browserHistory } from 'react-router';

const Content = React.createClass({
  render() {
    return (
      <div className={styles.boxHome}>
        <div className={styles.logo}>
          <img className={styles.image} src="http://i.imgur.com/fk27KC2.png" />
          <h1 className={styles.title}>
            devSquare-br
          </h1>
        </div>
        <p>
          Encontre os desenvolvedores da sua cidade, troquem experiências, vão pro bar... &#128516;
        </p>
        <Link to="/search" className={styles.btn}>Capturar</Link>
      </div>
    )
  }
});

export default Content;
