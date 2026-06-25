import React from "react";
import Title from "./Title";
import { testimonial } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Testimonial = () => {
  return (
    <section id="Testimonials" className="section-offset">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12"
      >
        <Title
          title={"What our clients "}
          description={"Don't just take our word for it. Here’s what our past clients have to say."}
          gradientText={"think."}
        />

        <div className="grid grid-cols-1 gap-10 mt-6 md:mt-8 lg:mt-12 w-full">
          {testimonial.map((member, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-14 text-left max-w-5xl mx-auto"
            >
              <div className="relative shrink-0 rotate-[-6deg]">
                <div className="w-56 h-56 md:w-54 md:h-54 rounded-[2rem] border border-primary/70 dark:border-primary/30 p-3 bg-white dark:bg-zinc-900 shadow-sm">
                  <img
                    loading="lazy"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-[1.5rem] object-cover object-top"
                  />
                </div>

                <div className="absolute -left-6 bottom-8 size-15 md:size-18 rounded-full bg-primary flex items-center justify-around shadow-sm rotate-[6deg]">
                  <span className="pt-4 text-5xl md:text-6xl font-black text-black leading-none text-center">
                    “
                  </span>
                </div>
              </div>

              <div className="max-w-2xl text-center md:text-left">
                <span className="inline-block text-[10px] md:text-xs uppercase tracking-wide border border-secondary dark:border-secondary rounded-md px-4 py-1 mb-4">
                  Client Testimonial
                </span>

                <p className="text-md md:text-xl leading-snug font-medium text-dark-text dark:text-light-text">
                  {member.paragraph}
                </p>

                <div className="mt-6">
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-xs text-text-secondary dark:text-light-text-dull mt-2">
                    {member.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;