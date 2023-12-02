export const courseListReducers = {
    updateCourses: (prevState, actions) => {
        return { ...prevState, courses: actions.payload }
    },
    toggleIsLoading: (prevState, actions) => {
        return { ...prevState, isLoading: actions.payload ? true : false }
    }
}