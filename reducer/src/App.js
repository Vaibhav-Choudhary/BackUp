import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router-dom';
//import Counter from './components/Counter';


function App() {
  return (
    <div>
      <div className='bg-slate-900'>
      <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
