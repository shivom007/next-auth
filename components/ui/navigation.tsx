"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ToggleContext } from "@/context";

const Navigation = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  const router = useRouter();
  const [toggled, setToggled] = useState(false);
  return (
    <div className="flex h-[80px] sticky  justify-around  items-center">
      <div
        onClick={() => router.push("/")}
        className="flex items-center -ml-6 sm:-ml-0  cursor-pointer gap-[12px]"
      >
        <Image
          className="sm:h-[40px] sm:w-[40px]"
          src="/Logo.svg"
          height={32}
          width={32}
          alt="logo"
        />
        <h3 className="sm:text-[20px] text-[14px] font-medium ">playground.</h3>
      </div>
      <div className="sm:flex hidden items-center justify-end gap-[70px]">
        <div className="flex gap-[32px]">
          <h3 className="cursor-default text-[16px] font-normal ">Services</h3>
          <h3 className="cursor-default text-[16px] font-normal">Team</h3>
          <h3 className="cursor-default text-[16px] font-normal">About us</h3>
        </div>
        <div className="flex gap-[32px] items-center">
          <div className="flex items-center justify-center gap-[40px]">
            <Button
              onClick={() => router.push("/signup")}
              className="text-[16px] h-[48px] w-[110px] bg-[#0A0A0A] hover:bg-[#0029FF] ease-in-out duration-500 rounded-[12px] text-white font-medium"
            >
              Sign Up
            </Button>
            <h3
              onClick={() => router.push("/login")}
              className="cursor-default text-[16px] font-normal "
            >
              Log In
            </h3>
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className="h-[32px] cursor-pointer shadow-md  w-[56px] relative rounded-full bg-white group flex items-center justify-center "
          >
            <div
              className={`h-[32px] w-[32px] flex items-center justify-center absolute left-0 rounded-full ${
                toggle ? "translate-x-[1.57rem]" : ""
              }  ease-in-out duration-300  ${
                toggle ? "bg-[#63676E]" : "bg-[#A68EFF]"
              } `}
            >
              <Image
                className="top-[4px]"
                src={`${toggle ? "/moon.svg" : "/Icons.svg"}`}
                height={24}
                width={24}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setToggled(!toggled)}
        className="sm:hidden -mr-6 flex justify-center items-center gap-[8px]"
      >
        <h3>Menu</h3>
        <Image
          src={`${toggled ? "/arrow-up.svg" : "/arrow-down.svg"}`}
          height={24}
          width={24}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Navigation;
