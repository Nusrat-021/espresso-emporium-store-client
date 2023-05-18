import React from 'react';

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { _id, category, details, quantity, name, photo, supplier, taste } = coffee;

  return (
    <div className='p-4'>
      <div className="card card-side shadow-xl bg-[#F5F4F1]">
        <figure><img src={photo} alt="Movie" /></figure>
        <div className="flex justify-between w-full pr-4">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end ">
            <div className="btn-group btn-group-vertical space-y-4 ">
              <button className="btn btn-active">View</button>
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;