"use client";

import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 2000);
  }, []);

  useEffect(() => {
    const hero2 = document.querySelector(".page-content.hero2");
    const textWords = document.querySelectorAll(".text-word");

    if (!hero2 || !textWords.length) return;

    const handleMouseEnter = () => {
      gsap.to(".image", {
        opacity: 1,
        scale: 1,
        x: (index) => index * 220,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });

      gsap.fromTo(
        textWords,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    };

    const handleMouseLeave = () => {
      gsap.to(".image", {
        opacity: 0,
        scale: 0,
        x: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      gsap.to(textWords, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
      });
    };

    hero2.addEventListener("mouseenter", handleMouseEnter);
    hero2.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero2.removeEventListener("mouseenter", handleMouseEnter);
      hero2.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="page-content hero" style={{ position: "relative" }}>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Spline scene="https://prod.spline.design/rdY5Noxnujzn3hF0/scene.splinecode" />

          {showText && (
            <div className="animated-text-container">
              <h2 className="blog-title">Exciting New Features in 3D Design!</h2>
              <h3 className="blog-description">
                Explore the latest trends and innovations in interactive 3D design and how you can enhance your website with stunning visualizations.
              </h3>
              <a href="" className="read-more">Read More...</a>
            </div>
          )}
        </div>
      </div>

      <div className="page-content hero2" style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>

        <div className="text-container">
          {["THIS", "IS", "NEXTJS", "CREATION", "TOWARDS", "SUCCESS"].map((word, index) => (
            <span key={index} className="text-word">
              {word}
            </span>
          ))}
        </div>


        <div className="image-container" style={{
          position: "relative",
          top: "10%",
          left: "5%",
          width: "90%",
          transform: "translate(10%, 10%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "space-between"
        }}>
          <Image src={image1} alt="Image 1" className="image" width={180} height={180} style={{ opacity: 0, scale: 0, position: "absolute" }} />
          <Image src={image2} alt="Image 2" className="image" width={180} height={180} style={{ opacity: 0, scale: 0, position: "absolute" }} />
          <Image src={image3} alt="Image 3" className="image" width={180} height={180} style={{ opacity: 0, scale: 0, position: "absolute" }} />
          <Image src={image4} alt="Image 4" className="image" width={180} height={180} style={{ opacity: 0, scale: 0, position: "absolute" }} />
        </div>
      </div>
    </>
  );
}