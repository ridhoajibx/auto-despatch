import { BrowserRouter } from "react-router-dom";
// import { useAppSelector } from "@/redux/Hooks";
// import { selectAuth } from "@/redux/features/AuthenticationReducers";
import Routes from "@/routes/Routes";

const App: React.FC = () => {
  // const { isLogin } = useAppSelector(selectAuth);

  return (
      <BrowserRouter>
        <Routes isLogin={true} />
      </BrowserRouter>
  );
};

export default App;
