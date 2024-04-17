import React from 'react';

const Samples = () => {
  // Define your downloadable content here
  const samples = [
    { title: 'Blood Sampling', type: 'docx', url: require('../Downloaddata/Blood-sampling.docx') },
    { title: 'Bussiness', type: 'docx', url: require('../Downloaddata/Bussiness.docx') },
    { title: 'Blog', type: 'docx', url: require('../Downloaddata/BLOG.docx') },
    { title: 'Avatars', type: 'docx', url: require('../Downloaddata/Avatars.docx') },
    { title: 'Heath Promotion Planning', type: 'docx', url: require('../Downloaddata/HeathPromotionPlanning.docx') },
    { title: 'Legal-Essay', type: 'docx', url: require('../Downloaddata/Legal-Essay.docx') },
    { title: 'Linear Regression', type: 'docx', url: require('../Downloaddata/Linearregression.docx') },
    { title: 'Marketing', type: 'docx', url: require('../Downloaddata/Marketing.docx') },
    { title: 'Scientific report', type: 'docx', url: require('../Downloaddata/Scientific report.docx') },
    { title: 'Tourisim ', type: 'docx', url: require('../Downloaddata/Tourisim assignm.docx') },
    { title: 'Thesis-Statement', type: 'docx', url: require('../Downloaddata/Thesis-Statement.docx') },
    { title: 'Thesis', type: 'docx', url: require('../Downloaddata/Thesis.docx') },
    { title: 'Data Analysis', type: 'pptx', url: require('../Downloaddata/Dataanalysis.pptx') },
    { title: 'Drug Analysis', type: 'pptx', url: require('../Downloaddata/Drug-Analysis.pptx') },
    // Add more samples as needed
  ];

  return (
    <>
      <header className='relative w-full lg:h-[30.78rem] h-auto flex flex-col lg:flex-row'>
        <div className='absolute inset-0 bg-log1 bg-cover bg-center'></div>
        {/* <div className='absolute inset-0 bg-black opacity-10'></div> */}
        <div className="mx-auto relative max-w-[1340px] px-4 sm:px-6 lg:px-8 xl:px-0 py-12 sm:py-16 lg:py-24">
          <div className="mb-8 text-center lg:text-left">
            <h1 className='text-4xl flex   flex-wrap justify-center items-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center'>
            Available<span className='text-sky-500 ml-2 lg:ml-4'>Samples</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700">Unleash your creativity with our exclusive collection of Available samples.</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 p-20 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {samples.map((sample, index) => (
          <div key={index} className="p-6 bg-orange-200 shadow-2xl rounded-lg">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{sample.title}</h3>
              <span className="text-sm font-semibold text-gray-600">{sample.type}</span>
            </div>
            <a
              href={sample.url}
              download
              className="block px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-orange-500 transition duration-700 ease-in-out text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Download
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Samples;
