import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto`} id="home">
      <div
        className={`absolute inset-0 top-[100px] md:top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Carlos</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Software Developer &
            Computer Engineering Student
          </p>
          <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in JavaScript and TypeScript,
          along vast expertise in technologies like Node.js, React and
          Next.js. <br /><br />I'm a quick learner and collaborate closely with colleagues and clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className="hidden min-[350px]:block">
          <a href="#projects">
          <button className='bg-tertiary mt-7 py-3 px-8 rounded-xl outline-none sm:text-xl w-full sm:w-fit text-white font-bold shadow-md shadow-primary border border-transparent  hover:bg-opacity-50 hover:border-white'>
          See Projects</button>
          </a>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
