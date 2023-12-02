import { configureStore } from "@reduxjs/toolkit";
import { courseListReducer } from "../components/course-list/redux/course-list-slice";
import { courseDetailsReducer } from "../components/course-details/redux/course-details-slice";

export const store = configureStore({
    reducer: { "courses": courseListReducer, "courseDetails": courseDetailsReducer }
})