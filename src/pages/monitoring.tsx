import DefaultLayouts from "@/layouts";
import { Header } from "@/layouts/Header";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import { MdArrowDropDown, MdArrowForward, MdTimelapse } from "react-icons/md";
import FillTanki from "@/components/Icons/FillTanki";
import { FC } from "react";

const Monitoring: FC = () => {
  return (
    <DefaultLayouts
      title="Live Monitoring"
      className="w-full bg-gray h-full text-gray-6 overflow-auto"
    >
      <Header />
      <div className="relative w-full h-full container mx-auto p-4">
        <div className="w-full py-4">
          <h1 className="font-bold text-2xl sm:text-3xl">
            Real-time Monitoring
          </h1>
        </div>

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-6">
          <div className="w-full">
            <Card className="max-w-[400px]">
              <CardBody className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-1 text-sm">
                  <h3 className="text-gray-5">Oil Filled</h3>
                  <div className="text-2xl font-bold">450 L</div>
                  <div className="flex items-center gap-1 text-xs text-danger">
                    <span>
                      <MdArrowDropDown className="w-4 h-4" />{" "}
                    </span>
                    <p>
                      <span>500</span> From yesterday
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-1 text-sm">
                  <h3 className="text-gray-5">Total Vehicle</h3>
                  <div className="text-2xl font-bold">15 Unit</div>
                  <div className="flex items-center gap-1 text-xs text-danger">
                    <span>
                      <MdArrowDropDown className="w-4 h-4" />{" "}
                    </span>
                    <p>
                      <span>32</span> From yesterday
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-1 text-sm">
                  <h3 className="text-gray-5">Ave Temperature</h3>
                  <div className="text-2xl font-bold">50 ˚C</div>
                  <div className="flex items-center gap-1 text-xs text-success">
                    <span>
                      <MdArrowDropDown className="w-4 h-4" />{" "}
                    </span>
                    <p>
                      <span>2˚</span> slightly cooler than yesteday
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-1 text-sm">
                  <h3 className="text-gray-5">Ave Time Spent</h3>
                  <div className="text-2xl font-bold">12 min 42 sec</div>
                  <div className="flex items-center gap-1 text-xs text-success">
                    <span>
                      <MdArrowDropDown className="w-4 h-4" />{" "}
                    </span>
                    <p>
                      <span className="font-semibold">1 Min</span> faster than
                      yesterday
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <ScrollShadow
            hideScrollBar
            className="bg-[#DAE3EB] rounded-lg w-full sm:col-span-4 max-h-[650px]"
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
              <div className="w-full flex flex-col gap-3 sm:gap-6">
                <Card className="max-w-[500px]">
                  <CardHeader className="w-full">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                      <h3 className="justify-start">Slot_1</h3>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="w-5 h-5 rounded-full bg-green-500 border border-green-500"></span>
                        <p>Device Online</p>
                      </div>
                    </div>
                  </CardHeader>

                  <Divider />

                  <CardBody>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center">
                      <div className="w-full">
                        <h3 className="font-bold text-lg">B 2234 PA</h3>
                      </div>

                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-sm font-bold">View History</span>
                        <Button
                          isIconOnly
                          color="primary"
                          variant="ghost"
                          aria-label="View History"
                          className="p-1"
                        >
                          <MdArrowForward className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="flex items-center gap-2 text-gray-5 text-sm">
                        Cyrogenic
                        <span>(- 130C)</span>
                        Tank
                      </p>
                    </div>
                  </CardBody>
                </Card>

                {/* full tanki */}
                <Card className="max-w-[500px]">
                  <CardHeader className="w-full p-0">
                    <div className="w-full relative">
                      <FillTanki isFill className="z-999 w-96 mx-auto xl:mx-10 text-black" />
                    </div>
                  </CardHeader>

                  <Divider />

                  <CardBody className="p-0">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center jusstify-between p-4 mb-3">
                      <div className="flex flex-col gap-2 text-sm">
                        <h3 className="text-gray-5">Check in</h3>
                        <p className="font-bolds">07:55:00</p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm">
                        <h3 className="text-gray-5">Check out</h3>
                        <p className="font-bolds">07:55:00</p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm">
                        <h3 className="text-gray-5">Total Duration</h3>
                        <p className="font-bold flex items-center gap-1">
                          <span>
                            <MdTimelapse className="w-4 h-4 font-normal text-gray-5" />
                          </span>
                          <span>06 Minutes</span>
                        </p>
                      </div>
                    </div>

                    <Divider />

                    <div className="w-full p-4 flex flex-col gap-2">
                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Driver Names</p>
                        <p className="text-sm font-bold">Santo Hartono</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Vehicle Type</p>
                        <p className="text-sm font-bold">
                          Cyrogenic (-80C) Tank
                        </p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Plat No.</p>
                        <p className="text-sm font-bold">B 3221 AHY</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Capacity</p>
                        <p className="text-sm font-bold">200 L</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">
                          Weightbridge Amount
                        </p>
                        <p className="text-sm font-bold">185 Kg</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="w-full flex flex-col gap-3 sm:gap-6">
                <Card className="max-w-[500px]">
                  <CardHeader className="w-full">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                      <h3 className="justify-start">Slot_1</h3>
                      <div className="flex items-center gap-2 justify-end">
                        <span className="w-5 h-5 rounded-full bg-green-500 border border-green-500"></span>
                        <p>Device Online</p>
                      </div>
                    </div>
                  </CardHeader>

                  <Divider />

                  <CardBody>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center">
                      <div className="w-full">
                        <p className="text-xl text-gray-5 font-bold">Empty</p>
                      </div>

                      <div className="flex items-center gap-2 justify-end">
                        <span className="text-sm font-bold">View History</span>
                        <Button
                          isIconOnly
                          color="primary"
                          variant="ghost"
                          aria-label="View History"
                          className="p-1"
                        >
                          <MdArrowForward className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* empty tanki */}
                <Card className="max-w-[500px]">
                  <CardHeader className="w-full p-0 flex-col gap-2">
                    <div className="w-full p-4 flex flex-col gap-2 text-sm">
                      <h3 className="text-gray-5">-- --</h3>
                      <p className="font-bolds">--:--:--</p>
                    </div>
                    <Divider />
                    <div className="w-full relative">
                      <FillTanki
                        isFill={false}
                        className="w-96 xl:mx-10 text-black"
                      />
                      {/* <Tank /> */}
                    </div>
                  </CardHeader>

                  <Divider />

                  <CardBody className="p-0">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 items-center jusstify-between p-4 mb-3">
                      <div className="flex flex-col gap-2 text-sm">
                        <h3 className="text-gray-5">Check in</h3>
                        <p className="font-bolds">00:00:00</p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm">
                        <h3 className="text-gray-5">Check out</h3>
                        <p className="font-bolds">00:00:00</p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm">
                        <h3 className="text-gray-5">Total Duration</h3>
                        <p className="font-bold flex items-center gap-1">
                          <span>
                            <MdTimelapse className="w-4 h-4 font-normal text-gray-5" />
                          </span>
                          <span>0 Minutes</span>
                        </p>
                      </div>
                    </div>

                    <Divider />

                    <div className="w-full p-4 flex flex-col gap-2">
                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Driver Names</p>
                        <p className="text-sm font-bold">-</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Vehicle Type</p>
                        <p className="text-sm font-bold">-</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Plat No.</p>
                        <p className="text-sm font-bold">-</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">Capacity</p>
                        <p className="text-sm font-bold">0 L</p>
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <p className="text-sm text-gray-5">
                          Weightbridge Amount
                        </p>
                        <p className="text-sm font-bold">0 Kg</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </ScrollShadow>
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default Monitoring;
