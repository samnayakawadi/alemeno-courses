import { useSelector } from "react-redux";
import DashSingleCourseCard from "./DashSingleCourseCard";

const Dashboard = () => {

    const dashboardState = useSelector(prevState => prevState.dashboard)

    const enrolledCourses = dashboardState.users[dashboardState.currentUser].enrolledCourses

    const isEmpty = enrolledCourses.length === 0

    return (
        <div className="m-5">
            <div className="p-10 border text-center text-lg font-semibold">Here are all the enrolled courses</div>
            <div className="flex max-lg:flex-wrap gap-5 mt-5">
                {/* <form onSubmit={searchFromCoursesHandler} className="basis-3/12 flex justify-center gap-3">
                    <input value={courses.searchText} onChange={searchTextUpdateHandler} type="text" placeholder="Search Course" className="input input-bordered w-full" />
                    <button className="btn btn-success">Search</button>
                </form> */}
                {!isEmpty && <div className="basis-full grid grid-cols-4 max-lg:grid-cols-1 gap-5">
                    {
                        enrolledCourses.map((singleCourse, courseIndex) => {
                            return <DashSingleCourseCard courseData={singleCourse} key={courseIndex} />
                        })
                    }
                </div>}
                {
                    isEmpty && <div className="basis-full p-10 border text-center text-lg font-semibold">No Courses Found</div>
                }
            </div>
        </div>
    )
}

export default Dashboard