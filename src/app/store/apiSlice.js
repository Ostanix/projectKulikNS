import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    albums: [],
    photos: [],
    cards: [],
  },
  reducers: {
    stateOfAlbumsArray: (state, action) => {
      state.albums = action.payload;
    },
    stateOfPhotosArray: (state, action) => {
      state.photos = action.payload;
    },
    stateOfCardsArray: (state, action) => {
      state.cards = action.payload;
    },
  },
  extraReducers: {},
});

export const { stateOfAlbumsArray, stateOfPhotosArray, stateOfCardsArray } = apiSlice.actions;

export default apiSlice.reducer;
