import SingleCourseCard from "./SingleCourseCard"

const CourseList = () => {

    const courses = [
        {
            courseName: "React Native",
            courseDescription: "Build cross-platform mobile applications using React Native framework.",
            courseInstructor: "Samir Nayakawadi"
          },
        {
            courseName: "Machine Learning",
            courseDescription: "Explore the world of machine learning with hands-on projects.",
            courseInstructor: "Dr. Amanda Rodriguez"
        },
        {
            courseName: "Web Development Bootcamp",
            courseDescription: "Learn full-stack web development from scratch with industry experts.",
            courseInstructor: "John Smith"
        },
        {
            courseName: "Data Science Fundamentals",
            courseDescription: "Gain a solid understanding of data science principles and techniques.",
            courseInstructor: "Dr. Emily Davis"
        },
        {
            courseName: "Mobile App Design",
            courseDescription: "Design intuitive and user-friendly mobile applications.",
            courseInstructor: "Lisa Johnson"
        },
        {
            courseName: "JavaScript Mastery",
            courseDescription: "Master JavaScript programming with real-world projects and challenges.",
            courseInstructor: "Chris Anderson"
        },
        {
            courseName: "Cybersecurity Essentials",
            courseDescription: "Learn essential cybersecurity skills to protect digital assets.",
            courseInstructor: "Alex Ramirez"
        },
        {
            courseName: "Artificial Intelligence Basics",
            courseDescription: "Introduction to the fundamentals of artificial intelligence and its applications.",
            courseInstructor: "Dr. Michael Lee"
        },
        {
            courseName: "Cloud Computing Fundamentals",
            courseDescription: "Understand the basics of cloud computing and its role in modern IT.",
            courseInstructor: "Sarah Thompson"
        },
        {
            courseName: "UI/UX Design Principles",
            courseDescription: "Create visually appealing and user-centric interfaces with design principles.",
            courseInstructor: "Daniel Brown"
        },
    ];

    return (
        <div>
            <div className="flex justify-center gap-3 mt-3">
                <input type="text" placeholder="Search Course" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-success">Search</button>
            </div>
            <div className="grid grid-cols-4 gap-3 p-5 mt-5">
                {
                    courses.map((singleCourse, courseIndex) => {
                        return <SingleCourseCard courseData={singleCourse} key={courseIndex} />
                    })
                }
            </div>
        </div>
    )
}

export default CourseList