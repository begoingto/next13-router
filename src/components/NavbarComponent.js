'use client';

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";


function NavbarComponent() {

    const pathname= usePathname();
    if (pathname.includes("auth")) return null

    const active = (path) => (pathname === path ? "text-red-600": "")

    return (

        <nav className="bg-gray-900 text-white sticky z-20 top-0 border-bottom border-amber-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-0">
                <Link href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BEGOINGTO</span>
                </Link>
                <div className="flex md:order-2">
                    <Link href="/dashboard"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dashboard
                    </Link>
                    <button data-collapse-toggle="navbar-cta" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white bg-transparent">
                        <li>
                            <Link href="/"
                               className={"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 "+ active("/")}
                               aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about"
                               className={"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 "+active("/about")}>About</Link>
                        </li>
                        <li>
                            <Link href="/auth/login"
                               className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">Login</Link>
                        </li>
                        <li>
                            <Link href="#"
                               className={"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 "}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;