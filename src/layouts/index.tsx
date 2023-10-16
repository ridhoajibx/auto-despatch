import { ReactNode } from "react";
import { Header } from "./Header";
import CustomHead from "./CustomHead";

type Props = {
  token?: any;
  children: any;
  className?: string,
  title?: string
};

function DefaultLayouts(props: Props) {
  const { token, children, className, title } = props;

  document.title = `${title} || Auto Despatch`

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
