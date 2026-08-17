import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardPage from "../pages/Dashboard/DashboardPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import UploadResumePage from "../pages/UploadResume/UploadResumePage";
import ResumeAnalysisPage from "../pages/ResumeAnalysis/ResumeAnalysisPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Dashboard Layout */}
                <Route element={<DashboardLayout />}>

                    <Route
                        path="/dashboard"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="/profile"
                        element={<ProfilePage />}
                    />

                    <Route
                        path="/upload"
                        element={<UploadResumePage />}
                    />

                    <Route
                        path="/analysis"
                        element={<ResumeAnalysisPage />}
                    />
                    

                </Route>

            </Routes>
        </BrowserRouter>
    );
}