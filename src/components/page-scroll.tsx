"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgressBar() {
    const [scrollWidth, setScrollWidth] = useState(0);
    const animationFrame = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
            // animationFrame.current =
            requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const progress = (scrollTop / docHeight) * 100;
                setScrollWidth(progress);
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 bg-transparent z-[9999]">
            <div
                className="h-full bg-[#C0AA83] transition-[width] ease-linear duration-150"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
}
