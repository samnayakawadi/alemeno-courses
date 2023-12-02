import { useDispatch } from "react-redux"
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

    const fetchCoursesHandler = () => {
        dispatch(courseListActions.toggleIsLoading(true))
        setTimeout(() => {
            dispatch(courseListActions.updateCourses(data))
            dispatch(courseListActions.toggleIsLoading(false))
        }, 1500)
    }

    return { fetchCoursesHandler }
}

export default CourseListHandlers