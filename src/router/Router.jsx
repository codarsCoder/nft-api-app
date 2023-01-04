import { Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import Home from "../pages/Home"
import User from "../pages/User"
import Pokemon from "../pages/Pokemon"
import Register from "../pages/login/Register"
import PrivateRoute from "../pages/PrivateRoute"
import NotFound from "../pages/NotFound"
import ForgotPassword from "../pages/login/ForgotPassword"
import AuthLayout from "../layouts/AuthLayout"
import Api from "../pages/Api"





const Router = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/api" element={<Api />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
                <Route path="/pokemon/:pName" element={<Pokemon />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="*/*" element={<NotFound />} />
        </Routes>

    )
}

export default Router