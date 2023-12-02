export const dashboardReducers = {
    addNewUser: (prevState, actions) => {

        // Check is user already exists in objet dictionary or not
        const shouldUserBeAdded = Object.keys(prevState.users).every(singleUser => {
            if (singleUser === actions.payload) {
                return false
            }
            return true
        })

        if (shouldUserBeAdded) {
            console.log("User SHould be Added : true")
            return { ...prevState, users: { ...prevState, [actions.payload]: { enrolledCourses: [], currentUser: actions.payload } } }
        }

        return prevState
    },

    enrollUserToCourse: (prevState, actions) => {

        // Checking if course is present or not?
        const shouldEnrollThisCourse = prevState.users[prevState.currentUser].enrolledCourses.every(singleCourse => {
            if (singleCourse.id == actions.payload.id) {
                return false
            }
            return true
        })

        if (shouldEnrollThisCourse) {
            prevState.users[prevState.currentUser].enrolledCourses.push(actions.payload)
        }

        return prevState
    }
}