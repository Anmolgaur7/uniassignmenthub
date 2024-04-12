import React from 'react';
import i1 from "../Images/i1.gif";
import i2 from "../Images/i2.gif";
import i3 from "../Images/i3.gif";
import i4 from "../Images/i4.gif";
import i5 from "../Images/i5.gif";
import i6 from "../Images/i6.gif";
import Services from '../Components/Services';
import Testemonils from '../Components/Testemonils';


function Main() {
  return (
    <div className='gap-30'>
      <header className='relative w-full h-[40.90rem] flex  flex-col md:flex-col lg:flex-row '>
        <div className='absolute inset-0 bg-Landing bg-cover bg-center'></div>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='flex flex-col relative justify-center items-center sm:items-start px-6 sm:px-12 md:px-24 lg:px-36  h-full text-white'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-center sm:text-left'>
            Elevate Your <span className='text-sky-500'>Studies</span>
          </h1>
        </div>
        <form className='flex flex-col relative items-center justify-center w-full md:w-auto bg-gray-800 bg-opacity-70 rounded-lg p-8'>
          <input className='w-80 h-12 p-3 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl' type='text' placeholder='Enter your email' />
          <select className='w-80 h-12 p-2 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl'>
            <option value='0'>Select your field</option>
            <option value='software/hardware'>Software/Hardware</option>
            <option value='professional-writing'>Professional Writing</option>
            <option value='academic-writing'>Academic Writing</option>
          </select>
          <button className='bg-sky-500 text-white px-6 py-3 rounded-md text-lg sm:text-xl font-semibold hover:bg-sky-400'>Get a Quote</button>
        </form>
      </header>
      <div className='flex justify-center items-center gap flex-wrap px-4 sm:px-0'>
        <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap   w-full'>
          Why choose <span className='ml-5 text-sky-500'>us?</span>
        </h1>
        <div className='w-full p-5 bg-[#4169E1] hover:bg-[#FF6347] m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8'>
          <div className='flex justify-center items-center'>
            <img src={i1} alt="sa" className='w-[15rem] h-[15rem] m-3 rounded-full' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Quality You Can Trust</h2>
          <p className='text-sm sm:text-base'>Our experts are highly qualified and experienced in their fields. They are dedicated to providing you with the best quality work.</p>
        </div>
        <div className='w-full p-5 bg-[#FFDB58] hover:bg-[#40E0D0]  m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8'>
        <div className='flex justify-center items-center'>
            <img src={i2} alt="sa" className='w-[15rem] h-[15rem] m-3 rounded-full' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>On-Time Delivery</h2>
          <p className='text-sm sm:text-base'>We understand the importance of deadlines. Our experts are committed to delivering your work on time.</p>
        </div>
        <div className='w-full p-5 bg-[#DAA520] hover:bg-[#6A5ACD] m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8'>
        <div className='flex justify-center items-center'>
            <img src={i3} alt="sa" className='w-[15rem] h-[15rem] m-3 rounded-full' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>24/7 Support</h2>
          <p className='text-sm sm:text-base'>Our customer support team is available 24/7 to help you with any queries or concerns you may have.</p>
        </div>
        <div className='w-full p-5 bg-[#40E0D0] hover:bg-[#808000] m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8'>
        <div className='flex justify-center items-center'>
            <img src={i4} alt="sa" className='w-[15rem] h-[15rem] m-3 rounded-full' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>100% Satisfaction Guarantee</h2>
          <p className='text-sm sm:text-base'>We are confident in the quality of our work. If you are not satisfied with the final product, we will revise it until you are happy.</p>
        </div>
        <div className='w-full p-5 bg-[#6A5ACD] hover:bg-[#FFDB58] m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8'>
        <div className='flex justify-center items-center'>
            <img src={i5} alt="sa" className='w-[15rem] h-[15rem] m-3 rounded-full' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Professional Team</h2>
          <p className='text-sm sm:text-base'>Our experienced and dedicated team is committed to delivering results that exceed your expectations.</p>
        </div>

        <div className='w-full p-5 bg-[#FF6347] hover:bg-[#708090] m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8'>
        <div className='flex justify-center items-center'>
            <img src={i6} alt="sa" className='w-[15rem] h-[15rem] m-3 rounded-full' />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>Innovative Solutions</h2>
          <p className='text-sm sm:text-base'>We offer innovative solutions tailored to your specific requirements, helping you achieve your goals efficiently.</p>
        </div>
      </div>
      <Services/>
      <Testemonils/>
    </div>
  );
}

export default Main;
