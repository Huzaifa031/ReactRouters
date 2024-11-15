import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState({}); // Initialize with an empty object

    useEffect(() => {
        fetch('https://api.github.com/users/Huzaifa031')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1">
                <div className="text-center">
                   
                    <img
                        src={data.avatar_url}
                        alt="GitHub Avatar"
                        className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-gray-300 transition duration-300 hover:scale-105"
                    />

                   
                    <h2 className="text-2xl font-semibold mt-4 text-gray-900">
                        {data.name || "GitHub User"}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">@{data.login}</p>

                    
                    <div className="mt-6">
                        <span className="text-lg font-bold text-gray-700">
                            Followers: {data.followers}
                        </span>
                    </div>

                   
                    {data.bio && (
                        <p className="mt-4 text-gray-600 italic">
                            "{data.bio}"
                        </p>
                    )}

                    
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 bg-orange-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Github;
