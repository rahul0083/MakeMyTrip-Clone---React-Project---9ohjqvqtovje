import React, { useEffect } from "react";
import "../styles/App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Login from "./Login";
import { loginuser, logoutuser, selectUser } from "./UserSlice";
import { useDispatch, useSelector, useContext } from "react-redux";
import { auth } from "./Firebase";
import Home from "./Home";
import HomeFlight from "./HomeFlight";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlightBookPage from "./FlightBookPage";
import BookingConfirmation from "./BookingConfirmation";
import Flight from "./Flight";
import SearchFlights from "./SeachFlights";
import StayInformation from "./StayInformation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginuser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logoutuser({}));
      }
    });
  }, [dispatch]);

  return (
    <div id="main">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Payment" element={<FlightBookPage />} />
          <Route exact path="/Booked" element={<BookingConfirmation />} />
          <Route exact path="/Staycation" element={<StayInformation />} />
          <Route exact path="/Search" element={<SearchFlights />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
