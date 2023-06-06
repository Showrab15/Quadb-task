import React, { useState, useEffect } from 'react';
import ShowCard from '../ShowCard/ShowCard';

const Summary = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
          .then(res => res.json())
          .then(responsedData =>{
            setData(responsedData);
            setLoading(false);
          })
         
    }, []);

    if (loading) {
        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }

   

    return (
<div className=" container mx-auto row row-cols-1 row-cols-md-3 g-4">
         {data.map(show=> 
            <ShowCard key={show.show.id}
            show={show}
            ></ShowCard>
            
            )}
        </div>
    );
};

export default Summary;
