import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Summary from './Pages/Summary/Summary';
import ShowBookingForm from './Pages/ShowBookingForm/ShowBookingForm';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import BookedShow from './Pages/BookedShow/BookedShow';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/summary/:showId',
        element : <Summary></Summary>,
        loader : ()=> fetch('https://api.tvmaze.com/search/shows?q=all')
      },
     
        {
          path : '/bookingForm',
          element : <ShowBookingForm></ShowBookingForm>
        },
        {
          path: '/bookedShows',
          element: <BookedShow></BookedShow>
          }
       
    ]
    },
   
    

 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
