import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import GithubRibbon from './components/GithubRibbon';
import styles from './app.css';
import Content from './components/Content';
import Search from './components/Search';
import Footer from './components/Footer';

const Home = React.createClass({
  render () {
    return (
      <div className={styles.box}>
        <GithubRibbon />
        <Content />
        <Footer />
      </div>
    );
  }
});

const Capture = React.createClass({
  render() {
    return (
      <div className={styles.box}>
        <Search />
      </div>
    );
  }
})

ReactDOM.render(
  <Home />,
	document.getElementById('app')
);
