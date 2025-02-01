"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
    { path: "/", label: "home" },
    { path: "/contact", label: "contact" },
    { path: "/discover", label: "discover" },
    { path: "/profile", label: "profile" }
];

const Menu = () => {
    const container = useRef(null);
    const menuOverlay = useRef(null);
    const menuLinksRef = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(menuLinksRef.current, { y: 75, opacity: 0 });

            tl.current = gsap.timeline({ paused: true })
                .to(menuOverlay.current, {
                    duration: 1.25,
                    clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    ease: "power4.inOut"
                })
                .to(menuLinksRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.inOut",
                    delay: -0.75,
                });
        }, container);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (tl.current) {
            isMenuOpen ? tl.current.play() : tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/">home</Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div ref={menuOverlay} className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link href="/">homepage</Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className="menu-close-icon" onClick={toggleMenu}>
                    <p>&#x2715;</p>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div
                                    className="menu-link-item-holder"
                                    onClick={toggleMenu}
                                    ref={(el) => (menuLinksRef.current[index] = el)}
                                >
                                    <Link href={link.path} className="menu-link">
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
