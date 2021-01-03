import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div className="list">
        {this.props.contacts.map((c, i) => <Contact  key={i} name={c} displayConvo={this.props.displayConvo}/>)}
      </div>
    );
  }
}

export default List;
