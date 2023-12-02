import { useDispatch } from "react-redux"
import { dashboardActions } from "./redux/dashboard-slice"

const DashboardHandlers = () => {

    const dispatch = useDispatch()

    const markCourseAsCompleteHandler = (id) => {
        dispatch(dashboardActions.markCourseAsComplete(id))
    }

    return { markCourseAsCompleteHandler }
}

export default DashboardHandlers