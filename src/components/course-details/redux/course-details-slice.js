import { createSlice } from "@reduxjs/toolkit";
import { courseDetailsState } from "./course-details-state";
import { courseDetailsReducers } from "./course-details-reducers";

const courseDetailsSlice = createSlice({
    name: "course-details-slice",
    initialState: courseDetailsState,
    reducers: courseDetailsReducers
})

export const courseDetailsActions = courseDetailsSlice.actions
export const courseDetailsReducer = courseDetailsSlice.reducer