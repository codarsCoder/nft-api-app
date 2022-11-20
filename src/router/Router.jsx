import { Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/Home"
import User from "../pages/User"
import Detail from "../pages/Detail"
import Register from "../pages/login/Register"
import PrivateRoute from "../pages/PrivateRoute"
import NotFound from "../pages/NotFound"
import ForgotPassword from "../pages/login/ForgotPassword"
import AuthLayout from "../layouts/AuthLayout"





const Router = () => {
    return (
        <Routes>
            <Route element={<AuthLayout/>}>
                 <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
              <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail/:pId" element={<PrivateRoute />}>
                <Route path="" element={<Detail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="*/*" element={<NotFound />} />
        </Routes>

    )
}

export default Router