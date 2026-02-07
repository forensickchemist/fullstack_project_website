import React, { useRef, useEffect } from "react";
import kisko from "../assets/kisko.png";

export default function OurPartner() {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const container = scrollRef.current;

    const autoScroll = setInterval(() => {
      if (container) {
        container.scrollLeft += 1;

        // Infinite loop reset
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 15);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#0b2a5b] to-[#0a1f45] py-20">
      <div className="w-full px-10">
        <h2 className="text-white text-3xl font-semibold mb-12">Our Partner</h2>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-scroll whitespace-nowrap w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="min-w-[340px] h-40 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0"
            >
              <img
                src={kisko}
                alt="Kisko Logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}

          {[...Array(10)].map((_, index) => (
            <div
              key={`dup-${index}`}
              className="min-w-[340px] h-40 bg-white rounded-lg shadow-lg flex items-center justify-center flex-shrink-0"
            >
              <img
                src={kisko}
                alt="Kisko Logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <style>
          {`div::-webkit-scrollbar { display: none; }`}
        </style>
      </div>
    </section>
  );
}
