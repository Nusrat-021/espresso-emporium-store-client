import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const quantity= form.quantity.value;
    const supplier= form.supplier.value;
    const taste= form.taste.value;
    const category= form.category.value;
    const details= form.details.value;
    const photo= form.photo.value;
    const newCoffee = {name,quantity,supplier,taste,category,details,photo};
    console.log(newCoffee);
    

    //send data to the server

    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'User added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        form.reset();
      }
    })

  }
  return (
    <div className='bg-[#F4F3F0] p-24'>
      <h2 className='text-center text-5xl font-extrabold mb-5'>Add New Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className='md:flex mb-4'>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" name='name' />
            </label>
          </div>
          <div className="form-control md:w-1/2 ms-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Available quantity" className="input input-bordered w-full" name='quantity' />
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
              <input type="text" placeholder="Enter supplier name" className="input input-bordered w-full" name='supplier' />
            </label>
          </div>
          <div className="form-control md:w-1/2 ms-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Taste" className="input input-bordered w-full" name='taste' />
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
              <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" name='category' />
            </label>
          </div>
          <div className="form-control md:w-1/2 ms-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" name='details' />
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
              <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" name='photo' />
            </label>
          </div>
        </div>
        <input className="btn btn-block bg-[#927b5e]" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;