import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/dashboard/Home";
import MyTrips from "../pages/dashboard/MyTrips";
import Tripsdetails from "../pages/dashboard/Tripsdetails";
import BudgetPlanner from "../pages/dashboard/BudgetPlanner";
import ExpenseTracker from "../pages/dashboard/ExpenseTracker";
import Ai_Assitant from "../pages/dashboard/Ai_Assitant";
import Profile from "../pages/dashboard/Profile";
import Faq from "../pages/dashboard/Faq";
import Dashboard_layout from "../layouts/Dashboard_layout";
import AcceptInvitePage from "../pages/dashboard/AcceptInvitePage";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<Dashboard_layout />}>
      <Route path="" element={<Home />} />
      <Route path="/my-trips" element={<MyTrips />} />
      <Route path="/trip-details/:id" element={<Tripsdetails />} />
      <Route path="/budget-planner" element={<BudgetPlanner />} />
      <Route path="/expense-tracker" element={<ExpenseTracker />} />
      <Route path="/ai-assistant" element={<Ai_Assitant />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/accept-invite" element={<AcceptInvitePage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
