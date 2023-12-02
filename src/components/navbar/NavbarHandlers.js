import { useDispatch } from "react-redux"
import { dashboardActions } from "../dashboard/redux/dashboard-slice"

const NavbarHandlers = () => {

    const dispatch = useDispatch()

    const changeUserHandler = (e) => {
        dispatch(dashboardActions.selectUser(e.target.value))
    }

    return { changeUserHandler }
}

export default NavbarHandlers