
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const UpdateJobModal = (props) => {


    const { showSummary } = props;


    const handleShowBooking = event => {
        event.preventDefault();
        const form = event.target;
        const showName = form.showName.value;
        const showDay = form.showDay.value;
        const showTime = form.showTime.value;
        const showCountry = form.showCountry.value;
        const bookingDetails = {
            showName: showName,
            showTime: showTime,
            showDay: showDay,
            showCountry: showCountry
        }



        const existingData = JSON.parse(localStorage.getItem("bookingData")) || [];

        //new bought ticket added in previous data
        const updatedData = [...existingData, bookingDetails];

        // set data in local Storage
        localStorage.setItem("bookingData", JSON.stringify(updatedData));
        toast('Ticket Bought Successfully')
        props.onHide();
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    className="text-center w-100 m-auto"
                    id="contained-modal-title-vcenter"
                >
                    Book   {showSummary.name} Show
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleShowBooking} className="container mb-3">
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label ms-2">Show Name</label>
                        <input type="text" name="showName" className="form-control ms-2" id="exampleFormControlInput1" value={showSummary?.name} />
                    </div>

                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label ms-2 mt-2">Show Date</label>
                        <input type="text" name="showTime" className="form-control ms-2" id="exampleFormControlInput1" value={showSummary?.schedule?.time} />
                    </div>
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label ms-2 mt-2">Show Day</label>
                        <input type="text" name="showDay" className="form-control ms-2" id="exampleFormControlInput1" value={showSummary?.schedule?.days[0]} />
                    </div>
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label ms-2 mt-2">Show's Country</label>
                        <input type="text" name="showCountry" className="form-control ms-2" id="exampleFormControlInput1" value={showSummary?.network?.country?.name} />
                    </div>
                    <input className="btn mt-4 ms-2 btn-primary" type="submit" value="Buy Ticket" />

                </form>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
};

export default UpdateJobModal;
