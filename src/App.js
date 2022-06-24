import React from "react";
import { useSelector } from "react-redux";
import "./app.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Display from "./Components/Display/Display";

export default function App() {
  const { list } = useSelector(state => state.data)
   return (
    <div>
      <Header />
      {list[0] ? <Display name={list[1]}/> : <Body />}
    </div>
  );
}