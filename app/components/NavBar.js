import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const source = [
    {src: "/assets/image/stockpot.png", text1: "Furniture Stock", width: "w-[1.51vw]", height: "h-[1.563vw]",linkto: "/"},
    {src: "/assets/image/in.png", text1: "In Stock", width: "w-[1.458vw]", height: "h-[1.406vw]",linkto: "/InStockPage"},
    {src: "/assets/image/out.png", text1: "Out Stock", width: "w-[1.354vw]", height: "h-[1.615vw]",linkto: "/OutStockPage"},
  ];

const NavBar = () => {
  return (
    <div className="w-[18.281vw] h-full bg-[#2B056B] flex flex-col items-center">
          <div className="w-full h-[39.479vw] flex flex-col justify-around items-center">
            <div className="flex flex-row justify-center items-center">
              <Link  className="text-white font-bold flex items-center" href="#">
                <Image
                      src="/assets/image/user-sharing.png"
                      width={10000}
                      height={10000}
                      alt="icon"
                      className="w-[1.823vw] h-[1.719vw] mr-[0.5vw]"
                    />
                    <h1 className="text-[1.302vw]">Admin</h1>
              </Link>
            </div>
            <div>
              {source.map((client, index) => (
                <div key={index} className="mb-[1vw]">
                  <Link className="text-white font-bold flex items-center" href={`${client.linkto}`}>
                    <Image
                      src={`${client.src}`}
                      width={10000}
                      height={10000}
                      alt="icon"
                      className={`${client.width} ${client.height} mr-[0.5vw]`}
                    />
                    <h1 className="text-[1.302vw]">{client.text1}</h1>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center items-center">
              <Link  className="text-white font-bold flex items-center" href="#">
                <Image
                      src="/assets/image/Imac.png"
                      width={10000}
                      height={10000}
                      alt="icon"
                      className="w-[2.135vw] h-[2.5vw] mr-[0.5vw]"
                    />
                    <h1 className="text-[1.302vw]">Logout</h1>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default NavBar