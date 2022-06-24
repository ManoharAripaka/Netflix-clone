import { createSlice } from "@reduxjs/toolkit";
const DataStore = createSlice({
  name: "Store",
  initialState: {
    banner: [],
    watchList: [],
    list: [false,''],
    listData: {},
  },
  reducers: {
    updateBanner: (state, action) => {
      state.banner = action.payload;
    },
    updateWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    removeWatchList: (state, action) => {
      state.watchList.splice(action.payload, 1);
    },
    updateList: (state, action) => {
      state.list = action.payload;
    },
    updateListData: (state, action) => {
      state.listData = action.payload;
    },
  },
});
export const { updateBanner, updateWatchList, removeWatchList, updateList, updateListData } =
  DataStore.actions;
export default DataStore.reducer;
