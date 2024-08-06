import { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = 'InZLLXHtj33LGl5BQ0u1VQxi3z35pLFt';

function Random(){

    const { gif, loading, fetchData } = useGif();

    return (<div className="w-1/2  gap-y-5 bg-green-600 rounded-lg border border-black flex flex-col items-center mt-4">
        <h2 className=" mt-[15px] text-2xl underline uppercase font-bold ">Random Gif</h2>
    
        {
            loading ? (<Spinner></Spinner>):(<img src={gif}></img>)
        }
        

        <button onClick={() => fetchData()} className="mb-[20px] w-9/12 hover:bg-slate-50 hover:opacity-90 bg-white opacity-75 text-lg py-2 rounded-lg">
            Generate
        </button>

    </div>);

}

export default Random;