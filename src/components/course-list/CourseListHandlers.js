import { useDispatch, useSelector } from "react-redux"
import { courseListActions } from "./redux/course-list-slice"

const CourseListHandlers = () => {

    const dispatch = useDispatch()

    const data = [
        {
            id: 1,
            name: "Introduction to React Native",
            instructor: "John Doe",
            description: "Learn the basics of React Native development and build your first mobile app",
            likes: 1
        },
        {
            id: 2,
            name: "UI/UX Design Principles",
            instructor: "Daniel Brown",
            description: "Create visually appealing and user-centric interfaces with design principles.",
            likes: 1
        },
        {
            id: 3,
            name: "Cloud Computing Fundamentals",
            instructor: "Sarah Thompson",
            description: "Understand the basics of cloud computing and its role in modern IT.",
            likes: 1
        },
        {
            id: 4,
            name: "Artificial Intelligence Basics",
            instructor: "Dr. Michael Lee",
            description: "Introduction to the fundamentals of artificial intelligence and its applications.",
            likes: 1
        }
    ]

    const courses = useSelector(prevState => prevState.courses)

    const searchTextUpdateHandler = (e) => {
        dispatch(courseListActions.updateSearchText(e.target.value))
    }

    const fetchCoursesHandler = () => {
        dispatch(courseListActions.toggleIsLoading(true))
        setTimeout(() => {
            dispatch(courseListActions.updateCourses(data))
            dispatch(courseListActions.toggleIsLoading(false))
        }, 1500)
    }

    const searchFromCoursesHandler = (e) => {
        e.preventDefault()
        const updatedCourses = courses.courses.filter(singleCourse => {
            return (singleCourse.name.toLowerCase().includes(courses.searchText.toLowerCase())
                || singleCourse.instructor.toLowerCase().includes(courses.searchText.toLowerCase())
                || singleCourse.description.toLowerCase().includes(courses.searchText.toLowerCase()))
        })
        console.log(updatedCourses)
        dispatch(courseListActions.updateDisplayedCourses(updatedCourses))
    }

    return { fetchCoursesHandler, searchTextUpdateHandler, searchFromCoursesHandler }
}

export default CourseListHandlers