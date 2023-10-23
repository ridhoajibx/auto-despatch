import { BrowserRouter, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";

import Routes from "@/routes/Routes";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getAuthMe, selectAuth } from "./redux/features/AuthenticationReducers";
import { Spinner } from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";

const App: React.FC = () => {
  const API_URL = import.meta.env.VITE_APP_API_URL;
  axios.defaults.baseURL = API_URL;

  const token = Cookies.get("accessToken");
  const { isLogin } = useAppSelector(selectAuth);

  return (
    <BrowserRouter>
      <Routes isLogin={isLogin} />
    </BrowserRouter>
  );
};

export default App;
