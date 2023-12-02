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

    return (
        <div className="m-5">
            <div className="p-10 border text-center text-lg font-semibold">Here are all the available courses</div>
            <div className="flex gap-5 mt-5">
                <form onSubmit={searchFromCoursesHandler} className="basis-3/12 flex justify-center gap-3">
                    <input value={courses.searchText} onChange={searchTextUpdateHandler} type="text" placeholder="Search Course" className="input input-bordered w-full" />
                    <button className="btn btn-success">Search</button>
                </form>
                {!courses.isLoading && courses.displayedCourses.length !== 0 && <div className="basis-9/12 grid grid-cols-3 gap-5">
                    {
                        courses.displayedCourses.map((singleCourse, courseIndex) => {
                            return <SingleCourseCard courseData={singleCourse} key={courseIndex} />
                        })
                    }
                </div>}
                {
                    courses.isLoading && courses.displayedCourses.length !== 0 && <div className="basis-9/12 p-10 border text-center text-lg font-semibold">Loading...</div>
                }
                {
                    !courses.isLoading && courses.displayedCourses.length === 0 && <div className="basis-9/12 p-10 border text-center text-lg font-semibold">No Course Found</div>
                }
            </div>
        </div>
    )
}

export default CourseList