import { Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import Register from "../pages/login/Register"
import PrivateRoute from "../pages/PrivateRoute"





const Router = () => {
    return (
        <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail/:pId" element={<PrivateRoute />}>
                <Route path="" element={<Detail />} />
            </Route>
        </Routes>

    )
}

export default Router