import React from "react";
import Image from "next/image";
import Link from "next/link";

const loginPage = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-start pl-[6vw] pt-[3vw] bg-gradient-to-r from-[#D0BFF9E5] to-[#2B056BE5]">
      <div className="w-[80vw] h-[34.115vw] flex bg-[#F7E5F7] relative rounded-[1.5vw] mt-[2vw] items-center">
        <h1 className="w-fit font-bold text-white text-[5.208vw] drop-shadow-xl absolute top-[-8vw]">
          FurniStock
        </h1>
        <div className="w-[35vw] h-[32vw] flex flex-col justify-around items-center">
          <Image
            src="/assets/image/MaleUser.png"
            width={10000}
            height={10000}
            alt="icon1"
            className="w-[6.615vw] h-[5.677vw] object-cover mt-[1vw]"
          />
          <div className="flex flex-col">
            <label className="font-bold text-purple-900 text-[1.042vw] mb-[1vw]">
              Username
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="appearance-none bg-transparent w-[18.802vw] border-b-[0.105vw] border-purple-700 text-gray-700 focus:outline-none focus:border-purple-900 placeholder:text-[1vw]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-purple-900 text-[1.042vw] mb-[1vw]">
              Password
            </label>
            <input
              type="email"
              placeholder="Input your password"
              className="appearance-none bg-transparent w-[18.802vw] border-b-[0.105vw] border-purple-700 text-gray-700 focus:outline-none focus:border-purple-900 placeholder:text-[1vw]"
            />
          </div>
          <button className="w-[11.302vw] h-[2.188vw] bg-[#43066C] rounded-[1.563vw] text-white flex justify-center items-center font-bold text-[0.833vw] hover:scale-105 hover:bg-purple-950 transition ease-in-out duration-500">
            LOGIN
          </button>
          <p className="text-[0.781vw]">
            Don&apos;t have account?{" "}
            <Link className="font-bold text-[#43066C]" href="/RegisterPage">
              Please Register
            </Link>
          </p>
        </div>
        <div className="h-full border-purple-900 border-[0.01vw]"></div>
        <div className="w-[45vw] h-full flex flex-col justify-center items-start ml-[2vw] relative">
          <h1 className="text-[4.167vw] text-[#43066C] font-bold leading-none absolute top-0">
            When Style <br />
            Meets
            <br /> Comfort
          </h1>
          <Image
            src="/assets/image/livingRoom.png"
            width={10000}
            height={10000}
            alt="icon"
            className="w-[32.969vw] h-[21.406vw] absolute bottom-[1vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default loginPage;
