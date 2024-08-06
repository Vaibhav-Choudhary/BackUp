import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tours from './components/Tours'
import data from './data';

function App() {

  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newTour = tours.filter((tour)=> tour.id != id)
    setTours(newTour);

}

if(tours.length === 0){
  return (
    <div className='refresh flex flex-col justify-center items-center h-[100vh]'>
      <h2 className='font-bold text-xl'>No Tours Left</h2>
      <button onClick={()=>setTours(data)} className='m-10 border-none bg-slate-300 rounded-md px-12 py-1'>
        Refresh
      </button>
    </div>
  );
}

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-5xl m-4 border-dashed border-4 border-blue-600 rounded-3xl px-[2rem] py-[1rem] text-center'>Plan With Love</h2>
      <Tours tours={tours} fn={removeTour} >

      </Tours>
    </div>
  );
}

export default App;
