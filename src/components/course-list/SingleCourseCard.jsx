import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const SingleCourseCard = ({ courseData }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <div className="badge badge-primary badge-md absolute top-2 left-2">{courseData.likes} Likes</div>
                <img src={courseData.thumbnail} alt="Thumbnail" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{courseData.name}</h2>
                <p>{courseData.description}</p>
                <p className="">by {courseData.instructor}</p>
                <div className="card-actions justify-end pt-3">
                    {/* <Link to="/course-details" className="btn btn-primary btn-block"></Link> */}
                    {/* <button className="btn btn-outline btn-primary btn-block">Add To Liked Courses</button> */}
                    <Link to={`/course-details/${courseData.id}`} className="btn btn-outline btn-primary btn-block">View Course Details</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCourseCard