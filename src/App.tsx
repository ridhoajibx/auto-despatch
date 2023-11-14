import { BrowserRouter, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";

import Routes from "@/routes/Routes";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getAuthMe, selectAuth } from "./redux/features/AuthenticationReducers";
import { Spinner } from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";
import { io } from "socket.io-client";

const App: React.FC = () => {
  const API_URL = import.meta.env.VITE_APP_API_URL;
  axios.defaults.baseURL = API_URL;

  const token = Cookies.get("accessToken");
  const { isLogin } = useAppSelector(selectAuth);

  const [notification, setNotification] = useState<string>('');
  const socket = io(API_URL);

  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    function onFooEvent(value) {
      console.log(value, "trigger")
      setFooEvents(fooEvents.concat(value));
    }

    socket.on('updateFilling', onFooEvent);

    return () => {
      socket.off('updateFilling', onFooEvent);
    };
  }, [fooEvents]);

  
  useEffect(() => {
    socket.emit('getFillingStatus', 'Pesan notifikasi dari klien');
  }, [])

  // console.log(fooEvents.map(e => e?.slotPosition), 'notification')

  return (
    <BrowserRouter>
      <Routes isLogin={isLogin} />
    </BrowserRouter>
  );
};

export default App;
