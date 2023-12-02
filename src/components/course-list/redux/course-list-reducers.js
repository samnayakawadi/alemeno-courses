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
    },
    enrollUser: (prevState, actions) => {
        let shouldYouAddThisUser = true
        let selectedCourseIndex = null

        // Checks if user already enrolled or not
        prevState.courses.every((singleCourse, courseIndex) => {
            if (singleCourse.id == actions.payload.courseId) {
                selectedCourseIndex = courseIndex
                singleCourse.students.every((singleStudent) => {
                    if (singleStudent.email === actions.payload.email) {
                        shouldYouAddThisUser = false
                        return false
                    }
                    else {
                        return true
                    }
                })
                return false
            }
            return true
        })

        if (shouldYouAddThisUser) {
            prevState.courses[selectedCourseIndex].students.push({ email: actions.payload.email })
        }
        return prevState

        // I have done as per the assignment JSON (Stundets are getting added after in students array). But is it not practical because, After adding the user to main courses list array, It will get reset when user navigates to courses list page (Hence, I will create a store to manage the enrollements to resolve this)
    },

    updateAlert: (prevState, actions) => {
        return { ...prevState, alert: actions.payload }
    }
}