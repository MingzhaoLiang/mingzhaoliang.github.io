import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./display/displaySlice";
import headerReducer from "./header/headerSlice";

export const store = configureStore({
	reducer: {
		display: displayReducer,
		header: headerReducer,
	},
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
