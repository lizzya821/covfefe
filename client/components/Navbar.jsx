import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import CheckOut from './CheckOutButton';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav className='navbar sticky-top navbar-expand-md navbar-dark bg-brand-dark'>
      <Link
        className='navbar-brand'
        style={{ color: '#eeeeee', textDecoration: 'inherit' }}
        to='/home'
      >
        covfefe
      </Link>
      <button
        style={{ outline: 'none' }}
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarToggler'
        aria-controls='navbarToggler'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div
        className='collapse navbar-collapse justify-content-right'
        id='navbarToggler'
      >
        {isLoggedIn ? (
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/home'>
                home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#' onClick={handleClick}>
                logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link to='/login'>login</Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup'>sign up</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};