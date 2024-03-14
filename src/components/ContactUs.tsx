import Image from 'next/image';
import React from 'react';
import LeftCard2 from '../../public/LeftCard3.svg';
import hr from '../../public/lg.png';

const ContactUs = () => {
  return (
    <div id="contact" className='flex lg:flex-row flex-col font-mono min-h-screen overflow-y-hidden text-gray-100'>
      {/* Left Card */}
      <div className='flex flex-col lg:min-w-[800px]  bg-contactUsLeft bg-cover bg-no-repeat px-10 pt-10'>
        <h1 className='text-start text-5xl font-bold'>Contact Me</h1>
        <div className='mt-10 text-xl flex flex-col space-y-10'>
          <p className='font-light font-mono max-w-[600px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eveniet numquam beatae magnam architecto tempore ipsa sunt itaque neque molestiae fuga error, aliquam consectetur voluptate nesciunt repellendus reiciendis aperiam non impedit ducimus voluptatum debitis laboriosam, aspernatur in. Atque ab quis excepturi itaque magni rerum dicta sapiente aliquid adipisci, accusantium dolorem?</p>
          {/* GitHub Button */}
          <a href="https://github.com/saadrehman171000" target="_blank" rel="noopener noreferrer" className="text-base lg:text-xl px-4 lg:px-8 py-2 lg:py-3 mb-4 lg:mb-6 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-4 transition-colors duration-300 inline-block lg:inline">GitHub</a>
          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/saadrehman17100/" target="_blank" rel="noopener noreferrer" className="text-base lg:text-xl px-4 lg:px-8 py-2 lg:py-3 mb-4 lg:mb-6 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-4 transition-colors duration-300 inline-block lg:inline">LinkedIn</a>
          {/* Email Button */}
          <a href="mailto:saadrehman17100@gmail.com" className="text-base lg:text-xl px-4 lg:px-8 py-2 lg:py-3 mb-4 lg:mb-6 hover:bg-black hover:text-white hover:outline-none outline text-white outline-white rounded-3xl mt-4 transition-colors duration-300 inline-block lg:inline">Email Me</a>
          <p className='text-2xl font-bold'>Or</p>
          <p className='text-xl'>Call Me on <span className='text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300'>+923150777326</span></p>
        </div>
        <div className='flex flex-row space-x-3'>
          <Image src={hr} alt="HrImage" width={80} height={80} className='rounded-full'></Image>
          <div className="flex flex-col space-y-0 items-start justify-center">
            <h1 className='text-xl font-bold'>Saad Rehman</h1>
            <p className='text-white font-bold underline hover:text-blue-500 cursor-pointer transition-colors duration-300'>saadrehman17100@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Right Card */}
      <div className='pt-10 w-full bg-slate-100'>
        <h1 className='text-4xl text-center font-bold text-black'>Lets Discuss Your Project</h1>
        <div className='mt-5 flex items-center justify-center' >
          <form className='flex flex-col px-5 space-y-16 items-start w-full bg-white lg:px-20 py-10  shadow-xl' action="">
            <input type="text" className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-300" placeholder='Name' />
            <input type="text" className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-300" placeholder='Email' />
            <input type="text" className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-300" placeholder='Contact Number' />
            <input type="text" className="outline-none rounded-lg text-xl py-3 px-3 bg-slate-100 w-full text-primary placeholder:text-slate-300" placeholder='Project Description' />
            <button className='ml-auto px-12 rounded-lg hover:bg-primary text-xl font-semibold py-3 text-black outline outline-primary transition-colors duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </div>  
  )
}

export default ContactUs;
