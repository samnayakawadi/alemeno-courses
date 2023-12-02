import { configureStore } from "@reduxjs/toolkit";
import { courseListReducer } from "../components/course-list/redux/course-list-slice";

export const store = configureStore({
    reducer: { "courses": courseListReducer }
})