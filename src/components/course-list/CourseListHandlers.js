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
            likes: 1,
            enrollmentStatus: 'Closed',
            thumbnail: 'your.image.here',
            duration: '8 weeks',
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to React Native',
                    content: 'Overview of React Native, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building Your First App',
                    content: 'Creating a simple mobile app using React Native components.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 101,
                    name: 'Alice Johnson',
                    email: 'alice@example.com',
                },
                {
                    id: 102,
                    name: 'Bob Smith',
                    email: 'bob@example.com',
                },
                // Additional enrolled students...
            ],
        },
        {
            id: 2,
            name: "Web Development Basics",
            instructor: "Jane Smith",
            description: "Explore the core concepts of web development and build dynamic websites.",
            likes: 5,
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '10 weeks',
            schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
            location: 'Online',
            prerequisites: ['Basic HTML and CSS knowledge', 'Understanding of JavaScript'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Web Development',
                    content: 'Overview of web development, understanding the role of HTML, CSS, and JavaScript.'
                },
                {
                    week: 2,
                    topic: 'Building Static Websites',
                    content: 'Creating static web pages using HTML and CSS.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 201,
                    name: 'Charlie Brown',
                    email: 'charlie@example.com',
                },
                {
                    id: 202,
                    name: 'Diana Miller',
                    email: 'diana@example.com',
                },
                // Additional enrolled students...
            ],
        },
        {
            id: 3,
            name: "Python Programming Basics",
            instructor: "Alex Turner",
            description: "Learn the fundamentals of Python programming language and start coding.",
            likes: 3,
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '6 weeks',
            schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
            location: 'Online',
            prerequisites: ['No prior programming experience required'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Python',
                    content: 'Overview of Python, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Basic Python Syntax',
                    content: 'Understanding variables, data types, and basic syntax in Python.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 301,
                    name: 'Eva White',
                    email: 'eva@example.com',
                },
                {
                    id: 302,
                    name: 'Frank Robinson',
                    email: 'frank@example.com',
                },
                // Additional enrolled students...
            ],
        },
        {
            id: 4,
            name: "Data Science Essentials",
            instructor: "Sophie Williams",
            description: "Explore the essential concepts of data science and analysis techniques.",
            likes: 8,
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '12 weeks',
            schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
            location: 'Online',
            prerequisites: ['Basic understanding of mathematics and statistics', 'Familiarity with programming (preferably Python)'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to Data Science',
                    content: 'Overview of data science, understanding the data science workflow.'
                },
                {
                    week: 2,
                    topic: 'Data Cleaning and Preprocessing',
                    content: 'Techniques for cleaning and preprocessing data for analysis.'
                },
                // Additional weeks and topics...
            ],
            students: [
                {
                    id: 401,
                    name: 'George Davis',
                    email: 'george@example.com',
                },
                {
                    id: 402,
                    name: 'Helen Turner',
                    email: 'helen@example.com',
                },
                // Additional enrolled students...
            ],
        }
    ]

    const courses = useSelector(prevState => prevState.courses)

    const searchTextUpdateHandler = (e) => {
        dispatch(courseListActions.updateSearchText(e.target.value))
    }

    const fetchCoursesHandler = () => {
        dispatch(courseListActions.updateSearchText(""))
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