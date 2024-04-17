import React from 'react';

function Services() {
    return (
        <>
            <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap w-full'>
                Our<span className='ml-5 text-sky-500'>Services</span>
            </h1>
            <div className=" relative h-auto lg:h-[60rem] w-full flex  justify-center items-center flex-wrap">
                <div className='absolute inset-0 bg-Landing2 bg-cover bg-center'></div>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceSection
                        title="Coding Assignment Services"
                        items={[
                            "Java Programming Assignments",
                            "Python Coding Projects",
                            "C++ Homework Help",
                            "JavaScript Challenges"
                        ]}
                    />
                    <ServiceSection
                        title="Professional Writing Services"
                        items={[
                            "Content Writing",
                            "Copywriting",
                            "Editing and Proofreading",
                            "Technical Writing",
                            "Creative Writing"
                        ]}
                    />
                    <ServiceSection
                        title="Academic Writing Services"
                        items={[
                            "Essay Writing",
                            "Research Paper Writing",
                            "Thesis and Dissertation Writing",
                            "Term Paper Writing",
                            "Literature Review"
                        ]}
                    />
                    <ServiceSection
                        title="AI/ML Assignment Tasks"
                        items={[
                            "Machine Learning Algorithms Implementation",
                            "Data Analysis Projects",
                            "Neural Network Development",
                            "Natural Language Processing Tasks"
                        ]}
                    />
                    <ServiceSection
                        title="Android Development Assignment Tasks"
                        items={[
                            "Android App Development",
                            "UI/UX Design for Android Apps",
                            "Mobile Application Testing",
                            "Integration of APIs and Libraries"
                        ]}
                    />
                    <ServiceSection
                        title="Data Analysis"
                        items={[
                            "Python ",
                            "Power BI",
                            "MS-Excel",
                            "Tableau"
                        ]}
                    />
                </div>
            </div>
        </>
    );
}

function ServiceSection({ title, items }) {
    return (
        <div className="bg-white relative w-auto m-10 h-[20rem] flex items-center flex-col justify-center p-6 transform transition-transform duration-300 hover:scale-110 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
            <ul className="list-disc list-inside">
                {items.map((item, index) => (
                    <li key={index} className="text-base sm:text-lg">{item}</li>
                ))}
            </ul>
            <button className='bg-sky-500 text-white px-6 py-3 rounded-md m-4 text-lg sm:text-xl font-semibold hover:bg-sky-400'>Want Help?</button>
        </div>
    );
}

export default Services;
