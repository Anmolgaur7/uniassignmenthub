import { useState } from 'react';
import { useEffect } from 'react';

// Define your reviews array here
const reviews = [
    { title: 'Great Product', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem!', author: 'John Doe' },
    { title: 'Excellent Service', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quas.', author: 'Jane Smith' },
    { title: 'Highly Recommend', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quidem!', author: 'Alice Johnson' },
];

function Slider() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((currentReview + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentReview]);

    const nextSlide = () => {
        setCurrentReview((currentReview + 1) % reviews.length);

    };

    const prevSlide = () => {
        setCurrentReview((currentReview - 1) % reviews.length);

    };

    return (
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-28">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-6xl font-extrabold tracking-tight  text-gray-900 ">
                        What people are saying <p className='text-sky-500'>about</p> us? 
                    </h2>
                    <p className='p-5 text-xl font-normal'>At Uniassignmenthub, we take pride in delivering top-quality assignments that exceed our clients' expectations. But don't just take our word for it. Here's what some of our satisfied clients have to say:</p>
                    <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                        <button
                            aria-label="Previous slide"
                            onClick={prevSlide}
                            className="rounded-full border border-sky-500 p-3 text-sky-500 transition hover:bg-sky-500 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 rtl:rotate-180"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>

                        <button
                            aria-label="Next slide"
                            onClick={nextSlide}
                            className="rounded-full border border-sky-500 p-3 text-sky-500 transition hover:bg-sky-500 hover:text-white"
                        >
                            <svg
                                className="size-5 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 5l7 7-7 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="-mx-6 lg:col-span-2 lg:mx-0 ">
                    <div className="keen-slider">
                        {
                            <div className={`keen-slider__slide`}>
                                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex  pl-10 pt-10 bg-slate-200 text-green-500">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <div className=" shadow-lg pl-10 bg-slate-200">
                                            <p className="text-2xl font-bold text-sky-500 sm:text-3xl">{reviews[currentReview].title}</p>

                                            <p className="mt-4 leading-relaxed pb-10 text-gray-700">{reviews[currentReview].content}</p>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                    aria-label="Previous slide"
                    onClick={prevSlide}
                    className="rounded-full border border-sky-500 p-4 text-sky-500 transition hover:bg-sky-500 hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 rtl:rotate-180"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <button
                    aria-label="Next slide"
                    onClick={nextSlide}
                    className="rounded-full border border-s

ky-500 p-4 text-sky-500 transition hover:bg-sky-500 hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 19.5l7.5-7.5-7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Slider;