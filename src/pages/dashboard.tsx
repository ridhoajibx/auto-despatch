import React, { useEffect, useState } from "react";
import DefaultLayouts from "@/layouts";
import { Header } from "@/layouts/Header";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import { MdOutlineCalendarToday } from "react-icons/md";
import moment from "moment";
import DatePicker from "react-datepicker";
import GaugeChart from "@/components/chart/GaugeChart";
import HeaderTemperature from "@/components/Icons/HeaderTemperature";
import BarChart from "@/components/chart/BarChart";
import AreaChart from "@/components/chart/AreaChart";
import PieChart from "@/components/chart/PieChart";

const Dashboard: React.FC = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // date
  const now = new Date();
  const [start, setStart] = useState(
    new Date(now.getFullYear(), now.getMonth(), 1)
  );
  const [end, setEnd] = useState(
    new Date(now.getFullYear(), now.getMonth() + 1, 0)
  );
  const [dateRange, setDateRange] = useState<Date[]>([start, end]);
  const [startDate, endDate] = dateRange;

  const dateFormat = (value: any) => {
    if (!value) return "-";
    return moment(new Date(value)).format("DD-MM-YYYY");
  };
  // endd-date

  // console.log(mySet, "result-2");
  // const colorOne:string = "#04ebff";
  // const colorTwo:string = "#7bfc45";
  // const colorThree:string = "#eef604";
  // const colorFour:string = "#f69404";
  // const colorFive:string = "#f60413";

  return (
    <DefaultLayouts
      title="Dashboard"
      className="w-full bg-gray h-full text-gray-6 overflow-auto"
    >
      <Header />
      <div className="relative w-full h-full container mx-auto p-4">
        <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-4 items-center">
          <div className="w-full col-span-3 flex items-center gap-4 sm:gap-6">
            <h1 className="font-bold text-2xl sm:text-3xl">Dashboard</h1>
            <p className="text-lg text-gray-5">
              Monitor your business activity & assets performances
            </p>
          </div>
          <div className="ml-auto">
            <div className="w-full">
              <label className="w-full text-gray-5 overflow-hidden">
                <div className="relative z-999">
                  <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update: any) => {
                      setDateRange(update);
                    }}
                    isClearable={false}
                    placeholderText={"Select date"}
                    dropdownMode="select"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    className={`z-9999 text-sm lg:text-md w-full text-gray-5 rounded-lg border border-stroke bg-transparent py-3 pl-12 pr-6 outline-none focus:border-primary focus-visible:shadow-none focus:bg-white`}
                  />
                  <MdOutlineCalendarToday className="absolute left-4 top-2.5 h-6 w-6 text-gray-5" />
                </div>
              </label>
            </div>
          </div>
        </div>

        <Card className="w-full mb-6">
          <CardBody>
            <div className="w-full grid grid-cols-1 sm:grid-cols-4 items-center jusstify-between">
              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-gray-5">Total Amount</h3>
                <p className="font-bold text-2xl">
                  720.440 <span className="text-sm font-semibold">Litre</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-gray-5">Total Vehicle</h3>
                <p className="font-bold text-2xl">
                  450 <span className="text-sm font-semibold">Unit</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-gray-5">Avg. Filling per vehicle</h3>
                <p className="font-bold text-2xl">
                  120 <span className="text-sm font-semibold">litre/unit</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-gray-5">Avg Tipe Spent</h3>
                <p className="font-bold text-2xl">
                  15 <span className="text-sm font-semibold">min/unit</span>
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-6">
          <ScrollShadow
            hideScrollBar
            className="w-full sm:col-span-3 max-h-[650px] rounded-xl"
          >
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-col gap-3 sm:gap-6">
                {/* monthly filling */}
                <Card className="">
                  <CardHeader className="w-full">
                    <div className="w-full font-bold">
                      Monthly Filling Activity
                    </div>
                  </CardHeader>

                  <CardBody className="p-0">
                    <div className="w-full flex flex-col p-4 mb-3">
                      <BarChart />
                    </div>
                  </CardBody>
                </Card>

                {/* monthly temperature */}
                <Card className="">
                  <CardHeader className="w-full">
                    <div className="w-full font-bold">
                      Monthly Temperature Activity
                    </div>
                  </CardHeader>

                  <CardBody className="p-0">
                    <div className="w-full flex flex-col p-4 mb-3">
                      <AreaChart />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </ScrollShadow>

          <div className="w-full flex flex-col gap-4 sm:gap-6">
            <Card className="w-full">
              <h3 className="text-sm lg:text-lg font-bold -mb-10 p-4">
                Avg Temperature
              </h3>
              <CardBody className="relative p-0">
                <HeaderTemperature className="w-full h-full absolute inset-y-3 sm:-inset-y-5 lg:inset-y-2 inset-x-0 p-4 sm:p-2 " />
                <GaugeChart
                  value={80}
                  minValue={0}
                  maxValue={100}
                  className="mx-auto p-6"
                />
                <div className="w-full absolute inset-0 flex flex-col items-center justify-center -mt-10 mb-3">
                  <h3 className="text-danger font-bold text-lg">80˚C</h3>
                  <p className="text-sm">Hotter than before</p>
                </div>
                <Divider className="" />

                <div className="w-full mt-5 p-4 text-gray-5">
                  <div className="w-full grid grid-cols-3 gap-2 items-center justify-center mb-3">
                    <div className="w-full flex items-center justify-center gap-1 text-xs">
                      <div
                        className={`border-2 border-white w-5 h-5 rounded-md bg-[#04ebff]`}
                      ></div>
                      <div>Cool</div>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1 text-xs">
                      <div
                        className={`border-2 border-white w-5 h-5 rounded-md bg-[#7bfc45]`}
                      ></div>
                      <div>Normals</div>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1 text-xs">
                      <div
                        className={`border-2 border-white w-5 h-5 rounded-md bg-[#eef604]`}
                      ></div>
                      <div>Medium</div>
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-2 items-center justify-center">
                    <div className="w-full flex items-center justify-center gap-1 text-xs">
                      <div
                        className={`border-2 border-white w-5 h-5 rounded-md bg-[#f69404]`}
                      ></div>
                      <div>Warm</div>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1 text-xs">
                      <div
                        className={`border-2 border-white w-5 h-5 rounded-md bg-[#f60413]`}
                      ></div>
                      <div>Hot</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <h3 className="z-0 text-sm lg:text-lg font-bold -mb-10">
                  Avg Temperature
                </h3>
              </CardHeader>
              <CardBody className="relative mt-5">
                <PieChart className="" />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default Dashboard;
