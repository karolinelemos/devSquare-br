import React, { Component } from 'react';
import styles from './card.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCount: null
    }
  }
  componentWillReceiveProps(props) {
    this.setState({usersCount: props.info.length});
  }
  render() {
    const cards = this.props.info.map(function(user, key) {
       return (
         user ?
         <figure key={key} className={styles.card}>
          <div className={styles.profileImage}>
            <img src={user.avatar} alt="profile-image" />
          </div>
          <figcaption>
            <h3>{user.name}</h3>
            <div className={styles.h5}></div>
            <p className={user.bio ? styles.show : styles.hide}>{user.bio}</p>
            <div className={styles.social}>
              <a className={user.github ? styles.show : styles.hide} href={user.github}>GITHUB</a>
              <a className={user.facebookLink ? styles.show : styles.hide} href={user.facebookLink}>FACEBOOK</a>
              <a className={user.facebookLink ? styles.show : styles.hide} href={user.twitterLink}>TWITTER</a>
            </div>
          </figcaption>
        </figure> : null
       )
     });
   return (
     <div>
       <h5 className={styles.result}>{this.state.usersCount == null ? '' : this.state.usersCount + ' resultado(s) encontrado(s).'}</h5>
       <div className={styles.cardBox}>
         {cards}
       </div>
     </div>
   )
 }
};

export default Cards;
