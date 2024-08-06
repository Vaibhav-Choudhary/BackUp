import React, { useState } from "react";
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({course}){

    const[clicked,setClicked]=useState(false);
    function clickHandler(){
        setClicked(!clicked);
        if(!clicked)
        toast.success('Likes Succesfull');
        else
        toast.warning('Unliked Successful')
    }


return(<div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative ">
                <img src={course.image.url}></img>
                <div className="absolute bottom-0 right-0 rounded-full w-[30px]  h-[30px] bg-white flex justify-center items-center">
                    <button onClick={clickHandler}>
                    {clicked ? (
                            <FcLike fontSize="1.35rem" />
                        ) : (
                            <FcLikePlaceholder fontSize="1.35rem" />
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4 text-white">
                 <p className="font-semibold text-lg leading-6">{course.title}</p>
                 <p className="mt-2 ">
                    {
                        course.description.length> 100? (course.description.substr(0,100)):(course.description)
                    }...
                    </p>
            </div>
        </div>);
}

export default Card;
