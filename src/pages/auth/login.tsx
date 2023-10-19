// LoginPage.tsx
import React from "react";
import DefaultLayouts from "../../layouts";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
  Spinner,
} from "@nextui-org/react";
import Img01 from "@/assets/images/login-img-01.png";
import Img02 from "@/assets/images/login-img-02.png";
import LogoColor from "@/components/Icons/LogoColor";
import { FaEye, FaEyeSlash, FaPersonBooth } from "react-icons/fa";
import { MdLock, MdPerson } from "react-icons/md";

const LoginPage: React.FC = () => {
  // Implement your login form and authentication logic here
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <DefaultLayouts
      title="Login"
      className="w-full bg-gray h-full text-gray-6 overflow-auto"
    >
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 overflow-auto">
        <div className="w-full p-4 sm:p-6 flex justify-center items-center">
          <Card className="w-full max-w-md p-6">
            <CardHeader>
              <div className="w-full flex items-center gap-2">
                <LogoColor />
                <div className="font-bold text-lg mt-3">Filling Monitoring</div>
              </div>
            </CardHeader>
            <CardBody>
              <div>
                <div className="w-full mb-10">
                  <p className="text-lg">
                    Please <span className="font-bold">Login</span> to continue
                  </p>
                </div>

                <div className="w-full mb-3">
                  <div>
                    <Input
                      isClearable
                      type="text"
                      label="Username"
                      variant="bordered"
                      placeholder="Enter your username"
                      labelPlacement="outside"
                      defaultValue=""
                      onClear={() => console.log("input cleared")}
                      className="w-full"
                      startContent={
                        <MdPerson className="text-2xl text-default-400 pointer-events-none" />
                      }
                      size="lg"
                    />
                  </div>
                </div>

                <div className="w-full mb-3">
                  <div>
                    <Input
                      // isClearable
                      label="Password"
                      labelPlacement="outside"
                      variant="bordered"
                      placeholder="Enter your password"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <FaEye className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                      startContent={
                        <MdLock className="text-2xl text-default-400 pointer-events-none" />
                      }
                      size="lg"
                    />
                  </div>
                </div>

                <Button
                  color="primary"
                  className="w-full flex items-center justify-center gap-2 mt-5"
                >
                  Login
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-full hidden sm:flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 via-blue-500 to-blue-300 py-4 sm:py-6 text-left sm:text-center gap-3 sm:gap-6 text-white px-10 sm:px-20">
          <div className="font-bold text-xl sm:text-3xl">
            Seamless Oil Flow: Factory to Truck, Monitored with Precision
          </div>

          <div className="w-full relative h-[250px] flex items-center justify-center">
            <div className="w-full absolute top-10 inset-x-10 flex items-center justify-center ">
              <Image
                width={300}
                height={200}
                alt="NextUI hero Image with delay"
                // src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                src={Img02}
                loading="lazy"
                className="m-auto"
              />
            </div>
            <div className="w-full absolute top-0 flex items-center justify-center">
              <Image
                width={300}
                height={200}
                alt="NextUI hero Image with delay"
                src={Img01}
                loading="lazy"
                className="m-auto"
              />
            </div>
          </div>

          <div className="w-full sm:-mt-5">
            Collecting data from the monitoring system can provide valuable
            insights for process optimization and decision-making.
          </div>
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default LoginPage;
