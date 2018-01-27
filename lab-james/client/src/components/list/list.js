import React from 'react';
import {connect} from 'react-redux';
import Auth from '../auth/auth.js';

import {itemAdd} from './list-actions';

class List extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value});
  }

  addItem(e){
    e.preventDefault();
    this.props.handleItemAdd(this.state.item);
  }

  render(){
    return (
      <React.Fragment>
        <Auth>
          <form onSubmit={this.addItem}>
            <label htmlFor="item">
              <input type="text" id="item" onChange={this.handleChange} required />
            </label>
            <input type="submit" value="Add Item" />
          </form>
          <ul>
          {
            this.props.items.map( (item, i) => (
              <li key={i}>{item}</li>
            ))
          }
          </ul>
        </Auth>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleItemAdd: item => dispatch(itemAdd(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
