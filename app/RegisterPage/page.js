import React from 'react'
import Image from 'next/image'

const RegisterPage = () => {
  return (
    <section className="w-screen h-screen p-[3vw] bg-[#F2EDFCE5] flex flex-row items-center justify-center">
        <div className="flex w-[90vw] h-[44.14vw] justify-around">
            <div className="w-[43.81vw] h-full bg-[#2B056B] rounded-[2.083vw] p-[2vw] relative drop-shadow-xl">
                <h1 className="font-bold text-[1.823vw] text-white">FurniStock helps you <br/>to track your items</h1>
                <Image
                    src="/assets/image/livingRoomChair.png"
                    width={10000}
                    height={10000}
                    alt="icon"
                    className="w-[58.383vw] h-[33.86vw] absolute left-[-6vw]"
                />
            </div>
            <div className="relative">
            <div className="w-[43.422vw] h-full bg-[#FFFFFF] rounded-[2.083vw] absolute right-[0] flex items-center justify-center drop-shadow-xl">
                <div className="w-[36.88vw] h-[37.774vw] flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-[1.302vw]">Create Your Account</h1>
                        <p className="text-[0.781vw] my-[1vw]">Create account to view and manage the security </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <label className="mb-[0.5vw]">First Name</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="w-[17.147vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-[0.5vw]">Last Name</label>
                            <input 
                                type="text" 
                                placeholder=""
                                className="w-[17.147vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-[0.5vw]">Email</label>
                        <input 
                            type="text" 
                            placeholder=""
                            className="w-[36.8vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-[0.5vw]">Create Your Password</label>
                        <input 
                            type="text" 
                            placeholder=""
                            className="w-[36.8vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-[0.5vw]">Confirm Your Password</label>
                        <input 
                            type="text" 
                            placeholder=""
                            className="w-[36.8vw] h-[2.804vw] drop-shadow-lg rounded-[0.5vw] border-[0.04vw] border-[#9B9595] px-[0.5vw] placeholder:text-[1vw]"
                        />
                    </div>
                    <div className="flex flex-row">
                        <input type="checkbox" />
                        <span className="ml-[1vw] text-[0.781vw]">By creating an account you agree to our <a className="font-bold text-blue-500" href="">Terms of Service</a> and <a href="" className="font-bold text-blue-500">Privacy Policy</a></span>
                    </div>
                    <button className="w-[36.8vw] h-[2.976vw] bg-purple-900 flex items-center justify-center text-white font-bold text-[0.938vw] rounded-[0.3vw] hover:bg-purple-950 transition ease-in-out duration-500">Create your account</button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterPage