import {createSlice} from '@reduxjs/toolkit';

const PostSlice = createSlice({
  name: 'counter',
  initialState: [{}],
  reducers: {
    addPost: (state) => state,
  },
});

const {reducer, actions} = PostSlice;

export const {addPost} = actions;

export default reducer;
