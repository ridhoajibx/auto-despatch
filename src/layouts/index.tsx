import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { getAuthMe, selectAuth } from "@/redux/features/AuthenticationReducers";
import { Spinner } from "@nextui-org/react";

type Props = {
  token?: any;
  children: any;
  className?: string,
  title?: string
};

function DefaultLayouts(props: Props) {
  const { children, className, title } = props;
  document.title = `${title} || Auto Despatch`

  const token = Cookies.get("accessToken");

  const navigate = useNavigate()

  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector(selectAuth);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if(token) {
      dispatch(getAuthMe({ token, callback: () => {
        navigate("/login")
      } }))
    }
  }, [token]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <div
        id="preloader"
        className="fixed left-0 top-0 z-999999 h-screen flex items-center justify-center w-screen bg-white"
      >
        <Spinner label="Loading..." color="primary" />
      </div>
    );

  return (
    <div className="">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          {/* <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'> */}
          <main className={`mx-auto w-full h-full ${className}`}>{children}</main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
}

export default DefaultLayouts;
// export default withAuthentication(DefaultLayouts)
