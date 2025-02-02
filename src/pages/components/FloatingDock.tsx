import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface FloatingDockProps {
    links: {
        to: string;
        label: string; // Removed the icon
    }[];
}

const FloatingDock: React.FC<FloatingDockProps> = ({ links }) => {
    const location = useLocation();
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    return (
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-800 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full mx-auto grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-3">
                {links.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center group relative`}
                    >
                        <button
                            onClick={() => navigate(item.to)} // Handle navigation on button click
                            className={`inline-flex flex-col items-center justify-center px-5 py-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${location.pathname === item.to ? "bg-blue-500 text-white" : "text-gray-500 dark:text-gray-400"
                                }`}
                            style={{ position: 'relative', zIndex: 10 }} // Ensure button is clickable and on top
                        >
                            <span className="text-sm font-medium">{item.label}</span>
                        </button>
                        <div
                            className="absolute z-10 hidden group-hover:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-100 tooltip dark:bg-gray-700"
                        >
                            {item.label}
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FloatingDock;
