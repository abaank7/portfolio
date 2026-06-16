import { useState, useEffect } from "react";

const NAV_LINKS = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
];

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-100px 0px -60% 0px",
                threshold: 0,
            }
        );

        NAV_LINKS.forEach((link) => {
            const section = document.getElementById(link.toLowerCase());
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <ul className="flex items-center gap-1 p-1.5 rounded-full bg-[#101012]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                {NAV_LINKS.map((link) => {
                    const sectionId = link.toLowerCase();
                    const isActive = activeSection === sectionId;

                    return (
                        <li key={link}>
                            <a
                                href={`#${sectionId}`}
                                className={`block px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    isActive
                                        ? "bg-white/10 text-white shadow-sm"
                                        : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
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