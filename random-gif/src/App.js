import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="App w-full h-screen flex flex-col background relative overflow-x-hidden items-center  ">
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-10 px-10 py-2 text-4xl font-bold mx-auto' >Random GIFS</h1>
      <div className='w-full flex flex-col mt-8 items-center'>
        <Random/>
        <Tag/>
      </div>        

    </div>
  );
}

export default App;
