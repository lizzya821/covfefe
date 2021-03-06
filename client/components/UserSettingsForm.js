import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, editUser } from '../store/singleUser';
import axios from 'axios';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const UserSettingsForm = props => {
  const user = useSelector(state => state.singleUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    if (event) {
      dispatch(editUser(inputs));
      alert('changes saved');
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(input => ({
      ...input,
      [event.target.name]: event.target.value,
    }));
    console.log(inputs);
  };

  // const handleSubmit = () => {
  //   dispatch();
  // };
  return (
    <>
      <h4>My Settings:</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              id="password"
              placeholder={user.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Changes
        </button>
        <a className="btn btn-secondary" href="/settings" role="button">
          Back
        </a>
      </form>
    </>
  );
};

export default UserSettingsForm;
