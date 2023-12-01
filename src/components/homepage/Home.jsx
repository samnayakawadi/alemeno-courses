const Home = () => {
    return (
        <div className="m-5">
            <div className="p-10 border text-center text-lg font-semibold">Features of Application</div>
            <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="p-10 border text-center flex flex-col gap-5">
                    <h1 className="text-lg font-semibold">Course List</h1>
                    <p>Learner can directly see the courses available for him/her to enroll. There is a View Course Details button that opens a new page with course details</p>
                </div>
                <div className="p-10 border text-center flex flex-col gap-5">
                    <h1 className="text-lg font-semibold">Course Details</h1>
                    <p>This page displays all the neccessory details like course duration, location, syllabus, etc...</p>
                </div>
                <div className="p-10 border text-center flex flex-col gap-5">
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                    <p>Here is the list of all the courses that the user has enrolled. Each course box shows the progress & due date</p>
                </div>
            </div>
            <div className="text-center mt-5">
                Designed & Developed by <a href="https://samnayakawadi.tech" target="_blank" rel="noreferrer" className="text-red-500">samnayakawadi</a>
            </div>
            <div className="text-center mt-5">
                Get Code Here <a href="https://github.com/samnayakawadi/alemeno-courses" target="_blank" rel="noreferrer" className="text-red-500">Github</a>
            </div>
        </div>
    )
}

export default Home