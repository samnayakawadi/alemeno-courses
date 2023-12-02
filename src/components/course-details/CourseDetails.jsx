import { useEffect, useState } from "react"
import { useParams } from "react-router"
import CourseDetailsHandlers from "./CourseDetailsHandlers"
import { useSelector } from "react-redux"

const CourseDetails = () => {

    // To resolve the scroll issue
    window.scrollTo(0, 0);

    const { id } = useParams()

    const dashboardState = useSelector(prevState => prevState.dashboard)

    const { fetchCourseDetailsHandler, enrollUserToCourseHandler, checkIfUserIsEnrolledOrNotHandler } = CourseDetailsHandlers()

    const course = useSelector(prevState => prevState.courseDetails)

    const [isUserEnrolled, setIsUserEnrolled] = useState(null)

    useEffect(() => {
        fetchCourseDetailsHandler(id)
        setIsUserEnrolled(checkIfUserIsEnrolledOrNotHandler(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dashboardState])

    const isEnrollmentClosed = course.enrollmentStatus === "Closed"

    return (
        <div>
            <div className="flex max-lg:flex-wrap max-lg:flex-col-reverse flex-row justify-center items-center my-10 max-lg:my-5 mx-20 max-lg:mx-5 gap-10 p-10 border">
                <div className="basis-6/12 max-lg:basis-full flex flex-col gap-5">
                    <h1 className="text-xl font-semibold">{course.name}</h1>
                    <h3>by {course.instructor}</h3>
                    <p>{course.description}</p>
                    <button className="btn btn-outline btn-primary w-52 max-lg:w-full" onClick={() => { if (course.enrollmentStatus === "Open") { enrollUserToCourseHandler(id, "samnayakawadi@gmail.com"); setIsUserEnrolled(true) } }} disabled={(isUserEnrolled === true || isUserEnrolled === null || isEnrollmentClosed)}>{isEnrollmentClosed && "Enollment is Closed"}{!isEnrollmentClosed && isUserEnrolled && "Already Enrolled"}{!isEnrollmentClosed && isUserEnrolled === false && "Enroll Now"}{!isEnrollmentClosed && isUserEnrolled === null && "Loading"}</button>
                </div>
                <div className="basis-6/12 max-lg:basis-full">
                    <img src={course.thumbnail} />
                </div>
            </div>

            <div className="mx-20 my-10 max-lg:mx-5 max-lg:my-5">
                {/* <h1 className="text-lg">What{"'"} included</h1> */}
                <div className="flex flex-wrap gap-5 mt-5">
                    <div className="basis-4/12 max-lg:basis-full flex flex-col items-center p-10 gap-3 border rounded-lg">
                        <svg className="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9809 9.25283C18.2198 7.32031 16.6794 5.77999 14.7469 5.01897C14.5229 5.27358 14.3413 5.56647 14.2133 5.88656C16.0226 6.54172 17.4581 7.97718 18.1133 9.7864C18.4334 9.6584 18.7263 9.47685 18.9809 9.25283ZM12.2276 5.50391C12.1521 5.50131 12.0762 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 11.9237 18.4987 11.8478 18.4961 11.7721C18.8387 11.6648 19.1655 11.5216 19.472 11.347C19.4905 11.5622 19.5 11.78 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C12.2199 4.5 12.4376 4.50946 12.6527 4.52801C12.4781 4.83451 12.3349 5.16128 12.2276 5.50391Z" fill="#222222"></path> <circle cx="17" cy="7" r="3" fill="#222222"></circle> </g></svg>
                        <p className="text-center">Enrollment {course.enrollmentStatus}</p>
                    </div>
                    <div className="basis-4/12 max-lg:basis-full flex flex-col items-center p-10 gap-3 border rounded-lg">
                        <svg className="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2C14.75 2.41421 14.4142 2.75 14 2.75H10C9.58579 2.75 9.25 2.41421 9.25 2ZM12 4.75C7.44365 4.75 3.75 8.44365 3.75 13C3.75 17.5564 7.44365 21.25 12 21.25C16.5563 21.25 20.25 17.5564 20.25 13C20.25 8.44365 16.5563 4.75 12 4.75ZM2.25 13C2.25 7.61522 6.61522 3.25 12 3.25C17.3848 3.25 21.75 7.61522 21.75 13C21.75 18.3848 17.3848 22.75 12 22.75C6.61522 22.75 2.25 18.3848 2.25 13Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5587 8.23877H14.5152C14.3009 8.23876 14.1041 8.23875 13.9387 8.25003C13.7611 8.26215 13.5658 8.28976 13.3673 8.37198C12.9385 8.5496 12.5978 8.89028 12.4202 9.31907C12.3379 9.51758 12.3103 9.71292 12.2982 9.89056C12.2869 10.0559 12.2869 10.2527 12.287 10.467V15.5105C12.2869 15.7248 12.2869 15.9217 12.2982 16.087C12.3103 16.2646 12.3379 16.46 12.4202 16.6585C12.5978 17.0873 12.9385 17.4279 13.3673 17.6056C13.5658 17.6878 13.7611 17.7154 13.9387 17.7275C14.1041 17.7388 14.3009 17.7388 14.5152 17.7388H14.5587C14.773 17.7388 14.9698 17.7388 15.1352 17.7275C15.3128 17.7154 15.5082 17.6878 15.7067 17.6056C16.1355 17.4279 16.4761 17.0873 16.6537 16.6585C16.736 16.46 16.7636 16.2646 16.7757 16.087C16.787 15.9217 16.787 15.7248 16.787 15.5105V10.467C16.787 10.2527 16.787 10.0559 16.7757 9.89056C16.7636 9.71292 16.736 9.51758 16.6537 9.31907C16.4761 8.89028 16.1355 8.5496 15.7067 8.37198C15.5082 8.28976 15.3128 8.26215 15.1352 8.25003C14.9698 8.23875 14.773 8.23876 14.5587 8.23877ZM13.9383 9.75907C13.8794 9.78435 13.8325 9.83125 13.8073 9.89008C13.8054 9.89743 13.7993 9.92584 13.7947 9.99267C13.7874 10.1007 13.787 10.2455 13.787 10.4888V15.4888C13.787 15.732 13.7874 15.8769 13.7947 15.9849C13.7993 16.0517 13.8054 16.0801 13.8073 16.0875C13.8325 16.1463 13.8794 16.1932 13.9383 16.2185C13.9456 16.2203 13.974 16.2264 14.0409 16.231C14.1489 16.2384 14.2937 16.2388 14.537 16.2388C14.7802 16.2388 14.9251 16.2384 15.0331 16.231C15.0999 16.2264 15.1283 16.2203 15.1357 16.2185C15.1945 16.1932 15.2414 16.1463 15.2667 16.0875C15.2685 16.0801 15.2746 16.0517 15.2792 15.9849C15.2866 15.8769 15.287 15.732 15.287 15.4888V10.4888C15.287 10.2455 15.2866 10.1007 15.2792 9.99267C15.2746 9.92583 15.2685 9.89743 15.2667 9.89008C15.2414 9.83125 15.1945 9.78435 15.1357 9.75908C15.1283 9.75721 15.0999 9.75111 15.0331 9.74655C14.9251 9.73918 14.7802 9.73877 14.537 9.73877C14.2937 9.73877 14.1489 9.73918 14.0409 9.74655C13.974 9.75111 13.9456 9.75721 13.9383 9.75907Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0982 8.26112C9.93289 8.24984 9.73604 8.24985 9.52176 8.24987H9.47824C9.26397 8.24985 9.06712 8.24984 8.90179 8.26112C8.72415 8.27324 8.52881 8.30086 8.33031 8.38308C7.90151 8.56069 7.56083 8.90137 7.38321 9.33017C7.30099 9.52867 7.27338 9.72401 7.26126 9.90166C7.24998 10.067 7.24999 10.2638 7.25 10.4781V15.5216C7.24999 15.7359 7.24998 15.9328 7.26126 16.0981C7.27338 16.2757 7.30099 16.4711 7.38321 16.6696C7.56083 17.0984 7.90151 17.439 8.33031 17.6167C8.52881 17.6989 8.72415 17.7265 8.90179 17.7386C9.06712 17.7499 9.26396 17.7499 9.47824 17.7499H9.52176C9.73604 17.7499 9.93289 17.7499 10.0982 17.7386C10.2759 17.7265 10.4712 17.6989 10.6697 17.6167C11.0985 17.439 11.4392 17.0984 11.6168 16.6696C11.699 16.4711 11.7266 16.2757 11.7387 16.0981C11.75 15.9328 11.75 15.7359 11.75 15.5216V10.4781C11.75 10.2638 11.75 10.067 11.7387 9.90166C11.7266 9.72401 11.699 9.52867 11.6168 9.33017C11.4392 8.90137 11.0985 8.56069 10.6697 8.38308C10.4712 8.30086 10.2759 8.27324 10.0982 8.26112ZM8.90131 9.77017C8.84248 9.79545 8.79558 9.84234 8.77031 9.90118C8.76844 9.90853 8.76234 9.93693 8.75778 10.0038C8.75041 10.1118 8.75 10.2566 8.75 10.4999V15.4999C8.75 15.7431 8.75041 15.888 8.75778 15.996C8.76234 16.0628 8.76844 16.0912 8.77031 16.0986C8.79558 16.1574 8.84248 16.2043 8.90131 16.2296C8.90867 16.2314 8.93707 16.2375 9.0039 16.2421C9.11191 16.2495 9.25677 16.2499 9.5 16.2499C9.74323 16.2499 9.8881 16.2495 9.9961 16.2421C10.0629 16.2375 10.0913 16.2314 10.0987 16.2296C10.1575 16.2043 10.2044 16.1574 10.2297 16.0986C10.2316 16.0912 10.2377 16.0628 10.2422 15.996C10.2496 15.888 10.25 15.7431 10.25 15.4999V10.4999C10.25 10.2566 10.2496 10.1118 10.2422 10.0038C10.2377 9.93693 10.2316 9.90853 10.2297 9.90117C10.2044 9.84234 10.1575 9.79545 10.0987 9.77017C10.0913 9.7683 10.0629 9.7622 9.9961 9.75764C9.8881 9.75027 9.74323 9.74987 9.5 9.74987C9.25677 9.74987 9.11191 9.75027 9.0039 9.75764C8.93707 9.7622 8.90867 9.7683 8.90131 9.77017Z" fill="#1C274C"></path> </g></svg>
                        <p className="text-center">{course.duration}</p>
                    </div>
                    <div className="basis-4/12 max-lg:basis-full flex flex-col items-center p-10 gap-3 border rounded-lg">
                        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-opacity=".9" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g></svg>
                        <p className="text-center">{course.schedule}</p>
                    </div>
                    <div className="basis-4/12 max-lg:basis-full flex flex-col items-center p-10 gap-3 border rounded-lg">
                        <svg className="w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <p className="text-center">{course.location}</p>
                    </div>
                </div>
            </div>

            <div className="mx-20 my-10 max-lg:mx-5 max-lg:my-5">
                <h1 className="text-lg">Pre-requisites</h1>
                <div className="grid grid-cols-3 max-lg:grid-cols-1 mt-5 gap-5">
                    <p className="text-center p-10 border rounded-lg">Java Script</p>
                    {course.prerequisites.map((singleItem, itemIndex) => {
                        return (<p key={itemIndex} className="text-center p-10 border rounded-lg">{singleItem}</p>)
                    })}
                </div>
            </div>

            <div className="mx-20 my-10 max-lg:mx-5 max-lg:my-5">
                <h1 className="text-lg">Syllabus</h1>

                <div className="flex flex-col gap-5 mt-5">
                    {course.syllabus.map((singleItem, itemIndex) => {
                        return (
                            <div key={itemIndex} className="collapse collapse-plus border">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    Week {singleItem.week} : {singleItem.topic}
                                </div>
                                <div className="collapse-content">
                                    <p>{singleItem.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CourseDetails