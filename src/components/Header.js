import React from "react";
import { positions } from "@material-ui/system";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import App from "./App";
import { useState } from "react";
import Login from "./Login";
import { selectUser, userSlice } from "./UserSlice";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { logoutuser } from "./UserSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header({ name }) {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const signout = () => {
    window.localStorage.clear();
    dispatch(logoutuser({}));
  };

  const loginpage_visiblity = () => {
    if (user) {
      setShow(false);
      setShow1(!show1);
    } else {
      setShow(!show);
      setShow1(false);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header__left">
          <Link to="/">
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png" />
          </Link>
        </div>
        <div className="header__right">
          <div className="header__options">
            <NewReleasesOutlinedIcon /> <span>Super offers</span>
          </div>
          <div className="header__options">
            <LocalMallIcon />
            <span>Introducing myBiz</span>
          </div>
          <div className="header__options">
            <a href="/">
              {" "}
              <CardTravelIcon />
              <span style={{ color: "white" }}>My Trips</span>
            </a>
          </div>
          <div className="header__options">
            <button
              type="button"
              className="btn btn-primary "
              onClick={loginpage_visiblity}
            >
              {name}
              <ArrowDropDownIcon />
            </button>
            {show1 && user && (
              <div className="dropdown-content">
                <a className="logout" onClick={signout}>
                  LogOut
                </a>
              </div>
            )}
          </div>

          <div className="header__options">
            <select
              className="form-select-font-size: 20px"
              aria-label="Country"
            >
              <option>IND|ENG|INR</option>
              <option value="1">UAE|ENG|AED</option>
              <option value="2">USA|ENG|USD</option>
            </select>
          </div>
        </div>
      </div>
      {!user && show && (
        <div className="login_page">
          <Login />
        </div>
      )}
    </>
  );
}
