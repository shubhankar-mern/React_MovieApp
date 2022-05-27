import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          padding: '0.5rem',
          backgroundColor: 'black',
        }}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1 style={{ marginLeft: '1rem', color: 'red' }}>NavBar</h1>
        </Link>
        <Link to='/favorites' style={{ textDecoration: 'none' }}>
          <h2 style={{ marginLeft: '3rem', marginTop: '0.5rem' }}>Favorites</h2>
        </Link>
      </div>
    );
  }
}
