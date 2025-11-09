import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import DesignCard, { DesignProject, DesignModal } from '../ui/DesignCard';
const designsData: DesignProject[] = [
  {
    id: 1,
    title: "Magzine Cover UDBHAVA",
    category: "Editorial",
    image: "public/Images/Udhava.webp",
    description: "Complete brand identity for an annual AI and Ml department, including logo, color palette, typography, and marketing materials."
  },
  {
    id: 2,
    title: "TiffinSeva Platform UI",
    category: "UI/UX Design",
    image: "public/Images/TifffinSeva Page.webp",
    description: "User interface design for an online mess food delivery platform specializing for Batchlor's."
  },
  {
    id: 3,
    title: "korku brand label",
    category: "Branding ",
    image: "public/Images/korku1.webp",
    description: "Complete brand identity for Korku honey, including logo, color palette, typography, and marketing materials."
  },
  {
    id: 4,
    title: "Logo Design",
    category: "Branding",
    image: "public/Images/tiffinSeva.webp",
    description: "Brand identity for an AI startup."
  },
  {
    id: 5,
    title: "Technical Event",
    category: "Editorial",
    image: "public/Images/technobyte.webp",
    description: "Event identity for an Tecnical identity."
  },
  {
    id: 6,
    title: "Flyer",
    category: "Branding",
    image: "public/Images/Sran.webp",
    description: "Design for promoting."
  }
];

const DesignShowcase: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<DesignProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'Branding', name: 'Branding' },
    { id: 'UI/UX Design', name: 'UI/UX Design' },
    { id: 'Editorial', name: 'Editorial' },
  ];

  const filteredDesigns = activeCategory === 'all' 
    ? designsData 
    : designsData.filter((design) => design.category === activeCategory);

  return (
    <section id="design" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Design Portfolio" 
          subtitle="A showcase of my graphic and UI design work" 
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-secondary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design) => (
            <DesignCard
              key={design.id}
              design={design}
              setSelectedDesign={setSelectedDesign}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDesign && (
          <DesignModal
            design={selectedDesign}
            onClose={() => setSelectedDesign(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignShowcase;