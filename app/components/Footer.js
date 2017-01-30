import React from 'react';
import styles from '../app.css';

const Footer = React.createClass({
  render() {
    return (
      <footer className={styles.footer}>Open Source Project by
        <a href="https://www.karolinelemos.com">
          Karoline Lemos
        </a>
      </footer>
    );
  }
});

export default Footer;
