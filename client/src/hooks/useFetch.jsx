import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_KEY;

const useFetch = ({ keyword }) => {

    const [gifUrl, setGifUrl] = useState("");

    const fetchGif = async () => {

        try {

            const baseURL = 'https://api.giphy.com/v1/gifs/search';
            const key = `?api_key=${API_KEY}`;
            const query = `&q=${keyword.split(" ").join("")}`
            const limit = `&limit=1`
            // const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`;
            const url = baseURL + key + query + limit;
            console.log(url)
            const response = await fetch(url);
            const { data } = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url);
        } catch (error) {
            const defaultURL = "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"

            setGifUrl(defaultURL);
        }
    };

    // when key-word change then, re-run this component again... 
    useEffect(() => {
        if (keyword) fetchGif();
    }, [keyword]);

    return gifUrl;
};

export default useFetch;