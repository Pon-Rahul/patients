import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../DashBoard/DashBoard";
import DefaultLayout from "./DefaultLayout";
import Main from "../MainScreen/MainScreen";
import Appointments from "../Appoinments/Appoinments";
import Patients from "../Patients/Patients";
import Analytics from "../Analytics/Analytics";
import Profile from "../Profile/Profile";
import FullScreen from "../FullScreen/FullScreen";
import Settings from "../Settings/Settings";

const Root = () => {
    return(
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DefaultLayout component={Dashboard} layout={Main} />} />
        <Route path="/appointments" element={<DefaultLayout component={Appointments} layout={Main} />} />
        <Route path="/patients" element={<DefaultLayout component={Patients} layout={Main} />} />
        <Route path="/analytics" element={<DefaultLayout component={Analytics} layout={Main} />} />
        <Route path="/settings" element={<DefaultLayout component={Settings} layout={Main} />} />
        <Route path="/profile" element={<DefaultLayout component={Profile} layout={FullScreen}/>} />
        </Routes>
    )
}

export default Root;