import React, { useState, useEffect } from "react";

function NavBar() {
    // 1. State to track which section is currently active on screen
    const [activeSection, setActiveSection] = useState("home");
    const navLinks = ["Home", "Projects", "Experience", "About", "Contact"];

    // 2. Set up the IntersectionObserver for the scrollspy effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Triggers when 50% of the section is visible
        );

        // Target all section tags on the page
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        // Changed "absolute" to "fixed" to keep it pinned to the top
        <nav className="w-full fixed top-0 left-0 z-50 p-8">
            <ul className="flex justify-end items-center gap-10 max-w-7xl mx-auto">
                {navLinks.map((link) => {
                    const sectionId = link.toLowerCase();
                    const isActive = activeSection === sectionId;

                    return (
                        <li key={link} className="group relative">
                            <a
                                href={`#${sectionId}`}
                                className={`text-base font-semibold transition-colors duration-300 ${
                                    isActive
                                        ? "text-gray-900 dark:text-white" // Active text style
                                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" // Inactive text style
                                }`}
                            >
                                {link}
                            </a>
                            
                            {/* Animated Underline */}
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 dark:bg-white transition-all duration-300 group-hover:w-full ${
                                    isActive ? "w-full" : "w-0" // Keeps the line full-width if active
                                }`}
                            ></span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default NavBar;