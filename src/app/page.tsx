'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar'
import About from '@/components/About';
import Services from '@/components/Services';
import ContactUs from '@/components/ContactUs';
import { useState, useRef, useEffect } from 'react';
import Project3 from '@/components/Project3';
import Recommendation from '@/components/Recommendation';
import Lottie from 'lottie-react';
import AnimationData from '../../public/webdevAnimationData.json';
import Story from '@/components/Story';

export default function page() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 95.72) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", changeNav);
    return () => document.removeEventListener("scroll", changeNav);
  }, [])

  return (
    <div className="">
      <main className="min-h-screen bg-gradient-to-l  from-[#DF4848] to-[#4400a6]">
        <Navbar open={open} setOpen={setOpen} navbar={navbar} setNavbar={setNavbar} />
        <div className="flex items-center justify-center px-4 lg:flex-row  flex-col">
          {!open && (
            <div className="flex flex-col justify-start items-start text-red-950 mt-20">
              <p className="lg:text-6xl text-3xl font-bold max-w-3xl text-start text-white lg:max-w-[700px]">I prioritize <span className="capitalize text-primary">top-notch</span> solutions that guarantee customer satisfaction and deliver exceptional value.</p>
              <div className="flex flex-row items-center mt-4"> {/* Added a container for both buttons */}
                {/* Download CV button/link */}
                <a href="https://drive.google.com/file/d/1HkZYnk_Yxe14OrvxyIVS0EGMbmZqr3ub/view" download className="text-xl px-8 py-3 mb-6 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-4 transition-colors duration-300 mr-4">Download CV</a>
                {/* Book a Consultation button */}
                <button className="text-xl px-8 py-3 mb-6 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-4 transition-colors duration-300">Book a Consultation</button>
              </div>
            </div>
          )}
          <div className="lg:max-w-[500px] max-w-[300px]">
            <Lottie animationData={AnimationData} />
          </div>
        </div>

      </main>
      <About />
      <Services />
      {/* <Project3/> */}
      {/* <Projects/> */}
      {/* <Project2 /> */}
      <Recommendation />
      <Story />
      <ContactUs />
    </div>
  )
}
