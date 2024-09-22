"use client";

import React from "react";
import NavBar from "../components/NavBar";

const StockPage = () => {
  return (
    <section className="w-screen h-screen bg-[#FFFFFF] relative flex flex-row">
      <NavBar></NavBar>
      <div className="w-full h-full">
        <h1 className="text-[2.604vw] text-[#43066C] font-bold py-[1.5vw] px-[3vw]">
          Hi, Welcome!
        </h1>
        <div className="w-[full] h-[3.229vw] bg-[#E5E2E2] flex flex-row items-center">
          <div className="w-[0.365vw] h-full bg-[#9C9696]"></div>
          <h1 className="text-[#2B056B] text-[1.302vw] px-[2.7vw]">
            Dashboard
          </h1>
          <p className=" text-[0.781vw] ml-[1vw]">
            <span className="text-[#6F23F2]">Home</span> / List Items
          </p>
        </div>
        <div className="w-full flex justify-between py-[3vw] px-[6vw]">
          <div>
            <h1 className="text-[1.563vw] font-bold text-[#43066C] mb-[0.5vw]">
              List Items
            </h1>
            <div className="flex items-center space-x-2">
              <label className="text-[0.938vw] text-[#2B056B]">Show</label>
              <select id="entries">
                <option value="5">2</option>
                <option value="5">4</option>
                <option value="5">6</option>
                <option value="5">8</option>
                <option value="5">10</option>
              </select>
              <label className="text-[0.938vw] text-[#2B056B]">Entries</label>
            </div>
          </div>
          <div className="flex flex-col">
            <button className="w-[14.219vw] h-[1.927vw] bg-[#43066C] rounded-[0.4vw] font-bold text-white mb-[0.5vw]">
              Add Items
            </button>
            <input
              type="text"
              placeholder="Search"
              className="w-[14.219vw] h-[2vw] rounded-[0.5vw] drop-shadow-lg px-[0.5vw]"
            />
          </div>
        </div>

        <div className="px-[3vw] flex-1">
          <div className="w-full max-h-[50vh] overflow-y-auto">
            <table className="min-w-full table-auto border-collapse text-left">
              <thead className="bg-[#E5E2E2] sticky top-0 z-10 border-b border-t">
                <tr>
                  <th className="border px-4 py-2 text-[#43066C]">No</th>
                  <th className="border px-4 py-2 text-[#43066C]">Item Name</th>
                  <th className="border px-4 py-2 text-[#43066C]">Brand</th>
                  <th className="border px-4 py-2 text-[#43066C]">Size (cm)</th>
                  <th className="border px-4 py-2 text-[#43066C]">Stock</th>
                  <th className="border px-4 py-2 text-[#43066C]">Location</th>
                  <th className="border px-4 py-2 text-[#43066C]">Option</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[...Array(10)].map((_, i) => (
                  <tr key={i} className="hover:bg-[#F3F4F6]">
                    <td className="border px-4 py-2">{i + 1}</td>
                    <td className="border px-4 py-2">Dummy</td>
                    <td className="border px-4 py-2">Dumbrand</td>
                    <td className="border px-4 py-2">8x10</td>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Jogja</td>
                    <td className="border px-4 py-2 space-x-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockPage;
