import React from 'react';

function Services() {
    return (
        <>
            <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap w-full'>
                Our<span className='ml-5 text-sky-500'>Services</span>
            </h1>
            <div className=" relative h-auto lg:h-[40rem] w-full flex  justify-center items-center flex-wrap">
                <div className='absolute inset-0 bg-Landing2 bg-cover bg-center'></div>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="flex flex-wrap justify-between items-center">
                        <div className="bg-white relative w-auto m-10 h-[20rem] flex items-center flex-col justify-center p-6 transform transition-transform duration-300 hover:scale-110 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Coding Assignment Services</h2>
                            <ul className="list-disc list-inside">
                                <li className="text-base sm:text-lg">Java Programming Assignments</li>
                                <li className="text-base sm:text-lg">Python Coding Projects</li>
                                <li className="text-base sm:text-lg">C++ Homework Help</li>
                                <li className="text-base sm:text-lg">JavaScript Challenges</li>
                            </ul>
                             <button className='bg-sky-500 text-white px-6 py-3 rounded-md m-4 text-lg sm:text-xl font-semibold hover:bg-sky-400'>Want Help?</button>
                        </div>
                        <div className="bg-white relative flex items-center flex-col justify-center w-auto m-10 h-[20rem] p-6 transform transition-transform duration-300 hover:scale-110 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Professional Writing Services</h2>
                            <ul className="list-disc list-inside">
                                <li className="text-base sm:text-lg">Content Writing</li>
                                <li className="text-base sm:text-lg">Copywriting</li>
                                <li className="text-base sm:text-lg">Editing and Proofreading</li>
                                <li className="text-base sm:text-lg">Technical Writing</li>
                                <li className="text-base sm:text-lg">Creative Writing</li>
                            </ul>
                             <button className='bg-sky-500 text-white px-6 py-3 rounded-md m-4 text-lg sm:text-xl font-semibold hover:bg-sky-400'>Want Help?</button>
                        </div>
                        <div className="bg-white relative w-auto m-10 h-[20rem] flex items-center flex-col justify-center p-6 transform transition-transform duration-300 hover:scale-110 rounded-lg shadow-lg">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Academic Writing Services</h2>
                            <ul className="list-disc list-inside">
                                <li className="text-base sm:text-lg">Essay Writing</li>
                                <li className="text-base sm:text-lg">Research Paper Writing</li>
                                <li className="text-base sm:text-lg">Thesis and Dissertation Writing</li>
                                <li className="text-base sm:text-lg">Term Paper Writing</li>
                                <li className="text-base sm:text-lg">Literature Review</li>
                            </ul>
                             <button className='bg-sky-500 text-white px-6 py-3 rounded-md m-4 text-lg sm:text-xl font-semibold hover:bg-sky-400'>Want Help?</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Services;
