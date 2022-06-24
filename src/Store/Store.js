import { configureStore } from "@reduxjs/toolkit";
import DataStore from "./DataStore";

export default configureStore({
    reducer : { data :  DataStore}
})