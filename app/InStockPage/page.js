"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Links from "next/link";

const InstockPage = () => {
  const [items, setItems] = useState(
    Array(10).fill({
      name: "Dummy",
      brand: "Dumbrand",
      size: "8x10",
      stock: 1,
      location: "Jogja",
    })
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditValues(items[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = () => {
    const updatedItems = [...items];
    updatedItems[editingIndex] = editValues;
    setItems(updatedItems);
    setEditingIndex(null);
  };

  const handleAddClick = () => {
    const newProduct = {
      name: "New Item",
      brand: "New Brand",
      size: "8x10",
      stock: 10,
      location: "Location",
    };
    dispatch(addProduct({ data: newProduct }));
  };

  return (
    <section className="w-screen h-screen bg-[#FFFFFF] relative flex flex-row">
      <NavBar></NavBar>
      <div className="w-full h-full">
        <h1 className="text-[2.604vw] text-[#43066C] font-bold py-[1.5vw] px-[3vw]">
          Hi, Admin!
        </h1>
        <div className="w-full h-[3.229vw] bg-[#E5E2E2] flex flex-row items-center">
          <div className="w-[0.365vw] h-full bg-[#9C9696]"></div>
          <h1 className="text-[#2B056B] text-[1.302vw] px-[2.7vw]">
            Dashboard
          </h1>
          <p className=" text-[0.781vw] ml-[1vw]">
            <span className="text-[#6F23F2]">Home</span> / In Stock
          </p>
        </div>
        <div className="w-full flex justify-between py-[1vw] px-[3vw]">
          <div>
            <h1 className="text-[3vw] font-bold text-[#43066C] mb-[0.5vw]">
              In Stock
            </h1>
          </div>
          <div className="flex flex-col">
            <Links
              href="/AddItem"
              className="w-[14.219vw] h-[2.3vw] bg-[#43066C] rounded-[0.4vw] font-bold text-white mb-[0.5vw] text-[1.5vw] text-center"
            >
              Add Items
            </Links>
            <input
              type="text"
              placeholder="Search"
              className="w-[14.219vw] h-[2vw] rounded-[0.5vw] drop-shadow-lg px-[0.5vw] placeholder:text-[1vw]"
            />
          </div>
        </div>

        <div className="px-[3vw] flex-1">
          <div className="w-full max-h-[50vh] overflow-y-auto">
            <table className="min-w-full table-auto border-collapse text-left">
              <thead className="bg-[#E5E2E2] sticky top-0 z-10 border-b border-t">
                <tr>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    No
                  </th>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    Item Name
                  </th>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    Brand
                  </th>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    Size (cm)
                  </th>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    Stock
                  </th>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    Location
                  </th>
                  <th className="border px-[0.833vw] py-[0.417vw] text-[#43066C]">
                    Option
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {items.map((item, i) => (
                  <tr key={i} className="hover:bg-[#F3F4F6]">
                    <td className="border px-[0.833vw] py-[0.417vw]">
                      {i + 1}
                    </td>
                    {editingIndex === i ? (
                      <>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          <input
                            name="name"
                            value={editValues.name}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          <input
                            name="brand"
                            value={editValues.brand}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          <input
                            name="size"
                            value={editValues.size}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          <input
                            name="stock"
                            type="number"
                            value={editValues.stock}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          <input
                            name="location"
                            value={editValues.location}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          <button
                            onClick={handleSaveClick}
                            className="bg-green-500 text-white px-[0.625vw] py-[0.208vw] rounded"
                          >
                            Save
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          {item.name}
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          {item.brand}
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          {item.size}
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          {item.stock}
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw]">
                          {item.location}
                        </td>
                        <td className="border px-[0.833vw] py-[0.417vw] flex justify-center">
                          <button
                            onClick={() => handleEditClick(i)}
                            className="bg-yellow-500 text-white px-[0.625vw] py-[0.208vw] rounded mr-[0.5vw]"
                          >
                            Edit
                          </button>
                          <button className="bg-red-500 text-white px-[0.625vw] py-[0.208vw] rounded">
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-[#43066C] text-white px-[0.625vw] py-[0.208vw] mt-[1vw] rounded">
            Export Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstockPage;
