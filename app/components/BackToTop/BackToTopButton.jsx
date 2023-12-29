"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
      
          <button
            style={{
              position: "fixed",
              bottom:"50px",
              right:"10px",
              height:"30px",
              background:"none"
            }}
            onClick={scrollUp}
          >
              <Image
                alt="scroll top button"
                src="/angle-top.svg"
                width={70}
                height={70}/>
          </button>
      )}
    </>
  );
};
