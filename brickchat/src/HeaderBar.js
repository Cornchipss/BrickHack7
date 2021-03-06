import './App.css';
import React, { Component } from 'react';

import LandingPage from './LandingPage';
import SearchPage from './SearchPage';
import ChatRoom from './ChatRoom';
import AboutPage from './AboutPage';

class HeaderBar extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="HeaderBar">
        <ul>
          <li onClick={() =>
          {
            this.props.main.changePage( (<LandingPage main={this.props.main} />) );
          }}>
            Home
          </li>

          <li onClick={() =>
          {
            this.props.main.changePage( (<SearchPage main={this.props.main} />) );
          }}>
            Chat Rooms
          </li>

          <li onClick={() =>
          {
            this.props.main.changePage( (<AboutPage main={this.props.main} />) );
          }}>
            About
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderBar;
