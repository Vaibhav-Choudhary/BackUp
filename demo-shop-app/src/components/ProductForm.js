import { useState } from 'react';
import './ProductForm.css'




function ProductForm(props){
    const [newtitle, setTitle]=useState('');
    const [newdate, setDate]=useState('');

    function titleHandler(event){
        setTitle(event.target.value);
        console.log(newtitle);
    }

    function dateHandler(event){
        console.log('handle date invoked');
        setDate(event.target.value)
    }


    function handleSubmit(event){
        event.preventDefault();

        let productData={
            title:newtitle,
            date:newdate,
        };

        props.fn2(productData);

        console.log(productData);
        setDate('');
        setTitle('');

    }

    

    return (
        <form onSubmit={handleSubmit}>
        <div className='new-product__controls'>
        <div className='new-product__control'> 
            <label>Title</label>
            <input type="text" value={newtitle} placeholder='Enter Product Name' onChange={titleHandler}></input>
        </div>
        <div className='new-product__control'>
            <label>Date</label>
            <input type="date" value={newdate} onChange={dateHandler} min='01-01-2024' max='01-01-2025'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
        </div>
        </form>
    );
}

export default ProductForm;