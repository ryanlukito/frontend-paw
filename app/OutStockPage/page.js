"use client";
import React, { useState } from 'react';
import NavBar from '../components/NavBar'

const outstockPage = () => {
  const [items, setItems] = useState(
    Array(10).fill({ name: 'Dummy', brand: 'Dumbrand', size: '8x10', stock: 1, location: 'Jogja' })
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
  return (
    <section className="w-screen h-screen bg-[#FFFFFF] relative flex flex-row">
        <NavBar></NavBar>
        <div className="w-full h-full">
          <h1 className="text-[2.604vw] text-[#43066C] font-bold py-[1.5vw] px-[3vw]">Hi, Admin!</h1>
          <div className="w-[full] h-[3.229vw] bg-[#E5E2E2] flex flex-row items-center">
            <div className="w-[0.365vw] h-full bg-[#9C9696]"></div>
            <h1 className="text-[#2B056B] text-[1.302vw] px-[2.7vw]">Dashboard</h1>
            <p className=" text-[0.781vw] ml-[1vw]"><span className="text-[#6F23F2]">Home</span> / Out Stock</p>
          </div>
          <div className="w-full flex justify-between py-[2vw] px-[6vw]">
            <div>
              <h1 className="text-[1.563vw] font-bold text-[#43066C] mb-[0.5vw]">Out Stock</h1>
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
              {/* <button className="w-[14.219vw] h-[1.927vw] bg-[#43066C] rounded-[0.4vw] font-bold text-white mb-[0.5vw]">Add Items</button> */}
              <input type="text" placeholder="Search" className="w-[14.219vw] h-[2vw] rounded-[0.5vw] mt-[2.427vw] drop-shadow-lg px-[0.5vw]"/>
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
                {items.map((item, i) => (
                  <tr key={i} className="hover:bg-[#F3F4F6]">
                    <td className="border px-4 py-2">{i + 1}</td>
                    {editingIndex === i ? (
                      <>
                        <td className="border px-4 py-2">
                          <input name="name" value={editValues.name} onChange={handleInputChange} />
                        </td>
                        <td className="border px-4 py-2">
                          <input name="brand" value={editValues.brand} onChange={handleInputChange} />
                        </td>
                        <td className="border px-4 py-2">
                          <input name="size" value={editValues.size} onChange={handleInputChange} />
                        </td>
                        <td className="border px-4 py-2">
                          <input name="stock" type="number" value={editValues.stock} onChange={handleInputChange} />
                        </td>
                        <td className="border px-4 py-2">
                          <input name="location" value={editValues.location} onChange={handleInputChange} />
                        </td>
                        <td className="border px-4 py-2">
                          <button onClick={handleSaveClick} className="bg-green-500 text-white px-3 py-1 rounded">Save</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.brand}</td>
                        <td className="border px-4 py-2">{item.size}</td>
                        <td className="border px-4 py-2">{item.stock}</td>
                        <td className="border px-4 py-2">{item.location}</td>
                        <td className="border px-4 py-2">
                        <button onClick={() => handleEditClick(i)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="bg-[#43066C] text-white px-3 py-1 mt-[1vw] rounded">Export Data</button>
        </div>
      </div>
    </section>
  );
};

export default outstockPage;
