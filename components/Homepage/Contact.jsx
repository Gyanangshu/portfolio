'use client'

import React from 'react'
import Heading from '../UI/Heading'
import Button from '../UI/Button'
import { LuSend  } from "react-icons/lu";

const Contact = () => {
    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full flex flex-col items-center'  id='contact'>
            <Heading text={"Contact Me"} />

            <div className='md:mt-20 mt-6 h-full w-full contact-bg rounded-xl lg:p-10 p-8 flex justify-between lg:flex-row flex-col gap-8'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='md:text-5xl text-3xl font-semibold lg:text-start text-center'>📬 Let's Connect</h1>
                    <p className='mt-4 text-xl lg:text-start text-center lg:max-w-full max-w-xl mx-auto'>I’m currently open to new opportunities - whether it’s full-time, freelance, or collaboration</p>

                    <div className='mt-8 h-full lg:text-left text-center'>
                        <p className='text-xl text-nowrap flex md:flex-row flex-col md:gap-2 gap-1 items-center justify-center lg:justify-start'>💌 Reach me at <a href="mailto:gyanangshu13@gmail.com" className='underline'> gyanangshu13@gmail.com</a></p>
                        <p className='text-xl md:mt-1 mt-2 md:text-nowrap'>🔗 Or find me on <a href="" className='underline'>LinkedIn</a>, <a href="" className='underline'>GitHub</a></p>
                        <p className='text-xl mt-8'>Let’s turn ideas into products that make a difference</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex justify-center'>
                    <form className='w-full flex flex-col gap-5 max-w-xl'>
                        <div>
                            <label className='font-medium'>Name</label>
                            <input required type="text" className='border-2 rounded-lg w-full py-2 px-3 mt-1' placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label className='font-medium'>Email</label>
                            <input required type="email" className='border-2 rounded-lg w-full py-2 px-3 mt-1' placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label className='font-medium'>Message</label>
                            <textarea required className='border-2 rounded-lg w-full py-2 px-3 mt-1 min-h-[150px]' placeholder='Enter your message'/>
                        </div>
                        <Button text={"Submit"} bgColor={"border-2"} icon={<LuSend size={16}/>}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
