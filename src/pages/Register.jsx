import { ConfigProvider, Input } from "antd";
import { FcGoogle } from "react-icons/fc";

import React, { useEffect, useState } from "react";
import logo from "../assets/festLogo.png";
import Axios from "../axios/Axios";
import StepwiseProcess from "../components/StepwiseProcess";
import HandleChange from "../utils/Function";
const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });

  const [next, setNextState] = useState(0);

  const getOTP = () => {
    const request = {
      method: "POST",
      dataObject: registerForm,
    };
    Axios(request).then((res) => {
      console.log(res);
    });
  };

  const [current, setCurrent] = useState(0);
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };

  useEffect(() => { }, []);
  const description = "This is a description.";
  const sharedProps = {
    onChange,
    onInput,
  };

  const processStep = [
    {
      title: "Step 1",
      description: "Email verification",
    },
    {
      title: "Step 2",
      description: "OTP confirmation",
    },
    {
      title: "Step 3",
      description: "Confirm password",
    },
  ];

  return (
    <>
      <div className="w-full justify-center h-screen flex items-center   bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] md:p-10  ">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorPrimary: "#1677ff",
                inputFontSizeLG: 24,
                size: "middle",
                paddingBlock: 7,
                inputFontSize: 18,
                paddingInline: 16,
                activeBorderColor: "#00637C",
                hoverBorderColor: "#FFBF61",
              },
              Button: {
                paddingInline: 29,
                paddingBlock: 36,
                defaultBg: "#00637C",
              },
              Steps: {
                colorPrimary: "#00637C",
                colorText: "#000",
                colorTextDisabled: "#FFBF00",
                colorTextQuaternary: "#FFBF00",
                fontSize: 20,
                lineHeight: 6,
              },
              Select: {
                activeBorderColor: "#00637C",
                hoverBorderColor: "#FFBF61",
              },
            },
          }}
        >
          <div className="absolute  flex-col lg:flex hidden justify-center inset-y-0 left-0 backdrop-invert backdrop-opacity-10  items-end z-10 bg-themeColor/10 h-full w-1/3  ">
            <div className=" w-2/3  ">
              <StepwiseProcess
                current={current}
                itemsArray={processStep}
                logo={logo}
              />
            </div>
          </div>
          <div className="drop-shadow-md static z-0 rounded-2xl self-center   bg-[#2847270e] shadow border border-slate-300   p-5 h-[90%] w-[94%] flex justify-end  ">
            <div className="flex flex-col justify-center items-center gap-20  lg:w-2/3 w-full">
              <div className="flex lg:hidden  w-2/3">
                <img src={logo} alt="" />
              </div>

              <div className="flex justify-center  sm:text-4xl text-3xl font-semibold  text-themeColor ">
                Create your free account
              </div>

              <div className="flex md:w-2/3 w-full  gap-4  flex-col items-center  justify-center  ">
                {current == 0 ? (
                  <>
                    <Input
                      name="name"
                      value={registerForm.name}
                      onChange={(e) => HandleChange(e, setRegisterForm)}
                      placeholder="Name"
                    />
                    <Input
                      name="email"
                      value={registerForm.email}
                      onChange={(e) => HandleChange(e, setRegisterForm)}
                      placeholder="Email"
                    />
                    <button
                      onClick={(e) => {
                        setCurrent(1);
                      }}
                      className="w-full bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                    >
                      Next
                    </button>
                  </>
                ) : current == 1 ? (
                  <>
                    <Input.OTP
                      formatter={(str) => str.toUpperCase()}
                      {...sharedProps}
                    />

                    <button
                      onClick={(e) => setCurrent(2)}
                      className="w-1/3 mt-10 bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                    >
                      Next
                    </button>
                  </>
                ) : current == 2 ? (
                  <>
                    <Input
                      name="password"
                      value={registerForm.password}
                      onChange={(e) => HandleChange(e, setRegisterForm)}
                      placeholder="Password"
                    />
                    <Input
                      name="confirmPassword"
                      value={registerForm.confirmPassword}
                      onChange={(e) => HandleChange(e, setRegisterForm)}
                      placeholder="Confirm password"
                    />
                    <button
                      onClick={(e) => console.log(registerForm)}
                      className="w-full bg-primary text-lg text-white py-2 rounded-xl hover:bg-primary2"
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="flex gap-4 flex-col  justify-center items-center px-8 mb-10   w-full">
                <button className="px-6 py-3 rounded-md bg-blue-400/10 ">
                  <div className="flex gap-3 items-center ">
                    <FcGoogle />
                    <span>Register with Google</span>
                  </div>
                </button>
                <div className="flex justify-center items-center mt-3">
                  <p className="text-md text-gray-800 text-center">
                    Already have an account?{" "}
                    <span className="text-secondary hover:text-primary">
                      {" "}
                      Sign In
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </>
  );
};

export default Register;
