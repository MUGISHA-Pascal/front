import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  filterText:string
}

const initialState: SearchState = {
  query: "",
  filterText:""
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<{ query: string;filterText:string}>) => {
      state.query = action.payload.query;
      state.filterText = action.payload.filterText
    },
    clearSearchQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
