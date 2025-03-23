import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
     بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ 
       <br className='sm:block hidden' />

    Hey there! I&apos;m <span className="font-bold text-teal-600 dark:text-teal-400">Jafar</span>, a computer science student in my final year with 3 years of programming experience. 
    I&apos;m fluent in <span className="font-bold text-blue-500 dark:text-blue-300">Java</span>, <span className="font-bold text-blue-500 dark:text-blue-300">JavaScript</span>, and a sprinkle of <span className="font-bold text-blue-500 dark:text-blue-300">Python</span>. 
    Frameworks? Oh, I&apos;ve got those covered—TypeScript, Kotlin, React Native, and Vite are my playgrounds. For the backend, I&apos;m rocking <span className="font-bold text-blue-500 dark:text-blue-300">Node.js</span> with <span className="font-bold text-blue-500 dark:text-blue-300">Express</span> and <span className="font-bold text-blue-500 dark:text-blue-300">MongoDB</span> with <span className="font-bold text-blue-500 dark:text-blue-300">Mongoose</span>. 
    And yes, Git and GitHub are my daily tool
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
