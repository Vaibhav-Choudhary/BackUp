import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import NewProduct from './components/NewProduct';

const App = () =>{
  const product = [
    {
      id:'01',
      title:'Maggie',
      amount:14,
      date: new Date(2024,1,12),
    },
    {
      id:'02',
      title:'Yipee',
      amount:12,
      date: new Date(2021,1,12),
    },
    {
      id:'03',
      title:'Wai Wai',
      amount:10,
      date: new Date(2024,2,5),
    },
    {
      id:'04',
      title:'Indomie',
      amount:30,
      date: new Date(2024,2,5),
    }
  ];

  function productData(data){
    console.log("Inside App Container");
    console.log(data);
  }

  return (
    <div>
      <NewProduct fn={productData}/>
      <Products items={product}></Products>
    </div>
  )
}

export default App;
