import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Submitform() {
    const [files, setFiles] = useState([]);

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(droppedFiles);
    };

    const handleInputChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleClear = () => {
        setFiles([]);
    };
    const navigate = useNavigate()

    return (
        <div>
            <div class="flex flex-col bg-log1 bg-cover bg-opacity-65 border-black border  items-center justify-center gap-2 p-10 md:flex-row">
                <section id="generalothers">
                    <label class="block mt-4 mb-2 text-center text-4xl font-semibold">General Details Section</label>
                    <div class="flex flex-col md:w-[45rem] w-[20rem]">
                        <br />
                        <label class="text-lg font-semibold text-gray-700">Level of Assignment</label>
                        <div class="flex flex-wrap items-center justify-center w-full gap-3 py-3">
                            <div className='flex  justify-center items-center'>
                                <label for="diploma" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="diploma" value="Diploma" />
                                    Diploma
                                </label>
                            </div>
                            <div className='flex  justify-center items-center'>
                                <label for="bachelors" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="bachelors" value="Bachelors" />

                                    Bachelors
                                </label>
                            </div>
                            <div className='flex  justify-center items-center'>
                                <label for="masters" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="masters" value="Masters" />

                                    Masters
                                </label>
                            </div>
                            <div className='flex  justify-center items-center'>
                                <label for="phd" class="flex items-center justify-center gap-2 px-3 py-2 mx-1 my-1 text-gray-900 border rounded-md cursor-pointer hover:border-gray-200 hover:bg-white transition-colors">
                                    <input type="radio" name="level" id="phd" value="PhD" />
                                    PhD
                                </label>
                            </div>
                        </div>

                        <label class="text-lg font-semibold text-gray-700">Assignment Title</label>
                        <div class="w-full mb-3">
                            <input type="text" id="title" name="title" placeholder="Enter the title of your Assignment" required
                                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline" />
                        </div>
                        <label class="text-lg font-semibold text-gray-700">Assignment Description</label>
                        <div class="w-full mb-3">
                            <textarea id="description" name="description" rows="5"
                                placeholder="Describe in more than 100 words about detailed requirements and what is to be done in the assignment."
                                required class="w-full min-h-[10rem] max-h-[10rem] px-3 py-2 leading-tight text-gray-700 border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                    </div>
                    <div className="border border-dashed w-[22rem] bg-slate-100 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center gap-4"
                        onDrop={handleDrop}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <div className='mx-5 my-5'>
                            <div className="text-gray-500 text-center">
                                <p>Drag and drop your files here</p>
                                <p>or</p>
                                <label htmlFor="fileInput" className="cursor-pointer text-blue-600 font-semibold">click to browse</label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    multiple
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        {files.length > 0 && (
                            <div>
                                <h3>Selected Files:</h3>
                                <ul>
                                    {files.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                                <button onClick={handleClear}>Clear</button>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className="bg-orange-500 hover:bg-blue-500 text-white text-center font-semibold py-2 px-4 rounded-md w-[15rem] mt-4" onClick={() => { navigate('/dashboard') }}>  Submit</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Submitform
