import React from 'react'

function About() {
    return (
        <div>
            <header className='relative w-full h-[40.90rem] flex  flex-col md:flex-col lg:flex-row '>
                <div className='absolute inset-0 bg-Landing3 bg-cover bg-center'></div>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='flex flex-col relative justify-center items-center sm:items-start px-6 sm:px-12 md:px-24 lg:px-36  h-full text-white'>
                    <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-center sm:text-left'>
                        Know about <span className='text-sky-500'>us</span>
                    </h1>
                </div>
                <form className='flex flex-col relative items-center justify-center w-full md:w-auto bg-gray-800 bg-opacity-70 rounded-lg p-8'>
                    <div>
                        <h1 className='text-5xl font font-semibold text-white'>Leave a Reply</h1>
                        <br />
                        <p className='text-xl font font-normal text-sky-500'>Your email address will not be published. Required fields are marked</p>
                        <br />
                    </div>
                    <input className='w-80 h-12 p-3 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl' type='text' placeholder='Enter your name' />
                    <input className='w-80 h-12 p-3 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl' type='email' placeholder='Enter your email' />
                    <input className='w-80 h-12 p-3 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl' type='number' placeholder='Enter your mobile-no' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter you comment' className='w-80 min-h-[7rem] max-h-[7rem] p-4'></textarea>
                    <button className='bg-sky-500 mt-8 text-white px-6 py-3 rounded-md text-lg sm:text-xl font-semibold hover:bg-sky-400'>Post a Comment</button>
                </form>
            </header>
            <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap   w-full'>
                About<span className='ml-5 text-sky-500'>us</span>
            </h1>
            <div className="container mx-auto px-4 py-4">
                <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    The ultimate sanctuary for students seeking academic excellence.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    We’re not just another academic writing agency; we are a team of seasoned experts committed to elevating your academic journey.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    Established in 2015, our mission is to provide impeccable writing services that go beyond mere words. We aim to be your academic allies, guiding you through the labyrinth of assignments, research papers, dissertations, and much more.
                </p>
            </div>
            <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap   w-full'>
                Who we<span className='ml-5 text-sky-500'>are</span>
            </h1>
            <br />
            <p className='text-2xl font px-5 py-5 font-normal text-black'>You might wonder, “Why choose Uni Assignment Hub?” The answer is simple: Quality, Integrity, and personalization.</p>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4  mb-8">
                        <div className="bg-[#FFDB58] p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Quality</h2>
                            <p className="text-sm sm:text-base">
                                Our team consists of PhD holders, subject matter experts, and professional writers who deliver top-notch content that stands up to the highest academic standards.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-[#40E0D0] p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Integrity</h2>
                            <p className="text-sm sm:text-base">
                                We strictly adhere to academic guidelines and ethical conduct, ensuring each assignment is 100% original and plagiarism-free.Several checks are done  to ensure it.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-[#6A5ACD] p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Personalization</h2>
                            <p className="text-sm sm:text-base">
                                We believe that every student is unique, and so should be every assignment. Our personalized approach ensures that each project is tailored to meet your specific needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap   w-full'>
                Our<span className='ml-5 text-sky-500'>Vision</span>
            </h1>
            <br />
            <div className="bg-[#FF7F50] text-white py-12">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">Our Vision</h2> */}
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        At Uni Assignment Hub, our vision is to redefine the academic support industry by providing innovative solutions that empower students to excel in their educational journey.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        We aim to become the go-to platform for students worldwide, offering a wide range of services and resources designed to enhance learning outcomes and foster academic success.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        Our vision encompasses a commitment to:
                    </p>
                    <ul className="list-disc pl-6 mb-8">
                        <li className="text-lg sm:text-xl">Delivering exceptional quality in every aspect of our services.</li>
                        <li className="text-lg sm:text-xl">Maintaining the highest standards of professionalism and integrity.</li>
                        <li className="text-lg sm:text-xl">Continuously innovating and adapting to meet the evolving needs of students.</li>
                        <li className="text-lg sm:text-xl">Fostering a supportive and inclusive community where students feel empowered to succeed.</li>
                    </ul>
                    <p className="text-lg sm:text-xl md:text-2xl">
                        Together, we believe that we can revolutionize the way students approach their academic challenges and pave the way for a brighter future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
