import React from 'react';
import styles from '../app.css';

const Content = React.createClass({
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.logo}>
          <img className={styles.image} src="http://i.imgur.com/fk27KC2.png" />
          <h1 className={styles.title}>
            devSquare-br
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
        </p>
        <a className={styles.btn}>In progress...</a>
      </div>
    )
  }
});

export default Content;
