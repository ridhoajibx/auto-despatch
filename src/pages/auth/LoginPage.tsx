import React, { useEffect, useMemo, useState } from "react";
import DefaultLayouts from "../../layouts";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input
} from "@nextui-org/react";
import Img01 from "@/assets/images/login-img-01.png";
import Img02 from "@/assets/images/login-img-02.png";
import LogoColor from "@/components/Icons/LogoColor";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLock, MdPerson, MdWarning } from "react-icons/md";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import { selectAuth, webLogin } from "@/redux/features/AuthenticationReducers";
import Cookies from "js-cookie"
import AuthLayouts from "@/layouts/AuthLayouts";


export type FormValues = {
  username?: string;
  password?: string;
};

export const LoginPage: React.FC = () => {
  // Implement your login form and authentication logic here
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector(selectAuth);

  console.log(isLogin, 'cek')

  const {
    unregister, register, handleSubmit, watch, reset, setValue, formState: { errors, isValid }, control,
  } = useForm({
    mode: "all",
    defaultValues: useMemo<FormValues>(
      () => ({
        username: null,
        password: null,
      }),
      []
    ),
  });

  const onSubmit: SubmitHandler<FormValues> = async (value) => {
    console.log(value, "form-value");
    const obj: FormValues = {
      username: value.username,
      password: value.password
    };

    dispatch(webLogin({
      data: obj,
      callback: () => {
        navigate("/")
      }
    }))
  };

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
              <form className="w-full">
                <div className="w-full mb-10">
                  <p className="text-lg">
                    Please <span className="font-bold">Login</span> to continue
                  </p>
                </div>

                <div className="w-full mb-3">
                  <div>
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <Input
                          isClearable
                          type="text"
                          label="Username"
                          variant="bordered"
                          placeholder="Enter your username"
                          labelPlacement="outside"
                          onClear={() => reset({ username: "" })}
                          className="w-full"
                          startContent={<MdPerson className="text-2xl text-default-400 pointer-events-none" />}
                          size="lg"
                          value={value || ""}
                          onChange={onChange}
                          color={errors?.username ? "danger" : "primary"} />
                      )}
                      name={`username`}
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "Username is required.",
                        },
                      }} />

                    {errors?.username && (
                      <div className="mt-1 text-xs flex items-center text-red-300">
                        <MdWarning className="w-4 h-4 mr-1" />
                        <span className="text-red-300">
                          {errors?.username?.message as any}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full mb-3">
                  <div>
                    <Controller
                      render={({
                        field: { onChange, onBlur, value, name, ref }, fieldState: { invalid, isTouched, isDirty, error },
                      }) => (
                        <Input
                          // isClearable
                          label="Password"
                          labelPlacement="outside"
                          variant="bordered"
                          placeholder="Enter your password"
                          endContent={<button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                          >
                            {isVisible ? (
                              <FaEye className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                              <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                            )}
                          </button>}
                          type={isVisible ? "text" : "password"}
                          startContent={<MdLock className="text-2xl text-default-400 pointer-events-none" />}
                          size="lg"
                          value={value || ""}
                          onChange={onChange}
                          color={errors?.password ? "danger" : "primary"} />
                      )}
                      name={`password`}
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "Password is required.",
                        },
                      }} />

                    {errors?.password && (
                      <div className="mt-1 text-xs flex items-center text-red-300">
                        <MdWarning className="w-4 h-4 mr-1" />
                        <span className="text-red-300">
                          {errors?.password?.message as any}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  color="primary"
                  className="w-full flex items-center justify-center gap-2 mt-5"
                  onClick={handleSubmit(onSubmit)}
                >
                  Login
                </Button>
              </form>
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
                className="m-auto" />
            </div>
            <div className="w-full absolute top-0 flex items-center justify-center">
              <Image
                width={300}
                height={200}
                alt="NextUI hero Image with delay"
                src={Img01}
                loading="lazy"
                className="m-auto" />
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
