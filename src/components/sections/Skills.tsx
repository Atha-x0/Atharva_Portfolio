import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SkillCard, { Skill } from '../ui/SkillCard';
import { 
  Code, 
  Paintbrush, 
  BrainCircuit, 
  LayoutGrid,
  Palette,
  Bot,
  Cpu,
  Database
} from 'lucide-react';

const skillsData: Skill[] = [
  {
    name: "Python",
    icon: <Code className="w-6 h-6 text-white" />,
    level: 80,
    category: "programming",
    color: "bg-primary-500 text-white"
  },
  {
    name: "JavaScript",
    icon: <Code className="w-6 h-6 text-white" />,
    level: 45,
    category: "programming",
    color: "bg-primary-500 text-white"
  },
  {
    name: "React",
    icon: <LayoutGrid className="w-6 h-6 text-white" />,
    level: 50,
    category: "programming",
    color: "bg-primary-500 text-white"
  },
  {
    name: "HTML & CSS",
    icon: <LayoutGrid className="w-6 h-6 text-white" />,
    level: 80,
    category: "programming",
    color: "bg-primary-500 text-white"
  },
  {
    name: "C++",
    icon: <LayoutGrid className="w-6 h-6 text-white" />,
    level: 70,
    category: "programming",
    color: "bg-primary-500 text-white"
  },
   {
    name: "Tailwind CSS",
    icon: <LayoutGrid className="w-6 h-6 text-white" />,
    level: 50,
    category: "programming",
    color: "bg-primary-500 text-white"
  },
  {
    name: "TensorFlow",
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    level: 50,
    category: "ai",
    color: "bg-accent-500 text-white"
  },
  {
    name: "Mathematics and Statistics for AI",
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    level: 70,
    category: "ai",
    color: "bg-accent-500 text-white"
  },
  {
    name: "PyTorch",
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    level: 50,
    category: "ai",
    color: "bg-accent-500 text-white"
  },
    {
    name: "NLP",
    icon: <Bot className="w-6 h-6 text-white" />,
    level: 65,
    category: "ai",
    color: "bg-accent-500 text-white"
  },
  {
    name: "Computer Vision",
    icon: <Cpu className="w-6 h-6 text-white" />,
    level: 70,
    category: "ai",
    color: "bg-accent-500 text-white"
  },
  {
    name: "Figma",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 85,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
   {
    name: "Canva",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 95,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
  {
    name: "Adobe Creative Suite",
    icon: <Palette className="w-6 h-6 text-white" />,
    level: 80,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
  {
    name: "UI/UX Design",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 85,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
   {
    name: "Affinity Designer",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 85,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
   {
    name: "After Effects",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 50,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
   {
    name: "Adobe Premiere Pro",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 50,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
   {
    name: "Alight Motion",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 20,
    category: "design",
    color: "bg-secondary-500 text-white"
  },
   {
    name: "Capcut",
    icon: <Paintbrush className="w-6 h-6 text-white" />,
    level: 95,
    category: "design",
    color: "bg-secondary-500 text-white"
  }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'design', name: 'Design' },
    { id: 'ai', name: 'AI & ML' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I work with" 
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;