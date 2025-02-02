import React from "react";
import { Outlet } from "react-router-dom";
import FloatingDock from "./components/FloatingDock";

const links = [
    {
        to: '/',
        icon: (
            <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 3.28L3 8v9a2 2 0 0 0 2 2h4v-5h2v5h4a2 2 0 0 0 2-2V8l-7-4.72z" />
            </svg>
        ),
        label: 'Home',
    },
    {
        to: "/about",
        icon: (
            <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M18 8a6 6 0 1 0-6 6 6 6 0 0 0 6-6zm-6 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                <path
                    fillRule="evenodd"
                    d="M3 18a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        label: 'About',
    },
    {
        to: '/skills',
        icon: (
            <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3z" />
                <path
                    fillRule="evenodd"
                    d="M5 9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        label: 'Settings',
    },
    {
        to: '/contact',
        icon: (
            <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M2 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3z" />
                <path
                    fillRule="evenodd"
                    d="M8 4h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        label: 'Contact',
    },
    {
        to: '/projects',
        icon: (
            <svg
                className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8z" />
                <path
                    fillRule="evenodd"
                    d="M2 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"
                    clipRule="evenodd"
                />
            </svg>
        ),
        label: 'Projects',
    },
];

const Portfolio = () => {
    return (
        <React.Fragment>
            <Outlet />
            <FloatingDock links={links} />
        </React.Fragment>
    );
};

export default Portfolio;
