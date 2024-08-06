
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName , setFirstName] = useState('');
  // const[lastName , setLastName] = useState('');

  // console.log(firstName);
  // console.log(lastName);

  // function firstNameChangeHandler(event){
  //   setFirstName(event.target.value);

  // }

  // function lastNameChangeHandler(event){
  //   setLastName(event.target.value);

  // }

  

  const [formData,setFormData ] = useState({firstName:"", lastName:"", email:"",checked:true, mode:"", Country:"", Address:"", City:"", State:"" , Zip:""});


  console.log(formData);

  function submitHandler(event){
    event.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

  }
  function ChangeHandler(event){
    const{name, value}=event.target;
    setFormData( (prevFromData)=>{
      return{
        ...prevFromData, 
        [name]: value,
      }
    } );
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input onChange={ChangeHandler} value={formData.firstName} type='text' name="firstName" placeholder='Enter First Name ...'></input>
        <br/><br></br>
        <input onChange={ChangeHandler} value={formData.lastName} type='text' name="lastName" placeholder='Enter Last Name ...'></input>
        <br/><br></br>
        <input onChange={ChangeHandler} value={formData.email} type='text' name="email" placeholder='Enter email id ...'></input>
        <br/><br></br>
        

        <select
        onChange={ChangeHandler}
        value={formData.Country}
        name='Country'
        if='Country'>
          <option value="India">India</option>
          <option value="Usa">Usa</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
        </select>
        <br></br>

        <textarea name='Address' placeholder="Enter Your Address ..." value={formData.Address} onChange={ChangeHandler}></textarea>
        <br/><br/>
        
        <input name='City' placeholder="Enter Your City ..." value={formData.City} onChange={ChangeHandler}></input>
        <br/><br/>

        
        <input name='Zip' placeholder="Enter Your Zip/Postal Code..." value={formData.Zip} onChange={ChangeHandler}></input>
        <br/><br/>

        <br></br>
        <input type='radio' onChange={ChangeHandler} value='Everything' id='Everything' name='mode' checked={formData.mode==="Everything"?true:false }></input>
        <label htmlFor='Everything'>Everything</label>
        <br/>
        <input type='radio' onChange={ChangeHandler} value='Same-as-email' id='Same-as-email' name='mode' checked={formData.mode==="Same-as-email"?true:false }></input>
        <label htmlFor='Same-as-email'>Same as email</label>
        <br/>
        <input type='radio' onChange={ChangeHandler} value='none' id='Same-as-email' name='mode' checked={formData.mode==="None"?true:false }></input>
        <label htmlFor='Same-as-email'>No push notification</label>
        
        <br></br><br/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
