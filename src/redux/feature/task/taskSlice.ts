import { createSlice } from "@reduxjs/toolkit";

type InitalStateType = {
  searchText: string;
};

const initialState: InitalStateType = {
  searchText: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addSearchText } = taskSlice.actions;

export default taskSlice.reducer;
