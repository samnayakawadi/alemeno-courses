/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const DashSingleCourseCard = ({ courseData }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseData.courseName}</h2>
                {/* <p>{courseData.courseDescription}</p> */}
                <p className="">Author :  {courseData.courseInstructor}</p>
                <p className="">Due By :  03/12/2023</p>
                <progress className="progress progress-secondary" value="70" max="100"></progress>
                <div className="card-actions justify-end pt-3">
                    {/* <Link to="/course-details" className="btn btn-primary btn-block"></Link> */}
                    <Link to="/course-details" className="btn btn-outline btn-primary btn-block">View Course Details</Link>
                    <button className="btn btn-outline btn-primary btn-block">Mark as Complete</button>
                </div>
            </div>
        </div>
    )
}

export default DashSingleCourseCard