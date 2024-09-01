// import React from 'react'

const Layout = () => {
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
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
