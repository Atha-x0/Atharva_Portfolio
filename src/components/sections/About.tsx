import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedText from '../ui/AnimatedText';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="My journey in AI, development, and design" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
                <img
                  src="Images/atharva pfp.webp"
                  alt="Atharva Waghale"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decoration */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-500 dark:bg-primary-600 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-500 dark:bg-accent-600 rounded-xl -z-10"></div>
            </div>
          </motion.div>

          <div>
            <AnimatedText
              text="Passionate about merging AI with design to create meaningful solutions."
              className="text-2xl font-medium text-primary-700 dark:text-primary-400 mb-6"
              once
            />

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                I'm a third-year AI & Machine Learning student with a passion for creating intuitive and visually stunning applications. My journey began with graphic design, which eventually led me to explore Ui development and the fascinating world of artificial intelligence.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                With a unique blend of technical expertise and creative skills, I specialize in developing AI-powered Ui applications that not only function flawlessly but also provide exceptional user experiences through thoughtful design.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Currently, I'm focused on exploring the intersection of neural networks and generative design, aiming to create AI systems that can enhance human creativity rather than replace it.
              </motion.p>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center p-4 rounded-lg bg-white dark:bg-dark-700 shadow-sm">
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</h3>
                <p className="text-gray-500 dark:text-gray-400">Years Coding</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white dark:bg-dark-700 shadow-sm">
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</h3>
                <p className="text-gray-500 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white dark:bg-dark-700 shadow-sm">
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</h3>
                <p className="text-gray-500 dark:text-gray-400">AI Models</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;