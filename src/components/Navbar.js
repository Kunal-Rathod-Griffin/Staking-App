import React, { Component } from 'react'
import sorcerer from '../sorcerer.jpeg' 


let a = "TheThreeSorcerers Staking pool"

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light fixed-top bg-dark flex-md-nowrap p-20 shadow">
        <a
          className="navbar-brand text-light col-sm-3 col-md-2 mr-0 "
          color='white'
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={sorcerer}  width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp;  The3Sorcerers Staking pool
        </a>

        <ul className="navbar-nav  px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li> 
        </ul>
      </nav>
    );
  }
}

export default Navbar;
