import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const SingleCourseCard = ({ courseData }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseData.courseName}</h2>
                <p>{courseData.courseDescription}</p>
                <p className="">by {courseData.courseInstructor}</p>
                <div className="card-actions justify-end pt-3">
                    <Link to="/course-details" className="btn btn-primary btn-block">View Course Details</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCourseCard