import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { _id, category, details, quantity, name, photo, supplier, taste } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const quantity= form.quantity.value;
    const supplier= form.supplier.value;
    const taste= form.taste.value;
    const category= form.category.value;
    const details= form.details.value;
    const photo= form.photo.value;
    const updatedCoffee = {name,quantity,supplier,taste,category,details,photo};
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Update!',
          text: 'Coffee updated successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        form.reset();
      }
    })
  }
  return (
    <div>
      <div className='bg-[#F4F3F0] p-24'>
        <h2 className='text-center text-5xl font-extrabold mb-5'>Update Coffee Details</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}
          <div className='md:flex mb-4'>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" name='name' defaultValue={name}/>
              </label>
            </div>
            <div className="form-control md:w-1/2 ms-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Available quantity" className="input input-bordered w-full" name='quantity' defaultValue={quantity} />
              </label>
            </div>
          </div>
          {/* form supplier and taste row */}
          <div className='md:flex mb-4'>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Enter supplier name" className="input input-bordered w-full" name='supplier' defaultValue={supplier} />
              </label>
            </div>
            <div className="form-control md:w-1/2 ms-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Taste" className="input input-bordered w-full" name='taste' defaultValue={taste} />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className='md:flex mb-4'>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" name='category' defaultValue={category} />
              </label>
            </div>
            <div className="form-control md:w-1/2 ms-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" name='details' defaultValue={details} />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className='mb-8'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" name='photo' defaultValue={photo} />
              </label>
            </div>
          </div>
          <input className="btn btn-block bg-[#927b5e]" type="submit" value="Update Coffee" />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;