import React from "react";
import "./Header.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useDispatch } from "react-redux";
import { updateList } from "../../Store/DataStore";

export default function Header() {
  const dispatch = useDispatch()
  const header = document.querySelector(".header")
  window.onscroll = () => {
    window.scrollY > 50
      ? header.classList.add("active")
      : header.classList.remove("active");
  };

  return (
    <div className="header">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt=""
      />
      <div className="header_right">
        <h3 onClick={()=>dispatch(updateList([false,'']))}>Home</h3>
        <h3 onClick={()=>dispatch(updateList([true,'WatchList']))}>WatchList</h3>
        <div className="account">
          <PersonOutlineIcon className="image" />
          <h3>Manohar</h3>
        </div>
      </div>
    </div>
  );
}