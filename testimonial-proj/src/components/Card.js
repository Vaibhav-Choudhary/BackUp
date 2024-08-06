import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Info from "./Info";

function Card({reviews}){

    const[currentIndex,setcurrentIndex]=useState(0);
    const[currentObj,setCurrentObj]=useState(reviews[0]);

    function leftHandler(){
        const newCurrentIndex = (currentIndex > 0) ? (currentIndex - 1) : (reviews.length - 1);
        setcurrentIndex(newCurrentIndex);
        setCurrentObj(reviews[newCurrentIndex]);
    }

    function rightHandler(){
        const newCurrentIndex = (currentIndex + 1) % reviews.length;
        setcurrentIndex(newCurrentIndex);
        setCurrentObj(reviews[newCurrentIndex]);
    }

    function randomHandler(){
        const newCurrentIndex=Math.floor(Math.random()*5);
        setcurrentIndex(newCurrentIndex);
        setCurrentObj(reviews[newCurrentIndex]);
 
    }


    console.log(currentObj);


    return(<div className="relative bg-white p-8 max-w-[800px] flex flex-col items-center gap-4">
    <Info details={currentObj}></Info>

    <div className="flex gap-8 text-violet-500 text-xl ">
    <button onClick={leftHandler}>
        <FiChevronLeft></FiChevronLeft>
    </button> 

    <button onClick={rightHandler}>
        <FiChevronRight></FiChevronRight>
    </button> 

    
    </div>

    <button onClick={randomHandler} className="bg-violet-600 text-white px-5 pt-[0.35rem] pb-[0.35rem] rounded-lg hover:bg-violet-400 ">
        Surprise Me
    </button>
        


    </div>)

}

export default Card;
