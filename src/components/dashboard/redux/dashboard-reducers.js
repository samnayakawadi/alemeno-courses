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
            prevState.users[prevState.currentUser].enrolledCourses.push({ ...actions.payload, isComplete: false })
        }

        return prevState
    },

    markCourseAsComplete: (prevState, actions) => {
        let courseIndex = null
        prevState.users[prevState.currentUser].enrolledCourses.every((singleCourse, singleIndex) => {
            if (singleCourse.id == actions.payload) {
                courseIndex = singleIndex
                return false
            }
            return true
        })

        prevState.users[prevState.currentUser].enrolledCourses[courseIndex].isComplete = true

        return prevState
    },

    selectUser: (prevState, actions) => {

        if (prevState.users[actions.payload] !== undefined) {
            return { ...prevState, currentUser: actions.payload }
        }
        return prevState

    }
}