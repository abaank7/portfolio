import { useState, useEffect } from "react";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");
    const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
        );

        navLinks.forEach((link) => {
            const element = document.getElementById(link.toLowerCase());
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [navLinks]);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <ul className="flex items-center gap-2 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                {navLinks.map((link) => {
                    const sectionId = link.toLowerCase();
                    const isActive = activeSection === sectionId;

                    return (
                        <li key={link}>
                            <a
                                href={`#${sectionId}`}
                                className={`block px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    isActive
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                            >
                                {link}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}