import React from "react";
import Image from "next/image";

const registerPage = () => {
  return (
    <section className="w-screen h-screen p-[3vw] bg-[#F2EDFCE5] flex flex-row items-center justify-center">
      <div className="flex w-[90vw] h-[44.14vw] justify-around">
        <div className="relative z-10">
          <div className="w-[43.422vw] h-full bg-[#FFFFFF] rounded-[2.083vw] absolute flex items-center justify-center drop-shadow-xl">
            <div className="w-[36.88vw] h-[37.774vw] flex flex-col justify-around">
              <div>
                <h1 className="font-bold text-[1.302vw]">Add Item</h1>
                <p className="text-[0.781vw] my-[1vw]">
                  Add your item and its detail here{" "}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <label className="mb-[0.5vw]">Item Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[17.147vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-[0.5vw]">Size (cm)</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-[17.147vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-[0.5vw]">Brand</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-[36.8vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                />
              </div>
              <div className="flex items justify-between">
                <div className="flex flex-col">
                    <label className="mb-[0.5vw]">Stock</label>
                    <input
                    type="text"
                    placeholder=""
                    className="w-[10vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-[0.5vw]">Location</label>
                    <input
                    type="text"
                    placeholder=""
                    className="w-[24vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                    />
                </div>
              </div>
              <button className="w-[36.8vw] h-[2.976vw] bg-purple-900 flex items-center justify-center text-white font-bold text-[0.938vw] rounded-[0.3vw] hover:bg-purple-950 transition ease-in-out duration-500">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="w-[43.81vw] h-full bg-[#2B056B] rounded-[2.083vw] p-[2vw] relative drop-shadow-xl flex flex-col items-end z-0">
          <h1 className="font-bold text-[1.823vw] text-white">
            Organize your <br/> inventory with ease!
          </h1>
          <Image
            src="/assets/image/cardboard.png"
            width={10000}
            height={10000}
            alt="icon"
            className="w-[32.188vw] h-[20.052vw] absolute right-[-4vw] bottom-[7vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default registerPage;
