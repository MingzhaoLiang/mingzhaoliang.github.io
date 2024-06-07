import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
	active: boolean;
	activeTab: string | null;
	tabSize: {
		width: number;
		height: number;
		top: number;
		left: number;
	};
	tabOpacity: number;

	windowSize: {
		width: number;
		height: number;
	};
}

const initialState: HeaderState = {
	active: false,
	activeTab: null,
	tabSize: {
		width: 0,
		height: 0,
		top: 0,
		left: 0,
	},
	tabOpacity: 0,

	windowSize: {
		width: 0,
		height: 0,
	},
};

const headerSlice = createSlice({
	name: "header",
	initialState,
	reducers: {
		setActive(state, action) {
			state.active = action.payload;
		},
		setActiveTab(state, action) {
			state.activeTab = action.payload;
		},
		setTabSize(state, action) {
			state.tabSize = { ...action.payload };
		},
		setTabOpacity(state, action) {
			state.tabOpacity = action.payload;
		},
		setWindowSize(state, action) {
			state.windowSize = { ...action.payload };
		},
	},
});

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;
