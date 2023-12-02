import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../components/course-list/redux/course-list-slice";

export const store = configureStore({
    reducer: { "courses": reducer }
})