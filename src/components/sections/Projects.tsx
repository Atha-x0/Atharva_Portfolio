import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard, { Project } from '../ui/ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Academic Video Finder",
    description: "A web platform that extracts content from academic PDF and PowerPoint files and finds relevant YouTube videos for each topic.",
    image: "Images/AcademicVideoFinder.webp",
    tags: ["Python", "HTML & CSS", "JavaScript", "Flask", "YouTube API"],
    github: "https://github.com/Atha-x0/Academic-Video-Finder",
    demo: "https://academic-video-finder-4b46.vercel.app/",
    category: "ai"
  },
  {
    id: 2,
    title: "AI Text Humanizer",
    description: "An NLP-based project that transforms robotic AI-generated text into natural, human-like language while preserving meaning and tone.",
    image: "Images/AiTextHumanizer.webp",
    tags: ["React", "Node.js","javaScript", "HTML", "css", "OpenAI API", "Gemini API"],
    github: "https://github.com/Atha-x0/AI-Text-Humanizer",
    demo: "https://aitexthumanizer.vercel.app/",
    category: "webdev"
  },
  {
    id: 3,
    title: "Cross-Platform-Sentiment-Analysis-and-Visualization",
    description: "A comprehensive web application that analyzes sentiment across multiple social media platforms including Twitter, Reddit, YouTube, Instagram, Facebook, and Google News. The application provides real-time sentiment analysis, visualizations, and insights about trending topics.",
    image: "Images/Sentiment.webp",
    tags: ["Python", "NLTK", "spaCy", "Flask", "React", "Youtube API", "Twitter API", "Reddit API" ,"Facebook Graph API", "Google News API", "Instagram API", "D3.js", "chrome driver"],
    github: "https://github.com",
    category: "ai"
  },
  {
    id: 4,
    title: "Conference Management System",
    description: "The Conference Management System is a comprehensive solution developed to automate and simplify the process of managing conferences, workshops, and similar events. It provides a user-friendly interface for organizers, speakers, and participants, ensuring a seamless experience from start to finish. Whether you are hosting a small workshop or a large international conference, this system caters to all your needs.",
    image: "Images/conference.webp",
    tags: ["React", "Tailwind CSS", "clerk.js", "stramline"],
    github: "https://github.com",
    category: "webdev"
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'webdev', name: 'Web Development' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projects" 
          subtitle="Selected works showcasing my skills and interests" 
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;