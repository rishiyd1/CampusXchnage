import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

/* ---------------- ANIMATION VARIANTS ---------------- */

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
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

const Working = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up & Verify",
      description:
        "Create your account using your university email. We verify you're a real student at your campus.",
      image:
        "https://s3.envato.com/files/483587867/screenshort/02_preview02.jpg",
      cardBg: "bg-[#E6E1FF]",
    },
    {
      id: 2,
      title: "Browse or List",
      description:
        "Find what you need or list items you want to sell or lend. Everything stays within your campus.",
      image: assets.items,
      cardBg: "bg-white",
    },
    {
      id: 3,
      title: "Buy, Sell, or Borrow — Safely on Campus",
      description:
        "Connect with other students and arrange safe meetups on campus to complete your transaction.",
      image:
        "https://thumbs.dreamstime.com/z/people-exchange-books-reading-students-readers-club-bookcrossing-sharing-vector-illustration-cartoon-isolated-young-paper-252405920.jpg?w=992",
      cardBg: "bg-[#D8EEFF]",
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#f1efeecd] pt-8 pb-24 font-['Outfit']">
      <div className="relative z-10 max-w-6xl mx-auto px-12">

        {/* ---------------- HEADING ---------------- */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#0D1B2A]">How </span>
            <span className="text-[#0D1B2A]">CAMPUS </span>
            <span className="text-[#f57404]">Xchange </span>
            <span className="text-[#0D1B2A]">Works</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Getting started with Campus Xchange is simple and secure
          </p>
        </motion.div>

        {/* ---------------- CARDS ---------------- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardAnim}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="flex flex-col items-center group"
            >
              {/* Image Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className={`${step.cardBg} w-[260px] h-[260px] rounded-[2.5rem] 
                flex items-center justify-center mb-8
                shadow-sm group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]`}
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="w-[85%] h-[85%] object-contain mix-blend-multiply"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.div>

              {/* Step Number */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="bg-[#6366F1] text-white w-11 h-11 rounded-full 
                flex items-center justify-center text-lg font-bold mb-4 shadow-md"
              >
                {step.id}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 text-center group-hover:text-[#6366F1] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] text-center text-sm leading-relaxed max-w-xs group-hover:text-[#333] transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Working;
