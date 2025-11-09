import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem, { TimelineEvent } from '../ui/TimelineItem';
import { Briefcase, BookOpen, Users, Award } from 'lucide-react';

const experienceData: TimelineEvent[] = [
  {
    id: 1,
    title: "Frontend and AI/ML Intern",
    organization: "Lemon Idea",
    period: "Apr 2025 - May 2025",
    description: "Worked with a variety of technologies, including React, Next.js, Typescript, Tailwindcss, leaflet.js and others.",
    icon: <Briefcase />
  },
  {
    id: 2,
    title: "Campus Mantri for DMIHER (DU), Wardha",
    organization: "GeeksforGeeks",
    period: "Dec 2024 - Present",
    description: "This opportunity will enable me to foster a strong coding culture on campus, organize coding events and workshops, and create awareness about the incredible learning resources GeeksforGeeks offers.",
    icon: <Users />
  },
  {
    id: 3,
    title: "Graphic Design Co-lead",
    organization: "Google Developers Group DMIHER",
    period: "Oct 2024 - Jun 2025",
    description: "Spearheading visual design initiatives for tech events, workshops, and social media campaigns. Coordinated with development and content teams to create consistent brand identities.",
    icon: <Briefcase />
  },
  {
    id: 4,
    title: "Graphic Design & Social Media Head",
    organization: "IEEE FEAT branch",
    period: "Sep 2024 - Jun 2025",
    description: "Leading the creative direction and visual identity of the IEEE FEAT branch across all digital platforms.",
    icon: <Briefcase />
  },
  {
    id: 5,
    title: "Technical Co-lead",
    organization: "Google Developers Group DMIHER",
    period: "Sep 2023 - Sep 2024",
    description: "Led a 10+ member tech team to organize coding bootcamps & sessions.",
    icon: <Award />
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience\" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey and roles" 
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {experienceData.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;