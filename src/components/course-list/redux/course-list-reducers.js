export const courseListReducers = {
    updateCourses: (prevState, actions) => {
        return { ...prevState, courses: actions.payload }
    }
}