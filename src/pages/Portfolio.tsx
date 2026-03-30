import { useState } from 'react';
import { motion } from 'motion/react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'school', name: 'School Uniforms' },
    { id: 'corporate', name: 'Corporate Wear' },
    { id: 'embroidery', name: 'Embroidery' },
    { id: 'promotional', name: 'Promotional' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'St. Mary\'s Academy Uniforms',
      category: 'school',
      image: 'https://earth911.com/wp-content/uploads/2019/09/AdobeStock_234480046-1.jpeg',
      description: 'Complete uniform set including blazers, ties, and embroidered shirts for 500 students.'
    },
    {
      id: 2,
      title: 'TechCorp Staff Polos',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800',
      description: 'High-quality polo shirts with embroidered company logo for the engineering team.'
    },
    {
      id: 3,
      title: 'City Marathon T-Shirts',
      category: 'promotional',
      image: 'https://5.imimg.com/data5/YK/PO/WG/SELLER-33308056/promotional-customized-t-shirts-with-company-branding-1000x1000.jpg',
      description: 'Moisture-wicking printed t-shirts for 2,000 marathon participants.'
    },
    {
      id: 4,
      title: 'Luxury Hotel Staff Uniforms',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
      description: 'Custom tailored suits and dresses for front desk and concierge staff.'
    },
    {
      id: 5,
      title: 'Custom Logo Embroidery',
      category: 'embroidery',
      image: 'https://i.etsystatic.com/14612011/r/il/cf6e93/5382890178/il_1080xN.5382890178_qbbo.jpg',
      description: 'Intricate 3D embroidery on premium caps for a sports team.'
    },
    {
      id: 6,
      title: 'International School Sports Kits',
      category: 'school',
      image: 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?auto=format&fit=crop&q=80&w=800',
      description: 'Breathable PE kits with printed school crests and student numbers.'
    },
    {
      id: 7,
      title: 'Restaurant Aprons',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=800',
      description: 'Durable canvas aprons with leather straps and embroidered logos.'
    },
    {
      id: 8,
      title: 'Charity Run Hoodies',
      category: 'promotional',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      description: 'Warm, comfortable hoodies with screen-printed event details.'
    },
    {
      id: 9,
      title: 'Jacket Back Embroidery',
      category: 'embroidery',
      image: 'https://i.etsystatic.com/14612011/r/il/cf6e93/5382890178/il_1080xN.5382890178_qbbo.jpg',
      description: 'Large-scale, detailed embroidery on denim jackets for a motorcycle club.'
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent projects. We take pride in delivering high-quality garments that exceed our clients' expectations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  <p className="text-white text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
