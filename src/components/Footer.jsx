import React, { useEffect } from "react";
import assets, { icons, navItems, socialMedia } from "../assets/assets";
import Button from "./Button";
import toast from "react-hot-toast";

const SocialMedia = socialMedia.icon;
// eslint-disable-next-line no-unused-vars
import { easeIn, motion } from "motion/react";
const Footer = ({ theme }) => {
  const onBrevoSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      toast.success("Your subscription has been successful.");
      form.reset();
    } catch (error) {
      toast.error("Subscription failed. Please try again.");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-primary/6"
    >
      <div className="flex flex-col text-center gap-3 md:justify-around mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12 md:w-[98%] lg:w-[85%]">
        <div className="flex flex-col md:flex-row md:items-start justify-around gap-8">
          {/* logo + tagline + navitems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            // animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeIn }}
            className="flex flex-col gap-3 w-full -mt-15"
          >
            {/* logo */}
            <a href="#">
              <img
                loading="lazy"
                // src={theme === "dark" ? assets.lightLogo : assets.darkLogo}
                src={
                  theme === "dark"
                    ? assets.techlightLogopng
                    : assets.techdarkLogopng
                }
                alt="logo"
                draggable="false"
                className="w-32 h-40"
              />
            </a>

            <p className="-mt-15 text-left lg:text-base w-[75%] md:w-[90%] lg:w-[50%]">
              Building brands that people see, remember, and trust.
            </p>
            <div className="flex gap-4 text-sm md:text-base mt-2">
              {navItems.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="hover:text-primary active:text-primary"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            // animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeIn }}
            className="items-start gap-3 flex flex-col"
          >
            <div className="text-start flex flex-col items-start justify-center content-start">
              <h4 className="font-semibold">Subscribe to our Newsletter</h4>
              <p className="lg:text-sm">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div id="sib-form-container" className="sib-form-container">
              <div
                id="error-message"
                className="sib-form-message-panel"
                style={{ display: "none" }}
              >
                Your subscription could not be saved. Please try again.
              </div>

              <div
                id="success-message"
                className="sib-form-message-panel"
                style={{ display: "none" }}
              >
                Your subscription has been successful.
              </div>

              <form
                method="POST"
                action="https://69004b36.sibforms.com/serve/MUIFAHRUuqfzsIkPF-hcGVw-jiA0RprJuJVRd42R_uiMXCy8m6XEfLXOeg54w9-gDO6n2tzGjy9e1q6tq_h8rfewq1ojVZeQ0G-6E7Md20F08XdRTzCDYuEdHxZpO4Br0GEJZGbdZf8u6MaHHReUsbouuELmAC1XcTGbYo_OALKi1bdl3tVQZYiSHE-4U9idr0foEJJLm6cMTwp4TA=="
                onSubmit={onBrevoSubmit}
                className="flex flex-1 gap-3"
              >
                <div className="sib-input">
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <div className="entry__field">
                        <input
                          type="email"
                          id="EMAIL"
                          name="EMAIL"
                          className="input w-48 sm:w-50 md:w-60 lg:w-72 pl-2"
                          placeholder="Enter your Email"
                          required
                        />
                      </div>
                    </div>

                    <label className="entry__error entry__error--primary"></label>
                  </div>
                </div>

                <button
                  className="sib-form-block__button sib-form-block__button-with-loader btn-primary"
                  
                  type="submit"
                >
                  Subscribe
                </button>

                <input
                  type="text"
                  name="email_address_check"
                  value=""
                  className="input--hidden"
                  readOnly
                />

                <input type="hidden" name="locale" value="en" />
              </form>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: easeIn }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col "
        >
          <hr className="border-t-secondary/40 my-4 md:my-6" />
          <div className="flex flex-col gap-3 md:gap-0 items-center md:flex-row md:justify-between">
            <div className="text-text-secondary/60 dark:text-light-text-dull text-sm">
              Copyright 2026 © theelitecreativehub - All Right Reserved.
            </div>
            <div className="flex items-center gap-3">
              {socialMedia.map((item, index) => (
                <a key={index} href={item.link}>
                  <img
                    loading="lazy"
                    className="h-4.5 lg:h-5 opacity-20 dark:opacity-75"
                    src={theme === "dark" ? item.icon : item.iconDark}
                    alt={item.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;
