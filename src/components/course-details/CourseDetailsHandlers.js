import { useDispatch, useSelector } from "react-redux"
import { courseDetailsActions } from "./redux/course-details-slice"
import { useNavigate } from "react-router"
import { courseListActions } from "../course-list/redux/course-list-slice"
import { dashboardActions } from "../dashboard/redux/dashboard-slice"
import { useState } from "react"

const CourseDetailsHandlers = () => {

    const courses = useSelector(prevState => prevState.courses)
    const dashboardState = useSelector(prevState => prevState.dashboard)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [currentCourseData, setCurrentCourseData] = useState(null)

    const fetchCourseDetailsHandler = (id) => {

        if (courses.courses === null) {
            navigate("/courses")
        }
        else {
            let courseDetails = undefined
            courses.courses.every(singleCourse => {
                if (singleCourse.id == id) {
                    courseDetails = singleCourse
                    setCurrentCourseData(courseDetails)
                    return false
                }
                return true
            })
            dispatch(courseDetailsActions.updateAllData(courseDetails))
        }
    }

    const enrollUserToCourseHandler = (courseId, email) => {
        dispatch(courseListActions.enrollUser({ courseId, email }))
        if (currentCourseData !== null) {
            dispatch(dashboardActions.enrollUserToCourse(currentCourseData))
        }
    }

    const checkIfUserIsEnrolledOrNotHandler = (courseId) => {
        const shouldDoTheEnrollment = dashboardState.users[dashboardState.currentUser].enrolledCourses.every(singleCourse => {
            if (singleCourse.id == courseId) {
                return false
            }
            return true
        })
        return shouldDoTheEnrollment === false ? true : false
    }

    return { fetchCourseDetailsHandler, enrollUserToCourseHandler, checkIfUserIsEnrolledOrNotHandler }
}

export default CourseDetailsHandlers