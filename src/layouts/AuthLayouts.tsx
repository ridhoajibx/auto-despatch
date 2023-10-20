import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { getAuthMe, selectAuth } from "@/redux/features/AuthenticationReducers";

type Props = {
  token?: any;
  children: any;
  className?: string,
  title?: string
};

function AuthLayouts(props: Props) {
  const { children, className, title } = props;
  document.title = `${title} || Auto Despatch`;

  const token = Cookies.get("accessToken");
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

export default AuthLayouts;
