import React, { useState, useEffect } from 'react';
import ShowCard from '../ShowCard/ShowCard';

const Summary = () => {

  //state for set all data and map these
  const [data, setData] = useState([]);

  //loader state for show a loader while lodaing
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(responsedData => {
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
    <div>
      <h3 className="display-4 text-center mt-5 fw-semibold">Top Shows Of The World </h3>
      <div className=" container mx-auto mt-4 row row-cols-1 row-cols-md-3 g-4">

        {data.map(show =>
          <ShowCard key={show.show.id}
            show={show}
          ></ShowCard>

        )}
      </div>
    </div>

  );
};

export default Summary;
