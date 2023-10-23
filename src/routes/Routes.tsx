// Routes.tsx
import {
  Routes as Router,
  Navigate,
  Outlet,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Monitoring from "@/pages/monitoring";
import Users from "@/pages/users";
import Datalog from "@/pages/datalog";
import { LoginPage } from "@/pages/auth/LoginPage";

type RoutesProps = {
  isLogin: boolean;
  redirectPath?: string
};

// const isLogin = true

const PrivateRoute = ({ isLogin } : RoutesProps) => {
  let location = useLocation();
  if (!isLogin) return <Navigate to={"/login"} state={{ from: location }} replace />;
  return <Outlet />;
};

const PublicRoute = ({ isLogin }: RoutesProps) => {
  let location = useLocation();
  let locationBefore = location?.state?.from?.pathname || "/"
  if (isLogin) return <Navigate to={locationBefore} replace />;
  return <Outlet />;
};

const Routes = ({isLogin}: RoutesProps) => {
  return (
    <Router>
      <Route element={<PrivateRoute isLogin={isLogin} />}>
        <Route index path="/" element={<Monitoring />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data-log" element={<Datalog />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route element={<PublicRoute isLogin={isLogin} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Router>
  );
};

export default Routes;
