import React from "react";
import { motion } from "framer-motion";

/* ---------------- MOTION VARIANTS ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------------- COMPONENT ---------------- */

const Categories = () => {
  const categories = [
    {
      title: "Study Essentials",
      tag: "Academics",
      description:
        "Textbooks, notes, lab manuals, calculators, and everything you need to stay on top of your studies.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Tech & Gadgets",
      tag: "Electronics",
      description:
        "Laptops, headphones, tablets, chargers, and other tech—shared and sold by fellow students.",
      image: "https://img.freepik.com/premium-photo/collection-electronic-gadgets-accessories-including-headphones-cameras-game-controllers-laptop-other-tech-devices_1187703-129882.jpg?w=1380",
    },
    {
      title: "Hostel & PG Setup",
      tag: "Living",
      description:
        "Desks, chairs, lamps, mattresses, and daily-use items to make your space comfortable.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
      title: "Lifestyle & Extras",
      tag: "Campus Life",
      description:
        "Sports gear, cycles, kitchen items, clothing, and everything beyond academics.",
      image: "https://th.bing.com/th/id/R.3512df82798890ecb1c6c0e8c61e5f55?rik=aOQbhJ7IsE7z6w&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0900%2f1326%2fproducts%2fIMG_0007_40bd523c-5369-494a-911d-1e6dc7d87fec.JPG%3fv%3d1506730101&ehk=n8FR2S3rknPS1vQNL6eqyrN9LesRixmvrlyeFE7efmU%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#f1efeecd]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Heading */}
        <motion.div
          className="text-center mb-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            What You Can Find
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything a student needs — sourced directly from students on your campus
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardAnim}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative bg-f1efeecd7 rounded-[2rem] overflow-hidden
                border border-gray-100 opacity-0 flex flex-col
                transition-all duration-500
                hover:shadow-[0_30px_60px_-15px_rgba(255,115,0,0.15)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative z-10">
                {/* Tag */}
                <div className="mb-4">
                  <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest
                    bg-gray-100 text-gray-600
                    transition-colors duration-300
                    group-hover:bg-orange-100 group-hover:text-orange-600">
                    {cat.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">
                  {cat.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>

                {/* CTA */}
                <div className="relative inline-flex items-center group/btn cursor-pointer self-start">
                  <div className="flex items-center gap-2 py-2 px-4 -ml-4 rounded-full
                    transition-all duration-300
                    group-hover/btn:bg-orange-400 group-hover/btn:text-white">
                    <span className="text-sm font-bold uppercase tracking-wider">
                      Explore items
                    </span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 bg-orange-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                </div>
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Categories;
