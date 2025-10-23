'use client'

import React, { useRef, useState } from 'react'
import Heading from '../UI/Heading'
import Button from '../UI/Button'
import { LuSend } from "react-icons/lu";
import emailjs from '@emailjs/browser';
import { ImSpinner9 } from "react-icons/im";

const Contact = () => {
    const [message, setMessage] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
                }
            );
            setMessage(true);
            e.target.reset();
        } catch (err) {
            console.error('FAILED...', err);
            setError(true);
        } finally {
            setLoading(false);
        }

        setTimeout(() => {
            setMessage(false);
            setError(false);
        }, 5000);
    };

    return (
        <div className='text-white py-24 md:px-(--padding-large-screen) px-(--padding-small-screen) w-full max-w-(--content-width) mx-auto flex flex-col items-center' id='contact'>
            <Heading text={"Contact Me"} />

            <div className='h-full w-full contact-bg rounded-xl lg:p-10 p-8 flex justify-between lg:flex-row flex-col gap-8'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='md:text-5xl text-3xl font-semibold lg:text-start text-center'>📬 Let's Connect </h1>
                    <p className='mt-4 text-xl lg:text-start text-center lg:max-w-full max-w-xl mx-auto'>I’m currently open to new opportunities - whether it’s full-time, freelance, or collaboration</p>

                    <div className='mt-8 h-full lg:text-left text-center'>
                        <p className='text-xl text-nowrap flex md:flex-row flex-col md:gap-2 gap-1 items-center justify-center lg:justify-start'>💌 Reach me at <a href="mailto:gyanangshu13@gmail.com" className='underline'> gyanangshu13@gmail.com</a></p>
                        <p className='text-xl md:mt-1 mt-2 md:text-nowrap'>🔗 Or find me on <a href="https://www.linkedin.com/in/gyanangshu-misra-63136b18a" target='_blank' className='underline'>LinkedIn</a>, <a href="https://github.com/Gyanangshu" target='_blank' className='underline'>GitHub</a></p>
                        <p className='text-xl mt-8'>Let’s turn ideas into products that make a difference</p>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 flex justify-center'>
                    <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col gap-5 max-w-xl'>
                        <div>
                            <label className='font-medium'>Name</label>
                            <input required type="text" name='name' className='border-2 border-white/40 hover:border-white rounded-lg w-full py-2 px-3 mt-1' placeholder='Enter your name' />
                        </div>
                        <div>
                            <label className='font-medium'>Email</label>
                            <input required type="email" name='email' className='border-2 border-white/40 hover:border-white rounded-lg w-full py-2 px-3 mt-1' placeholder='Enter your email' />
                        </div>
                        <div>
                            <label className='font-medium'>Message</label>
                            <textarea required name='message' className='border-2 border-white/40 hover:border-white rounded-lg w-full py-2 px-3 mt-1 min-h-[150px]' placeholder='Enter your message' />
                        </div>
                        {message &&
                            <p className='text-lg'>✅ Thank you for contacting me. I'll reply back within 24 hours.</p>
                        }
                        {error &&
                            <p className='text-red-400 text-lg'>❌ Something went wrong. Please try again</p>
                        }

                        <Button text={loading ? <ImSpinner9 size={16} className='animate-spin'/> : "Submit"} disabled={loading} bgColor={`border-2 border-white/40 hover:border-white`} icon={!loading && <LuSend size={16} />} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
