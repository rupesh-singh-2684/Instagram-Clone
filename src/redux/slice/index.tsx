import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedPostIds: [],
};

const savedPostSlice = createSlice({
  name: 'savedPost',
  initialState,
  reducers: {
    addSavedPost: (state, action) => {
      const data : any = action.payload
      if (!state.savedPostIds.includes(data)) {
        state.savedPostIds.push(data);
      }
      // console.log(state.savedPostIds)

    },
    removeSavedPost: (state, action) => {
      const data : any = action.payload
      const removed = state.savedPostIds.filter(item => item.id !== data.id)
      state.savedPostIds = removed
      // console.log('REMOVE',state.savedPostIds)
    },
  },
});

export const { addSavedPost, removeSavedPost } = savedPostSlice.actions;
export default savedPostSlice.reducer;