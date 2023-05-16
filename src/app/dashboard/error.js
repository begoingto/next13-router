"use client"
import React, {useEffect} from 'react';

function Error({error, reset}) {

    useEffect(() => {
        console.log(error)
    },[error])

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col justify-center">
                <h1>Something went wrong...</h1>
                <br/>
                <button type="button"
                        onClick={() => reset()}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Try again
                </button>
            </div>
        </div>
    );
}

export default Error;