// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom";

const Layout = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#212223] shadow-md left-0 top-0 w-full z-20">
        <div className="w-[93%] m-auto py-3">
            <div className="flex justify-between items-center">
                <div className="w-[80px] h-[48px]">
                    <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
                </div>
                <div className="flex gap-4 justify-center items-center relative">
                    <button className="py-2 px-2 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[5px] font-medium">
                        Create a Design
                    </button>
                    <div className="cursor-pointer" onClick={() => setShow(!show)}>
                        <img className="w-[48px] h-[45px] rounded-full" src="https://img-c.udemycdn.com/user/200_H/42175526_ac8a.jpg" alt="Me" />
                    </div>

                    <div className={`absolute top-[60px] right-0 w-[300px] bg-[#313030] p-3 border-gray-700 transition duration-500 ${show ? 'visible opacity-100':'invisible opacity-30'}`}>
                        <div className="px-2 py-2 flex justify-start gap-5 items-center">
                            <img className="w-[40px] h-[40px] rounded-full" src="https://img-c.udemycdn.com/user/200_H/42175526_ac8a.jpg" alt="Me again" />
                            <div className="flex justify-center flex-col items-start">
                                <span className="text-[#e0dddd] font-bold text-md">Harry</span>
                                <span className="text-[#e0dddd] font-bold text-md">harry.maccode@lhlp.com</span>
                            </div>
                        </div>

                        <ul className="text-[#e0dddd] font-semibold">
                            <li>
                                <Link className="p-2 cursor-pointer"><span>Setting</span></Link>
                            </li>
                            <li>
                                <Link className="p-2 cursor-pointer"><span>Logout</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="w-full flex mt-16">
        <div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed bg-[#34569f]">
            <div className="px-2 py-2 flex justify-start gap-5 items-center mb-3">
                <img className="w-[40px] h-[40px] rounded-full" src="https://img-c.udemycdn.com/user/200_H/42175526_ac8a.jpg" alt="Me again" />
                <div className="flex justify-center flex-col items-start">
                    <span className="text-[#e0dddd] font-bold text-md">Harry MacCode</span>
                    <span className="text-[#e0dddd] text-sm">Free</span>
                </div>
                <ul className="px-4 flex flex-col gap-2"></ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
