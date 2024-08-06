import { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = 'InZLLXHtj33LGl5BQ0u1VQxi3z35pLFt';

function Tag(){

    const [tag, setTag] = useState("Dog");
    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(false);
  
  
    // async function fetchData() {
    //   setLoading(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  
    //   const { data } = await axios.get(url);
    //   const imageSource = data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   console.log(imageSource);
    //   setLoading(false);
    // }
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    const { gif, loading, fetchData } = useGif(tag);



    return (<div className="w-1/2  gap-y-5 bg-blue-400 rounded-lg border border-black flex flex-col items-center mt-4">
        <h2 className=" mt-[15px] text-2xl underline uppercase font-bold ">Random {tag} GIF</h2>
    
        {
            loading ? (<Spinner></Spinner>):(<img src={gif}></img>)
        }

        <input className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag}></input>
        

        <button onClick={() => fetchData(tag)} className="mb-[20px] w-9/12 hover:bg-slate-50 hover:opacity-90 bg-white opacity-75 text-lg py-2 rounded-lg">
            Generate
        </button>

    </div>);

}

export default Tag;