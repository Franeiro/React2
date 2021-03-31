import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [estaCargando, setEstaCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const abortCont = new AbortController();


        setTimeout(() =>{ //setTimeout para simular un tiempo de carga real y que se aprecie el Loading...


        fetch(url, {signal: abortCont.signal })
            .then(res => {

                if(!res.ok){

                    throw Error('No se pudo solicitar el dato buscado');

                }

                return res.json();

            })
            .then((data) => {
                
                setData(data);
                setEstaCargando(false);
                setError(false);})

        .catch((err) =>{

            if(err.name ==='AbortError')
            {
                console.log('Fetch Abortado')
            }
            else{
                setError(err.message);
                setEstaCargando(false);
            }
            
        })      
            
        }, 1000);

        return () => abortCont.abort();
     
    }, [url])

    return {data, estaCargando, error};

}

export default useFetch;