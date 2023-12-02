export const courseListReducers = {
    updateCourses: (prevState, actions) => {
        return { ...prevState, courses: actions.payload, displayedCourses: actions.payload }
    },
    updateDisplayedCourses: (prevState, actions) => {
        return { ...prevState, displayedCourses: actions.payload }
    },
    toggleIsLoading: (prevState, actions) => {
        return { ...prevState, isLoading: actions.payload ? true : false }
    },
    updateSearchText: (prevState, actions) => {
        return { ...prevState, searchText: actions.payload }
    }
}