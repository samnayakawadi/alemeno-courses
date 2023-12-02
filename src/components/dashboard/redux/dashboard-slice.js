import { createSlice } from "@reduxjs/toolkit";
import { dashboardState } from "./dashboard-state";
import { dashboardReducers } from "./dashboard-reducers";

const dashboardSlice = createSlice({
    initialState: dashboardState,
    name: "dashboard-slice",
    reducers: dashboardReducers
})

export const dashboardActions = dashboardSlice.actions
export const dashboardReducer = dashboardSlice.reducer