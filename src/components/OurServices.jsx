"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "1 Node Switch", desc: "Single-node smart switch for easy control of one device, offering convenient remote access and efficient automation.", image: "https://vjsmartautomation.com/product_uploads_files/1%20Node%20Switch.png" },
  { id: 2, name: "Smart Touch Switches", desc: "Premium modular and app-controlled switches for modern spaces.", image: "https://pmt-fl.com/wp-content/uploads/2025/01/woman-controlling-digital-thermostat.jpg" },
  { id: 3, name: "Smart Locks & Access Systems", desc: "Digital locks with fingerprint, PIN, card, and mobile access.", image: "https://megacctv.co.uk/wp-content/uploads/2026/01/Smart-Door-Locks.jpeg" },
  { id: 4, name: "Smart Lighting Solutions", desc: "RGB lights, dimmers, mood lighting, and automated lighting controls.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuZYdEe2pe4Fk291SQxIQY0h5Gjkod7WpbQ&s" },
  { id: 5, name: "Smart Plugs & Power Devices", desc: "Remote-controlled plugs, power modules, and energy-saving devices.", image: "https://png.pngtree.com/png-clipart/20231218/original/pngtree-green-energy-need-concept-wall-socket-conceptual-photo-png-image_13873540.png" },
  { id: 6, name: "Sensors & Safety Devices", desc: "Motion, smoke, gas, temperature, and security sensors with instant alerts.", image: "https://static.vecteezy.com/system/resources/thumbnails/077/850/957/small/hand-holding-portable-air-quality-monitor-showing-high-pm2-5-levels-on-city-street-background-traffic-and-heavy-smog-representing-environmental-health-risks-and-urban-air-pollution-issues-photo.jpg" },
  { id: 7, name: "Motorized Automation Products", desc: "Curtain motors, gate motors, door operators, and water valve automation", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudtno1max7cipxL-pImJxOkm8Hp0T5uCDVQ&s" },
  { id: 8, name: "Smart Fans & Appliances", desc: "BLDC fans and automation-ready smart appliances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCirY5ldCPsALaKcmMV5xzUFzCY8OJsKeEw&s" },
  { id: 9, name: "Mobile App & Voice Control", desc: "Centralized control through mobile app, Alexa, and Google Assistant integration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWj05fxjwReuIs6aVXu0i_DzWJ-iKJsZL7g&s" },
  { id: 10, name: "Commercial Automation Solutions", desc: "Smart systems for offices, hotels, retail outlets, and commercial buildings.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Px3AFVkL8UiQUW-Z3VLHBXfKf_hB0kKzw&s" },
  { id: 11, name: "Installation & Support Services", desc: "Site survey, setup, training, maintenance, and after-sales support.", image: "https://www.rmsinstalls.com/front/images/home-automation-banner.jpg" },
];

export default function OurServices() {
  const scrollRef = useRef(null);

  const scroll = useCallback((direction) => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth; // improved consistency

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-[clamp(1rem,5vw,5rem)] py-[clamp(3rem,8vw,6rem)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">
        
        {/* LEFT */}
        <div className="space-y-6 max-w-xl lg:sticky lg:top-24 self-start">
          <p className="text-sm font-medium tracking-[2px] text-orange-600 mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-[clamp(1.8rem,4vw,3.4rem)] font-bold text-gray-900 leading-tight">
            Smart Living,
            <br />
            Simplified
          </h2>

          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
            Upgrade your lifestyle with intelligent automation designed for comfort,
            security, and energy efficiency.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-6 py-3 text-white rounded-xl
            bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf]
            shadow-lg hover:shadow-purple-500/40 transition"
          >
            Browse All Products
            <span className="w-8 h-8 flex items-center justify-center rounded-md bg-white/20">
              ↗
            </span>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="relative overflow-hidden">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex absolute -left-1 md:-left-3 lg:left-2 top-1/2 -translate-y-1/2 z-10
            w-11 h-11 rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-gray-200
            items-center justify-center hover:scale-110 hover:bg-white transition"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex absolute -right-1 md:-right-3 lg:right-2 top-1/2 -translate-y-1/2 z-10
            w-11 h-11 rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-gray-200
            items-center justify-center hover:scale-110 hover:bg-white transition"
          >
            →
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-3 sm:px-4 scrollbar-hide [-webkit-overflow-scrolling:touch]"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="snap-start sm:snap-center flex-shrink-0 w-[290px]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}




// "use client";
// import Link from "next/link";

// const items = [
//   {
//     title: "Smart Home Automation",
//     description: "Control and monitor your home devices seamlessly.",
//     points: [
//       "Mobile app control",
//       "Voice assistant integration",
//       "Remote access",
//     ],
//   },
//   {
//     title: "Security & Access Control",
//     description: "Advanced protection systems for your property.",
//     points: ["Biometric locks", "CCTV integration", "Real-time alerts"],
//   },
//   {
//     title: "Lighting Automation",
//     description: "Enhance ambiance with intelligent lighting.",
//     points: ["Scene-based lighting", "Energy saving modes", "Remote dimming"],
//   },
//   {
//     title: "Energy Management Solutions",
//     description: "Optimize power usage and reduce bills.",
//     points: ["Real-time monitoring", "Usage analytics", "Smart scheduling"],
//   },
// ];

// export default function OurServices() {
//   const loopItems = [...items, ...items];

//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white px-[clamp(1rem,5vw,5rem)] py-[clamp(3rem,8vw,6rem)]">

//       <div className="max-w-7xl overflow-hidden mx-auto grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">

//         {/* LEFT */}
//         <div className="space-y-5 max-w-xl">
//           <p className="text-xs tracking-[3px] text-orange-600 font-semibold uppercase">
//             Our Services
//           </p>

//           <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-gray-900 leading-tight">
//             Smart Living,
//             <br />
//             Simplified
//           </h2>

//           <p className="text-gray-600 text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed">
//             Upgrade your lifestyle with intelligent automation systems designed
//             for comfort, security, and energy efficiency.
//           </p>

//           <Link href="/products">
//             <button className="group relative inline-flex items-center justify-center gap-3 px-3.5 py-2.5 text-sm sm:text-base font-normal font-arimo text-white rounded-md overflow-hidden bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
//               {/* Shine */}
//               <span className="absolute inset-0 overflow-hidden rounded-md">
//                 <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-700 ease-in-out" />
//               </span>

//               {/* Border */}
//               <span className="absolute inset-0 rounded-md border border-white/10 group-hover:border-white/30 transition" />

//               {/* Content */}
//               <span className="relative z-10 flex items-center gap-3 tracking-wide">
//                 Browse Services

//                 {/* Fixed circle */}
//                 <span className="relative w-8 h-8 flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm overflow-hidden">

//                   {/* Icon wrapper */}
//                   <span className="relative w-4 h-4">

//                     {/* Icon */}
//                     <span className="absolute inset-0 flex items-center -rotate-45 justify-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5  ">
//                       <svg 
//                         className="w-4 h-4 rotate-45"
//                         fill="none" 
//                         stroke="currentColor" 
//                         strokeWidth="2" 
//                         viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
//                       </svg>
//                     </span>
//                   </span>
//                 </span>
//               </span>
//             </button>
//                 </Link>
//         </div>

//         {/* RIGHT */}
//         <div className="relative">

//           {/* LARGE DESKTOP: infinite scroll */}
//           <div className="block overflow-hidden">
//             <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">
//               {loopItems.map((item, index) => (
//                 <Card key={index} item={item} />
//               ))}
//             </div>
//           </div>

//           {/* gradient fade (desktop only) */}
//           {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-white to-transparent hidden lg:block" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-white to-transparent hidden lg:block" /> */}
//         </div>
//       </div>

//       {/* animation */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 45s linear infinite;
//         }

//         /* Hide scrollbar */
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }

// /* CARD */
// function Card({ item }) {
//   return (
//     <Link href="/products">
//       <div className="
//       snap-start 
//       w-[280px]
//       h-[300px]
//       flex-shrink-0 
//       bg-white 
//       border border-gray-200 
//       rounded-md 
//       p-[clamp(1rem,2vw,1.5rem)]
//       shadow-sm 
//       hover:shadow-xl 
//       transition-all duration-300 
//       hover:-translate-y-1.5
//       group
//     ">

//       <div className="w-10 h-10 rounded-md bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition">
//         <span className="text-orange-600 group-hover:text-white font-bold">
//           ↗
//         </span>
//       </div>

//       <h3 className="text-gray-900 font-semibold text-[clamp(1rem,1.2vw,1.1rem)] mb-2">
//         {item.title}
//       </h3>

//       <p className="text-gray-600 text-sm mb-4">
//         {item.description}
//       </p>

//       <ul className="text-sm text-gray-700 space-y-2">
//         {item.points.map((point, i) => (
//           <li key={i} className="flex gap-2 items-start">
//             <span className="text-orange-600 mt-[2px]">✓</span>
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </Link>
//   );
// }