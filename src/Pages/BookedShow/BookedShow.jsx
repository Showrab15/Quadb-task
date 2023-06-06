import { Link } from "react-router-dom";
import dynamicTitle from "../../hooks/DynamicTitle";


const BookedShow = () => {

  //dynamic title of this page
  dynamicTitle('BookedShow')

  //get the data from local storage
  const bookingData = JSON.parse(localStorage.getItem("bookingData")) || [];

  return (
    <div className="container mx-auto">
      <h3 className="display-4 text-center fw-semibold">Your Booked Shows</h3>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Show Name</th>
            <th scope="col">Show Time</th>
            <th scope="col">Show Day</th>
            <th scope="col">Show Country</th>
          </tr>
        </thead>
        <tbody>
          { bookingData.length == 0 ? <h2  className="display-4 mb-5 mt-5 text-center fw-semibold">You Don't have Booked Any Show </h2>:  bookingData.map((booking, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{booking.showName}</td>
              <td>{booking.showTime}</td>
              <td> {booking.showDay}</td>
              <td> {booking.showCountry}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default BookedShow;