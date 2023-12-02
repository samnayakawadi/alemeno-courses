import { configureStore } from "@reduxjs/toolkit";
import { courseListReducer } from "../components/course-list/redux/course-list-slice";
import { courseDetailsReducer } from "../components/course-details/redux/course-details-slice";
import { dashboardReducer } from "../components/dashboard/redux/dashboard-slice";

export const store = configureStore({
    reducer: { "courses": courseListReducer, "courseDetails": courseDetailsReducer, "dashboard": dashboardReducer }
})