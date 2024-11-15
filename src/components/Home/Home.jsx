import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
          
            <aside className="relative text-black rounded-lg sm:mx-16 mx-4 sm:py-16 py-10">
                <div className="relative z-10 max-w-screen-xl px-6 pb-16 pt-8 sm:py-20 mx-auto flex flex-col-reverse sm:flex-row items-center">
                  
                    <div className="sm:w-1/2 w-full text-center sm:text-left sm:mr-8">
                        <h2 className="text-3xl font-bold sm:text-5xl">
                            Welcome to My Portfolio
                            <span className="block text-2xl sm:text-4xl mt-2 sm:mt-4">
                                Crafting User-Centric Experiences
                            </span>
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-gray-600">
                            Hi, I'm Huzaifa, a passionate front-end developer and UI/UX designer. Explore my projects and let's build something amazing together.
                        </p>
                        <Link
                            className="inline-flex items-center px-6 py-3 mt-6 font-medium text-white bg-blue-700 rounded-lg hover:opacity-80 transition duration-300"
                            to="https://github.com/huzaifa031"
                        >
                          
                            <span className="ml-2">View My Work</span>
                        </Link>
                    </div>
                    
                    <div className="sm:w-1/2 w-full flex justify-center sm:justify-end">
                        <img
                            className="w-64 sm:w-96"
                            src="https://camo.githubusercontent.com/2366b34bb903c09617990fb5fff4622f3e941349e846ddb7e73df872a9d21233/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966"
                            alt="portfolio-hero"
                        />
                    </div>
                </div>
            </aside>

            
            <div className="text-center py-12 sm:py-20 px-4 sm:px-8">
                <h1 className="text-2xl sm:text-4xl font-bold">About Me</h1>
                <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
                    I'm a Software Engineer with a passion for creating user-friendly, visually appealing, and responsive websites. My expertise lies in front-end development using React and crafting intuitive UI/UX designs with Figma.
                </p>
            </div>

           
            <div className="grid place-items-center py-8 sm:py-16 px-4">
                <h2 className="text-xl sm:text-3xl font-bold mb-6">My Skills</h2>
                <img
                    className="sm:w-80 w-48 mb-4"
                    src="https://media.licdn.com/dms/image/D5612AQGOmwfIE5mlWA/article-cover_image-shrink_720_1280/0/1674617947228?e=2147483647&v=beta&t=FTU_isQ6VYfV5D_ueFHPWvT8ZqgDeJG3yr8Mi8lpfk0"
                    alt="skills"
                />
                <p className="mt-2 text-sm sm:text-lg text-gray-600 text-center max-w-xl">
                    HTML, CSS, JavaScript, React.js, Python, UI/UX Design, Figma, Responsive Design, API Integration.
                </p>
            </div>

           
            <footer className="text-center py-8 bg-gray-100">
                <h3 className="text-base sm:text-lg font-medium">Let’s Connect</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-900">
                    huzaifas790@gmail.com | LinkedIn: <a href="https://linkedin.com/in/muhammad-huzaifa-saleem-37429b217/" target="_blank" className="text-blue-700 hover:underline">linkedin.com/in/muhammad-huzaifa-saleem</a>
                </p>
            </footer>
        </div>
    );
}
