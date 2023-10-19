import { BrowserRouter } from "react-router-dom";
// import { useAppSelector } from "@/redux/Hooks";
// import { selectAuth } from "@/redux/features/AuthenticationReducers";
import Routes from "@/routes/Routes";

const App: React.FC = () => {
  // const { isLogin } = useAppSelector(selectAuth);
  // using env in vite
  const ENV = import.meta.env.VITE_APP_API_URL;
  console.log(ENV, 'cek-env')
  return (
      <BrowserRouter>
        <Routes isLogin={true} />
      </BrowserRouter>
  );
};

export default App;
