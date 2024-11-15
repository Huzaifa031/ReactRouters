import React from 'react';

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  {/* Image Section */}
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://xclcamps.com/wp-content/uploads/coding-difference-1.jpg"
                          alt="About Me"
                          className="rounded-lg shadow-lg"
                      />
                  </div>
                  
                 
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          About Me
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Hello! I'm <strong>Huzaifa</strong>, a passionate front-end developer and UI/UX designer. I specialize in creating intuitive, user-friendly, and visually appealing digital experiences that leave a lasting impression.
                      </p>
                      <p className="mt-4 text-gray-600">
                          With expertise in technologies like React, JavaScript, and Figma, I craft responsive and engaging interfaces tailored to user needs. My goal is to bridge the gap between aesthetics and functionality, ensuring seamless user journeys.
                      </p>
                      <p className="mt-4 text-gray-600">
                          When I’m not coding, you can find me exploring new design trends or honing my skills in creating innovative web solutions.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
