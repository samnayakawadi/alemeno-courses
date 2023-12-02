/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import DashboardHandlers from "./DashboardHandlers"

const DashSingleCourseCard = ({ courseData }) => {

    const { markCourseAsCompleteHandler } = DashboardHandlers()

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={courseData.thumbnail} alt="Thumbnail" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseData.name}</h2>
                {/* <p>{courseData.courseDescription}</p> */}
                <p className="">Author :  {courseData.instructor}</p>
                <p className="">Due By :  {courseData.duration} from enrollment</p>
                <progress className="progress progress-secondary" value={courseData.isComplete ? "100" : "5"} max="100"></progress>
                <div className="card-actions justify-end pt-3">
                    {/* <Link to="/course-details" className="btn btn-primary btn-block"></Link> */}
                    <Link to={`/course-details/${courseData.id}`} className="btn btn-outline btn-primary btn-block">View Course Details</Link>
                    <button className="btn btn-outline btn-primary btn-block" onClick={() => { markCourseAsCompleteHandler(courseData.id) }} disabled={courseData.isComplete}>{courseData.isComplete ? "Already Marked Complete" : "Mark as Complete"}</button>
                </div>
            </div>
        </div>
    )
}

export default DashSingleCourseCard