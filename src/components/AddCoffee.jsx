import React from 'react';

const AddCoffee = () => {
  return (
    <div>
      <h2>Add Coffee</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" className="input input-bordered" />
        </label>
      </div>
    </div>
  );
};

export default AddCoffee;