import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ShowBookingForm from '../ShowBookingForm/ShowBookingForm';

const Summary = () => {

    const [showSummary, setShowSummary] = useState({});


    const { showId } = useParams();
    // console.log(showId)
    const data = useLoaderData();
    //  console.log(data);



    const show = data.map(show => show?.show)
    // console.log(show)
    useEffect(() => {
        const foundedData = show?.find(dt => dt?.id == showId)
        setShowSummary(foundedData)
        //  console.log(foundedData)
    }, [])


    const { id, summary, name, image, genres, premiered, rating, officialSite } = showSummary;
    // console.log(_links)

    const [modalShow, setModalShow] = React.useState(false);



    return (

        <div className="container mt-5">
            <h3 className="display-5 text-center">Show's Summary</h3>
            <div style={{ backgroundColor: "blanchedalmond" }} className="card h-100 mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image?.original} className="img-fluid h-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text  fw-semibold text-black">Summary : {summary}</p>
                            <p className="card-text  fw-semibold text-black">Premiered : {premiered}</p>
                            <p className="card-text  fw-semibold text-black">Ratings : {rating?.average}</p>
                            <p className="card-text  fw-semibold text-black"> Genres: {genres?.map((genre, idx) => <ul
                                key={idx}
                            ><li>{genre}</li></ul>)}</p>
                          
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Book Now
                            </Button>
                            <ShowBookingForm
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                showSummary={showSummary}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Summary;










