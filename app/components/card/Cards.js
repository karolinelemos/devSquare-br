import React, { Component } from 'react';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCount: null,
    }
  }
  componentWillReceiveProps(props) {
    this.setState({usersCount: props.info.length});
  }
  render() {
    const b = this.props.info.map(function(user, key) {
       return (
         user ?
         <div key={key}>
           <div >
             <h5>{user.name}</h5>
             <p></p>
           </div>
         </div> : null
       )
     });
   return (
     <div>
       <h5>{this.state.usersCount == null ? '' : this.state.usersCount + ' resultado(s) encontrado(s).'}</h5>
       {b}
     </div>
   )
 }
};

export default Cards;
