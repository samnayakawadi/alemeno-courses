import { createSlice } from "@reduxjs/toolkit";
import { courseListState } from "./course-list-state";
import { courseListReducers } from "./course-list-reducers";

const courseListSlice = createSlice({
    name: "course-list-slice",
    initialState: courseListState,
    reducers: courseListReducers
})

export const courseListActions = courseListSlice.actions
export const courseListReducer = courseListSlice.reducer