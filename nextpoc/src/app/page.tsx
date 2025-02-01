// import Spline from "@splinetool/react-spline";

// export default function Home() {
//   return (
//     <div className="page-content hero">

//       <div style={{ width: "100%", height: "100vh" }}>
//         <Spline
//           scene="https://prod.spline.design/rdY5Noxnujzn3hF0/scene.splinecode"
//         />
//         {/* <Spline
//           scene="https://prod.spline.design/GcgbQzDxn2vWxWo1/scene.splinecode"
//         /> */}
//       </div>
//     </div>
//   );
// }

"use client";

import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 2000);
  }, []);

  return (
    <div className="page-content hero" style={{ position: "relative" }}>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Spline
          scene="https://prod.spline.design/rdY5Noxnujzn3hF0/scene.splinecode"
        />

        {showText && (
          <div className="animated-text-container">
            <h2 className="blog-title">Exciting New Features in 3D Design!</h2>
            <h3 className="blog-description">
              Explore the latest trends and innovations in interactive 3D design and how you can enhance your website with stunning visualizations.
            </h3>
            <a href="/" className="read-more">Read More...</a>
          </div>
        )}
      </div>

      <style>{`
        .animated-text-container {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          text-align: center;
          opacity: 0;
          animation: fadeIn 2s forwards;
        }

        .blog-title {
          font-size: 2.5em;
          font-weight: bold;
          margin-bottom: 16px;
          animation: slideUp 1.5s ease-out;
          display: inline-block;
          transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.3s ease-in-out;
        }

        .blog-title:hover {
          animation: windEffect 2s infinite ease-in-out;
          opacity: 0.9;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7), 0 0 40px rgba(0, 0, 255, 0.7);
        }

        .blog-description {
          font-size: 1.2em;
          margin-bottom: 30px;
          animation: slideUp 1.5s ease-out 0.5s;
          display: inline-block;
          transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.3s ease-in-out;
        }

        .blog-description:hover {
          animation: windEffect 2s infinite ease-in-out;
          opacity: 0.9;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7), 0 0 40px rgba(0, 0, 255, 0.7);
        }

        .read-more {
          font-size: 1.2em;
          color: #ffeb3b;
          text-decoration: none;
          padding: 8px 16px;
          border: 2px solid #ffeb3b;
          border-radius: 5px;
          background: transparent;
          transition: all 0.3s ease, box-shadow 0.3s ease;
        }

        .read-more:hover {
          background-color: #ffeb3b;
          color: #333;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7), 0 0 40px rgba(0, 0, 255, 0.7);
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes windEffect {
          0% { transform: translateX(-10px) translateY(5px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(-10px) translateY(5px); }
          75% { transform: translateX(10px) translateY(-5px); }
          100% { transform: translateX(-10px) translateY(5px); }
        }
      `}</style>
    </div>
  );
}
