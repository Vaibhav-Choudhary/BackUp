import './NewProduct.css';


import ProductForm from './ProductForm'

function NewProduct(props){

    function printData(product){
        console.log('Inside New Product');
        
        console.log(product);

        props.fn(product)

    }
    return (
        <div className='new-product '>
            <ProductForm fn2={printData}/>
        </div>
    );
}

export default NewProduct;

