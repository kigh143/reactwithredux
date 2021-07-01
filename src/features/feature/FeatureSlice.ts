import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Counter = {
  value: 0,
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
  },
});

export const { incremented, decremented } = featureSlice.actions;
export default featureSlice.reducer;
