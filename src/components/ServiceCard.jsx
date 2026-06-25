// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ServiceCard = ({ icon, title, description, index }) => {
  const imageLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-[#f7f8fb] dark:bg-zinc-900/30 rounded-[2rem] p-6 md:p-10 lg:p-14 w-full"
    >
      <div
        className={`flex flex-col ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8 md:gap-14 lg:gap-20`}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative max-w-md w-full">
            <div className="absolute -right-3 -bottom-3 w-full h-full rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400" />

            <div className="relative bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm">
              <img
                loading="lazy"
                src={icon}
                alt={title}
                draggable="false"
                className="w-full h-64 md:h-72 object-contain p-10"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left">
          {/* <p className="text-xs font-semibold uppercase tracking-widest text-dark-text/70 dark:text-light-text-dull mb-4">
            Service
          </p> */}

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-dark-text dark:text-light-text">
            {title}
          </h3>

          <p className="mt-5 text-sm md:text-base lg:text-lg leading-relaxed text-dark-text/75 dark:text-light-text-dull">
            {description}
          </p>
          <p className="mt-5 text-sm md:text-base lg:text-lg leading-relaxed text-dark-text/75 dark:text-light-text-dull">
            {description}
          </p>
          <p className="mt-5 text-sm md:text-base lg:text-lg leading-relaxed text-dark-text/75 dark:text-light-text-dull">
            {description}
          </p>
          

          <button className="mt-8 rounded-full border border-dark-text/40 dark:border-white/30 px-6 py-3 text-sm font-medium hover:bg-dark-text hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;