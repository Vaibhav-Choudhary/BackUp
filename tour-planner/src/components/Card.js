import { useState } from "react";


function Card({id,image,info,price,name, removeTour}){


    

    const [readmore, setReadmore] = useState(false);
    const description=readmore?info:`${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }


    return(
    <div className=' cards w-[350px] rounded-xl items-center shadow-black bg-blend-lighten shadow-sm flex flex-col m-4 p-4 '>
        <img src={image} className='image w-[280px] aspect-[1/1] object-cover'></img>
        <div className="tour-info mx-[1 0px] my-[15px]">
            <div className="tour-details ">
                <h4 className='tour-price text-[1.25rem] font-bold text-[#1faa59]'>$ {price}</h4>
                <h4 className='tour-name font-bold text-xl'>{name}</h4>
             </div>
        <div className='description'>
            {description}
            <span className="read-more text-[#12b0e8] cursor-pointer" onClick={readmoreHandler} >
                {readmore ? 'show less' : 'read more'}
            </span>
        </div>
        </div>
        <button className='w-[80%] mx-auto font-semibold mt-4 py-[8px] text-center rounded-xl border-[#b4161b] border-[1px] border-solid bg-[#b4161b21] hover:bg-red-500 hover:text-white hover:transition-all ' onClick={()=>removeTour(id)}>
            Not Interested
        </button>
    </div>

    );
}

export default Card;