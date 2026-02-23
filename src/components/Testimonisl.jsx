import React from 'react'
import Title from './Title'
import { testimonial } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
const Testimonial = () => {
  return (
    <section id="OurTeam" className='section-offset'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className='container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12'>

        <Title title={"What our clients "} description={"Don't just take our word for it. Here’s what our past clients have to say."} gradientText={"think."} />

        <div className='grid grid-cols-1 items-stretch justify-center gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-12 md:px-10 lg:px-60 '>
          {testimonial.map((member, index) => (

            <motion.div
            // animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index} className='team-card'>
              <img loading="lazy" src={member.image} alt={member.name} className='size-12 md:size-14 lg:size-16  rounded-full shrink-0 object-cover object-top md:self-start' />
              <div className='md:text-left '>
                <h3 className='text-xs shrink-0 md:text-base font-semibold '>{member.name}</h3>
                <p className='text-text-secondary dark:text-light-text-dull text-xs '>{member.title}</p>
                <p className='text-text-secondary dark:text-light-text-dull text-xs pt-5'>{member.paragraph}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonial
