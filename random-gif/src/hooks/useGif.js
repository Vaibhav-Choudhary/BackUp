import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

const API_KEY = 'InZLLXHtj33LGl5BQ0u1VQxi3z35pLFt';

const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif( tag ){

    const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  
  
  useEffect( () => {
    fetchData('car');
  },[] )

  return {gif, loading, fetchData};

}

export default useGif;