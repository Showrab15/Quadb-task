import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {

//destructure object for clean code
    const { name, id, type, language, runtime, image } = show.show;
    return (
        <div >
            <div className="col h-100">
                <div style={{ backgroundColor: "blanchedalmond" }} className="card h-100">
                    <img src={image.original} className="card-img-top h-100 w-100 object-fit-cover " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name : {name}</h5>
                        <p className="fw-semibold">Type : {type}</p>
                        <p className="fw-semibold">Language : {language}</p>
                        <p className="fw-semibold">Runtime : {runtime}</p>
                        <Link to={`/summary/${id}`}>             <button className="btn btn-primary">Summary</button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ShowCard;