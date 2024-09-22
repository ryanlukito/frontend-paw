"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

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
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <div className="flex flex-col">
              <label className="font-bold text-purple-900 text-[1.042vw] mb-[1vw]">
                Username
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="appearance-none bg-transparent w-[18.802vw] border-b-[0.105vw] border-purple-700 text-gray-700 focus:outline-none focus:border-purple-900 placeholder:text-[1vw]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-[1vw]">
              <label className="font-bold text-purple-900 text-[1.042vw] mb-[1vw]">
                Password
              </label>
              <input
                type="password" // Changed from email to password
                placeholder="Input your password"
                className="appearance-none bg-transparent w-[18.802vw] border-b-[0.105vw] border-purple-700 text-gray-700 focus:outline-none focus:border-purple-900 placeholder:text-[1vw]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-[11.302vw] h-[2.188vw] bg-[#43066C] rounded-[1.563vw] text-white flex justify-center items-center font-bold text-[0.833vw] hover:scale-105 hover:bg-purple-950 transition ease-in-out duration-500 mt-[2vw]"
              disabled={loading} // Disable button if loading
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>
          {/* Display error */}
          {error && <p className="text-[1vw] text-red-600 text-left">{error.msg}</p>}
          <p className="text-[0.781vw] mt-[1vw]">
            Don&apos;t have an account?{" "}
            <Link className="font-bold text-[#43066C]" href="/RegisterPage">
              Please Register
            </Link>
          </p>
        </div>
        <div className="h-full border-purple-900 border-[0.01vw]"></div>
        <div className="w-[45vw] h-full flex flex-col justify-center items-start ml-[2vw] relative">
          <h1 className="text-[4.167vw] text-[#43066C] font-bold leading-none absolute top-[2vw]">
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

export default LoginPage;