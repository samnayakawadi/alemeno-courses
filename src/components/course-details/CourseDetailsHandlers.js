import { useDispatch, useSelector } from "react-redux"
import { courseDetailsActions } from "./redux/course-details-slice"
import { useNavigate } from "react-router"

const CourseDetailsHandlers = () => {

    const courses = useSelector(prevState => prevState.courses)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const fetchCourseDetailsHandler = (id) => {

        if (courses.courses === null) {
            navigate("/courses")
        }
        else {
            let courseDetails = undefined
            courses.courses.every(singleCourse => {
                if (singleCourse.id == id) {
                    courseDetails = singleCourse
                    return false
                }
                return true
            })
            dispatch(courseDetailsActions.updateAllData(courseDetails))
        }
    }

    return { fetchCourseDetailsHandler }
}

export default CourseDetailsHandlers