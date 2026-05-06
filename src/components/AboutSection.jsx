"use client";

import Image from "next/image";

export default function AboutSection() {

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">

      {/* Content + Image */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <p className="text-sm font-medium tracking-[2px] text-orange-600 mb-3">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Smart Innovation for Modern Homes Today Advanced
          </h2>

          <p className="text-gray-600 mt-6 text-[15px] md:text-[17px] leading-relaxed">
          AIIVA AUTOMATION PRIVATE LIMITED is redefining modern living with advanced smart automation solutions for homes, offices, hotels, and commercial spaces.
          </p>

          <p className="text-gray-600 mt-4 text-[15px] md:text-[17px] leading-relaxed">
          We offer a complete ecosystem of smart devices—including switches, locks, lighting, sensors, and energy management systems—all designed to work seamlessly together through mobile apps and voice assistants.
          </p>
          <p className="text-gray-600 mt-4 text-[15px] md:text-[17px] leading-relaxed">
            Our focus is simple: deliver reliable, affordable, and future-ready automation that enhances everyday life.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[400px]">
          <Image
            src="/about1.jpg" 
            alt="Smart Home"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
