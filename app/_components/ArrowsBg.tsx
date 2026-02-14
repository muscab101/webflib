"use client"

import React from 'react'

const ArrowsBg = () => {
  // Waxaan badinay baararka (15 bars) si ay u qurux badnaadaan Laptop-ka
  // Waxaan u isticmaalay dherer dynamic ah (lg:h-...) si uu laptop-ka ugu dherer kordho
  const bars = [
    { h: "h-20 lg:h-32", op: "0.05" },
    { h: "h-24 lg:h-40", op: "0.1" },
    { h: "h-28 lg:h-48", op: "0.15" },
    { h: "h-32 lg:h-56", op: "0.2" },
    { h: "h-36 lg:h-64", op: "0.25" },
    { h: "h-40 lg:h-72", op: "0.3" },
    { h: "h-44 lg:h-80", op: "0.4" },
    { h: "h-48 lg:h-[350px]", op: "0.5" },
    { h: "h-52 lg:h-[400px]", op: "0.6" },
    { h: "h-56 lg:h-[450px]", op: "0.7" },
    { h: "h-60 lg:h-[500px]", op: "0.8" },
    { h: "h-64 lg:h-[550px]", op: "0.85" },
    { h: "h-72 lg:h-[600px]", op: "0.9" },
    { h: "h-80 lg:h-[650px]", op: "0.95" },
    { h: "h-96 lg:h-[700px]", op: "1" },
  ];

  return (
    <div className="fixed bottom-0 right-0 -z-10 flex items-end gap-1.5 pointer-events-none select-none px-2">
      {bars.map((bar, index) => {
        // Animation delay-ga wuxuu ka bilaabanayaa midig (kan ugu dheer)
        const reversedDelay = (bars.length - 1 - index) * 0.08;

        return (
          <div
            key={index}
            className={`
              w-5 md:w-6 lg:w-7 ${bar.h} 
              bg-primary rounded-t-md
              animate-slide-in
            `}
            style={{
              animationDelay: `${reversedDelay}s`,
              animationFillMode: 'both',
              // Top-to-bottom fade: Hoos waa madow (Primary), korna waa qafiif
              maskImage: `linear-gradient(to bottom, rgba(0,0,0,${bar.op}) 0%, rgba(0,0,0,1) 100%)`,
              WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,${bar.op}) 0%, rgba(0,0,0,1) 100%)`
            }}
          />
        );
      })}

      <style jsx global>{`
        @keyframes slide-in {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}

export default ArrowsBg