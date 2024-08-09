// import React from 'react';

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


const Index = () => {
    const [show, setShow] = useState(false);
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    console.log(state);

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div className='bg-[#18191b] min-h-screen w-full'>
            <div className={`w-screen ${show ? 'visible opacity-100': 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] 
            flex justify-center items-center`}>
                <div className='w-[350px] bg-[#323335] m-auto px-6 py-4 rounded-md relative'>
                    <div onClick={() => setShow(false)} className='absolute right-4 top-4 text-xl cursor-pointer text-white'><RxCross2 /></div>
                    <h2 className='text-white pb-4 text-center text-xl'>Login and Sign up in seconds</h2>
                    <form action="">
                        <div className='flex flex-col gap-3 mb-3 text-white'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Your Email' className='px-3 py-2 rounded-md border 
                            outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' value={state.email} onChange={inputHandle} />
                        </div>
                        <div className='flex flex-col gap-3 mb-3 text-white'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' placeholder='Your password' className='px-3 py-2 rounded-md border 
                            outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent' value={state.email} onChange={inputHandle} />
                        </div>
                    </form>
                </div>
            </div>
            <div className='bg-[#212223] shadow-md'>
                <div className='w-[93%] m-auto py-3'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[80px] h-[48px]'>
                            <img src='https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg' alt='canva logo' />
                        </div>
                        <div className='flex gap-4'>
                            <button onClick={() => setShow(true)} className='py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium'>
                                Sign In
                            </button>
                            <button className='py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full justify-center items-center p-4'>
                <div className='py-[170px] flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-5xl text-[#c7c5c5] font-bold'>What you will design today ?</h2>
                    <span className='text-[#aca9a9] text-2xl font-medium'>
                        Canva makes it easy to create and share professional designs.
                    </span>
                    <button className='py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium'>
                        Sign Up for Free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Index;