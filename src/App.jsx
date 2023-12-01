import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Home";
import CourseList from "./components/course-list/CourseList";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}