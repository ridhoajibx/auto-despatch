// Routes.tsx
import {
  Routes as Router,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/auth/login";
import Dashboard from "../pages/dashboard";
import Monitoring from "@/pages/monitoring";
import Users from "@/pages/users";

type RoutesProps = {
  isLogin: boolean
};

// const isLogin = true

const PrivateRoute = ({ isLogin } : RoutesProps) => {
  if (!isLogin) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};

const PublicRoute = ({ isLogin }: RoutesProps) => {
  if (isLogin) return <Navigate to={"/"} replace />;
  return <Outlet />;
};

const Routes = ({isLogin}: RoutesProps) => {
  return (
    <Router>
      <Route element={<PublicRoute isLogin={isLogin} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<PrivateRoute isLogin={isLogin} />}>
        <Route path="/" element={<Monitoring />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-log" element={<Datalog />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Router>
  );
};

export default Routes;
