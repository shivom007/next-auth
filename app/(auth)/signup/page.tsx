"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState, useContext, useRef } from "react";
import Link from "next/link";
import { ToggleContext } from "@/context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { signIn } from "next-auth/react";
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const FormSchema = z
  .object({
    fullName: z.string().min(1, { message: "Required" }),
    email: z
      .string()
      .min(1, { message: "Required" })
      .email("This email is not valid."),
    password: z
      .string()
      .min(8, { message: "password should be at least 8 characters" })
      .regex(passwordValidation, { message: "password is not valid " }),
    confirmPassword: z
      .string()
      .min(8, { message: "password should be at least 8 characters" })
      .regex(passwordValidation, { message: "password is not valid " }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const container = useRef<HTMLElement | null>(null);
  const { toggle } = useContext(ToggleContext);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [type, setType] = useState(true);
  const [confirmtype, setConfirmType] = useState(true);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  const handleGithub = async () => {
    const response = await signIn("github", {
      callbackUrl: "/",
    });
    console.log({ response });
  };

  const handleGoogle = async () => {
    const response = await signIn("google", {
      callbackUrl: "/",
    });
    console.log({ response });
  };

  const handleType = () => {
    setType(!type);
  };
  const handleConfirmType = () => {
    setConfirmType(!confirmtype);
  };
  useGSAP(
    () => {
      gsap.from("#animate", { y: 100, duration: 1 });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="flex  items-center w-screen   justify-center"
    >
      <div
        id="animate"
        className=" flex flex-col sm:w-[592px] w-[350px] justify-center shadow-lg  rounded-[32px] gap-[27px] pt-[20px] items-center bg-[#FFFFFF80]  "
      >
        <h3 className="font-medium text-[20px] sm:text-[24px] leading-9">
          Create your account
        </h3>
        <div className="flex items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-4 gap-0"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Full Name</FormLabel>
                    <FormControl className="border-none sm:w-[300px] w-[260px] h-[48px] outline-none bg-[#FFFFFF80]  shadow-none focus:outline-none hover:border-2 hover:border-solid border-[#B694FF]  rounded-[0.5rem]  ">
                      <Input placeholder="Enter Your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Email</FormLabel>
                    <FormControl className="border-none sm:w-[300px] w-[260px] h-[48px] outline-none bg-[#FFFFFF80]  shadow-none focus:outline-none hover:border-2 hover:border-solid border-[#B694FF]  rounded-[0.5rem]  ">
                      <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Password</FormLabel>
                    <FormControl className="border-none sm:w-[300px] w-[260px] h-[48px] relative outline-none bg-[#FFFFFF80]  shadow-none focus:outline-none hover:border-2 hover:border-solid border-[#B694FF]  rounded-[0.5rem]  ">
                      <Input
                        type={type ? "password" : "text"}
                        placeholder="Enter Your Password"
                        {...field}
                      />
                    </FormControl>
                    <Image
                      onClick={handleType}
                      className="absolute cursor-pointer sm:-translate-y-[2.7rem] -translate-y-[2.7rem] translate-x-[14rem] sm:translate-x-[16.5rem]"
                      src={type ? "/eye.svg" : "/close-eye.svg"}
                      width={24}
                      height={14}
                      alt="Picture of the author"
                    />
                    <FormMessage />
                    {/* <Link href="/">
                      <p className="sm:w-[300px] w-[260px] text-[#0029FF] mt-[6px] text-right  text-[12px] font-medium ">
                        Forgot password?
                      </p>
                    </Link> */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Confirm Password</FormLabel>
                    <FormControl className="border-none sm:w-[300px] w-[260px] h-[48px] relative outline-none bg-[#FFFFFF80]  shadow-none focus:outline-none hover:border-2 hover:border-solid border-[#B694FF]  rounded-[0.5rem]  ">
                      <Input
                        type={confirmtype ? "password" : "text"}
                        placeholder="Confirm Your Password"
                        {...field}
                      />
                    </FormControl>
                    <Image
                      onClick={handleConfirmType}
                      className="absolute cursor-pointer sm:-translate-y-[2.7rem] -translate-y-[2.7rem] translate-x-[14rem] sm:translate-x-[16.5rem]"
                      src={confirmtype ? "/eye.svg" : "/close-eye.svg"}
                      width={24}
                      height={14}
                      alt="Picture of the author"
                    />
                    <FormMessage />
                    {/* <Link href="/">
                      <p className="sm:w-[300px] w-[260px] text-[#0029FF] mt-[6px] text-right  text-[12px] font-medium ">
                        Forgot password?
                      </p>
                    </Link> */}
                  </FormItem>
                )}
              />
              <Button
                style={{ marginTop: "1.5rem" }}
                className="sm:w-[300px] text-white  w-[260px] h-[48px] btn mt-10 rounded-[12px] gap-[8px] bg-[#0A0A0A] hover:bg-[#0029FF] ease-in-out duration-800 "
                type="submit"
              >
                Sign In
                <Image
                  className="arrow-icon ease-in-out duration-1000 "
                  src="/arrow_right.svg"
                  width={18}
                  height={14}
                  alt="Picture of the author"
                />
              </Button>
            </form>
          </Form>
        </div>
        <div className="-mt-4 p-0 flex   flex-col justify-center">
          <p className="sm:text-[14px] text-[14px]  text-center  text-[Gray]">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#001AFF] font-medium">Log In</span>
            </Link>{" "}
          </p>
          <div className="inline-flex p-0  -mt-2 items-center justify-center w-full">
            <hr className="sm:w-[300px] w-[260px] h-[0.8px] my-8 bg-white border-0 rounded dark:bg-gray-700" />
            <div
              className={`absolute px-2 -translate-x-4 rounded-full ${
                toggle ? "bg-[#B0B1B5] " : " bg-[#E4CDFF] "
              } left-1/2 dark:bg-gray-900`}
            >
              <span className="text-[#6A6B7A]">or</span>
            </div>
          </div>
          <div className="flex sm:w-[300px] w-[260px] gap-[8px]">
            <div
              onClick={handleGithub}
              className="flex cursor-default p-[10px] gap-[8px] justify-center items-center w-[140px] sm:w-[146px] h-[44px] sm:h-[48px] bg-inherit sm:bg-[#FFFEFE] hover:bg-[#0029FF] hover:text-white rounded-[12px]"
            >
              <Image
                src="/github-mark.svg"
                width={26}
                height={26}
                alt="Picture of the author"
              />
              <span className="sm:text-[16px] text-[12px] font-normal">
                Github
              </span>
            </div>
            <div
              onClick={handleGoogle}
              className="flex p-[10px] cursor-default gap-[8px] justify-center items-center w-[140px] sm:w-[146px] h-[44px] sm:h-[48px] bg-inherit sm:bg-[#FFFEFE] hover:bg-[#0029FF] hover:text-white rounded-[12px]"
            >
              <Image
                src="/Vector.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <span className="sm:text-[16px] text-[12px] font-normal">
                Google
              </span>
            </div>
          </div>
        </div>
        <p className="sm:text-[12px] text-[10px] font-normal text-center text-[#6A6B7A] w-[300px] mb-4">
          By continuing, you agree to Playground’s{" "}
          <Link href="/" className="text-[#0029FF] font-medium">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-[#0029FF] font-medium">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
