import { createSlice } from "@reduxjs/toolkit";

const MAX_ENTRIES = 6;

// This slice never handles its own actions in `reducers` - instead it uses
// a matcher that runs for every action dispatched to the store, which is a
// direct, visible demonstration of "the store runs the reducer(s) for every
// dispatched action."
const activityLogSlice = createSlice({
  name: "activityLog",
  initialState: {
    entries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      () => true,
      (state, action) => {
        state.entries.unshift({
          type: action.type,
          at: new Date().toLocaleTimeString(),
        });
        state.entries.length = Math.min(state.entries.length, MAX_ENTRIES);
      },
    );
  },
});

export default activityLogSlice.reducer;
