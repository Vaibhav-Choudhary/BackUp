import logo from './logo.svg';
import './App.css';
import reviews from './data';
import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className='flex flex-col items-center'>
      <h1 className='font-bold text-4xl'>Our Testimonies</h1>
      <div className='bg-violet-500 h-[6px] w-[150px] mt-2 mb-6 rounded-lg'></div>
      </div>
      <Card reviews={reviews}></Card>
    </div>
  );
}

export default App;
