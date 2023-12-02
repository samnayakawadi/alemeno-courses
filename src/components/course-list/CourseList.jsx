import { useSelector } from "react-redux";
import SingleCourseCard from "./SingleCourseCard"
import { useEffect } from "react";
import CourseListHandlers from "./CourseListHandlers";

const CourseList = () => {

    const courses = useSelector(prevState => prevState.courses)

    const { fetchCoursesHandler, searchTextUpdateHandler, searchFromCoursesHandler } = CourseListHandlers()

    useEffect(() => {
        fetchCoursesHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isNull = courses.displayedCourses === null
    const isEmpty = courses.displayedCourses?.length === 0
    const isLoading = courses.isLoading
    const isAlert = courses.alert.status

    return (
        <div className="m-5">
            <div className="p-10 border text-center text-lg font-semibold">Here are all the available courses</div>
            <div className="flex gap-5 mt-5 max-lg:flex-wrap">
                <form onSubmit={searchFromCoursesHandler} className="basis-3/12 max-lg:basis-full">
                    <div className="flex justify-center gap-3">
                        <input value={courses.searchText} onChange={searchTextUpdateHandler} type="text" placeholder="Search Course" className="input input-bordered w-full" />
                        <button className="btn btn-success">Search</button>
                    </div>
                </form>
                {!isLoading && !isNull && !isEmpty && !isAlert && <div className="basis-9/12 max-lg:basis-full">
                    <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5">
                        {
                            courses.displayedCourses.map((singleCourse, courseIndex) => {
                                return <SingleCourseCard courseData={singleCourse} key={courseIndex} />
                            })
                        }
                    </div>
                </div>}
                {
                    isLoading && !isEmpty && <div className="basis-9/12 max-lg:basis-full">
                        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-5">
                            <div className="skeleton h-96"></div>
                            <div className="skeleton h-96"></div>
                            <div className="skeleton h-96"></div>
                        </div>
                    </div>
                }
                {!isLoading && isEmpty && <div className="basis-9/12 max-lg:basis-full p-10 border text-center text-lg font-semibold">No Courses Found</div>}
                {!isLoading && isAlert && <div className="basis-9/12 max-lg:basis-full p-10 border text-center text-lg font-semibold">{courses.alert.message}</div>}
            </div>
        </div>
    )
}

export default CourseList