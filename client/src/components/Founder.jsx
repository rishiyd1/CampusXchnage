import React from "react";
import { Linkedin, Instagram, Quote } from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- MOTION VARIANTS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ---------------- COMPONENT ---------------- */

const Founder = () => {
  return (
    <section id="about-us" className="w-full bg-[#f1efeecd] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* LEFT SIDE */}
          <motion.div variants={fadeLeft} className="space-y-8">

            <motion.div variants={fadeUp}>
              <span className="text-orange-600 font-bold tracking-widest uppercase text-xs bg-orange-50 px-3 py-1 rounded-full">
                Behind the Vision
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Campus Xchange
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Campus Xchange was born out of a simple observation: student life is expensive
                and cluttered. We believe students shouldn’t have to struggle to find essentials
                or let great items go to waste.
              </p>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative bg-white rounded-3xl p-1 shadow-xl shadow-gray-200/50"
            >
              <div className="bg-white rounded-[22px] p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">

                {/* Avatar */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                    alt="Rishi"
                    className="relative w-24 h-24 rounded-2xl object-cover shadow-sm border border-gray-100"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">Rishi</h4>
                  <p className="text-orange-600 font-medium text-sm mb-3 underline decoration-orange-200 underline-offset-4">
                    Founder
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    Building tools that empower students to build sustainable communities,
                    one exchange at a time.
                  </p>

                  {/* Socials */}
                  <div className="flex justify-center sm:justify-start gap-4">
                    <motion.a
                      whileHover={{ y: -4 }}
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
                    >
                      <Linkedin size={20} />
                    </motion.a>

                    <motion.a
                      whileHover={{ y: -4 }}
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all"
                    >
                      <Instagram size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={fadeRight} className="relative">

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

            <motion.div
              variants={fadeUp}
              className="relative bg-white rounded-[2rem] shadow-2xl shadow-gray-200/40 border border-gray-50 p-10 lg:p-14 overflow-hidden"
            >
              <Quote className="text-orange-100 absolute -top-2 -right-2 scale-[3] opacity-50" size={100} />

              <div className="relative z-10 space-y-8">
                <p className="text-gray-700 text-xl leading-relaxed font-medium italic">
                  “I wanted to build a platform where students could easily exchange items
                  within their campus, save money, and help each other — without the noise
                  of typical marketplaces.”
                </p>

                <p className="text-gray-500 text-lg leading-relaxed">
                  Campus Xchange is more than a store. It’s a student-first community built
                  on trust and sustainability. We’re building this with you and for you.
                </p>

                <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-orange-500"></div>
                  <div>
                    <p className="text-gray-700 font-black text-2xl tracking-tight">Rishi</p>
                    <p className="text-gray-400 text-xs uppercase font-semibold tracking-[0.2em] mt-1">
                      Founder, Campus Xchange
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
