import React, { useState } from 'react';

const BlogPage = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [votes, setVotes] = useState({});

    const blogs = [
        { 
          id: 1, 
          title: '10 Healthy Recipes for Busy Weeknights', 
          content: `
            Are you tired of ordering takeout or relying on frozen dinners during the week? It's time to take control of your meals with these 10 healthy recipes that are perfect for busy weeknights. From quick stir-fries to hearty soups, these recipes are not only delicious but also nutritious, helping you stay on track with your health goals.
      
            Each recipe is designed to be simple and easy to prepare, requiring minimal ingredients and cooking time. Whether you're a novice cook or a seasoned chef, you'll find something to love in this collection of healthy and satisfying dishes.
      
            Say goodbye to the stress of meal planning and hello to delicious, homemade meals that you can feel good about. With these 10 recipes in your arsenal, you'll never have to sacrifice taste for convenience again.
          `
        },
        { 
          id: 2, 
          title: 'Effective Study Habits for Academic Success', 
          content: `
            Achieving academic success requires more than just attending class and completing assignments. It also requires developing effective study habits that allow you to retain information, stay organized, and perform your best on exams and projects.
      
            In this blog post, we'll explore some proven study techniques and strategies that can help you succeed in school. From creating a study schedule to finding the right environment for learning, we'll cover everything you need to know to improve your study habits and boost your grades.
      
            Whether you're a high school student preparing for exams or a college student navigating a heavy course load, these study tips will help you maximize your academic potential and achieve your goals.
          `
        },
        { 
          id: 3, 
          title: 'Tips for Improving Sleep Quality', 
          content: `
            Quality sleep is essential for overall health and well-being. Yet, many people struggle to get the rest they need due to stress, poor sleep habits, and other factors. If you find yourself tossing and turning at night or waking up feeling tired and groggy, it may be time to make some changes to improve your sleep quality.
      
            In this blog post, we'll share some tips and tricks for getting better sleep. From creating a relaxing bedtime routine to optimizing your sleep environment, we'll cover everything you need to know to achieve a restful night's sleep.
      
            Say goodbye to restless nights and hello to rejuvenating sleep that leaves you feeling refreshed and ready to tackle the day ahead. With these simple yet effective tips, you can improve your sleep quality and enjoy all the benefits of a good night's rest.
          `
        },
        { 
          id: 4, 
          title: 'How to Start a Successful Blog', 
          content: `
            Have you ever dreamed of starting your own blog? Whether you want to share your passion for a particular topic, showcase your expertise, or even make money online, blogging can be a rewarding and fulfilling endeavor.
      
            In this comprehensive guide, we'll walk you through everything you need to know to start a successful blog from scratch. From choosing a niche and selecting a platform to creating compelling content and promoting your blog, we'll cover all the essential steps to help you launch and grow your blog.
      
            Whether you're a complete beginner or a seasoned blogger looking to take your blog to the next level, this guide has something for everyone. Get ready to turn your blogging dreams into reality and join the thriving community of bloggers around the world.
          `
        },
        { 
          id: 5, 
          title: 'Effective Stress Management Techniques', 
          content: `
            Stress is a normal part of life, but too much stress can take a toll on your physical and mental health. If you find yourself feeling overwhelmed by stress, it's important to take proactive steps to manage it effectively.
      
            In this blog post, we'll explore some proven stress management techniques that can help you reduce stress and improve your overall well-being. From deep breathing exercises to mindfulness meditation, we'll cover a variety of strategies that you can incorporate into your daily routine to help you cope with stress more effectively.
      
            Say goodbye to stress-induced headaches, fatigue, and irritability, and hello to a calmer, more relaxed state of mind. With these simple yet powerful techniques, you can take control of your stress and live a happier, healthier life.
          `
        } 
        ]      

    const handleBlogClick = (blogId) => {
        setSelectedBlog(blogId);
        if (!votes[blogId]) {
            setVotes({ ...votes, [blogId]: 0 });
        }
    };

    const handleUpvote = () => {
        setVotes({ ...votes, [selectedBlog]: votes[selectedBlog] + 1 });
    };

    const BlogContent = ({ blogId }) => {
        if (!blogId) return <div className="bg-log1 h-svh bg-cover pt-[5rem]"><p className='text-center font-semibold text-xl bg-orange-200 p-5'>Please select a blog from the list.</p></div>;

        const selectedBlogData = blogs.find((blog) => blog.id === blogId);

        return (
            <div className='bg-log1 h-full p-5 bg-cover'>
                <h2 className="text-3xl font-bold mb-4">{selectedBlogData.title}</h2>
                <p className="text-xl bg-orange-200 font-medium p-10 h-[20rem] overflow-scroll text-gray-800 lg:overflow-hidden">{selectedBlogData.content}</p>
                <div className="flex items-center mt-4">
                    <button onClick={handleUpvote} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Upvote ({votes[selectedBlog]})
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Side Panel */}
            <div className="lg:w-1/4 bg-white shadow-md p-4 ">
                <h2 className="text-2xl font-bold mb-4">Uniassignment Blogs</h2>
                <ul className="space-y-2 w-full flex overflow-scroll justify-center items-center lg:flex-col lg:overflow-hidden ">
                    {blogs.map((blog) => (
                        <li key={blog.id} className="cursor-pointer">
                            <button
                                onClick={() => handleBlogClick(blog.id)}
                                className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full w-full truncate"
                            >
                                {blog.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Blog Content */}
            <div className="md:flex-1 p-4 bg-gray-100 h-screen overflow-y-auto">
                <BlogContent blogId={selectedBlog} />
            </div>
        </div>
    );
};

export default BlogPage;
