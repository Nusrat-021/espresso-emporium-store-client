import './App.css';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const addedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(addedCoffee);

  return (
    <div className='m-20 '>
      <h1 className='text-6xl text-purple-600 text-center'>Espresso Emporium</h1>
      <h3 className='text-center text-3xl my-5'>Total Coffee Item: {coffees.length}</h3>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          >

          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
