import { createSlice } from "@reduxjs/toolkit";

interface DisplayState {
	darkMode: boolean;
}

const initialState: DisplayState = {
	darkMode: false,
};

const displaySlice = createSlice({
	name: "display",
	initialState,
	reducers: {
		toggleDarkMode(state) {
			state.darkMode = !state.darkMode;
		},
		setDarkMode(state, action) {
			state.darkMode = action.payload;
		},
	},
});

export const displayActions = displaySlice.actions;
export default displaySlice.reducer;
