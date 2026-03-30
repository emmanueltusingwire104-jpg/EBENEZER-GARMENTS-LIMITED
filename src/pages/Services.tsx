import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Users, Briefcase, Shirt, PenTool, Scissors, Tag } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'school',
      title: 'School Uniforms',
      description: 'We provide durable, comfortable, and smart uniforms for students of all ages. From primary schools to high schools, our uniforms are designed to withstand daily wear and tear while maintaining a neat appearance. We offer bulk production and supply to ensure every student is outfitted perfectly.',
      icon: <Users className="w-10 h-10 text-blue-600" />,
      image: 'https://earth911.com/wp-content/uploads/2019/09/AdobeStock_234480046-1.jpeg',
      features: ['Durable fabrics', 'Comfortable fit', 'Bulk supply', 'Custom school colors']
    },
    {
      id: 'corporate',
      title: 'Company / Corporate Uniforms',
      description: 'Enhance your brand image with professional corporate uniforms. We design and produce high-quality workwear that reflects your company identity and ensures team unity. From office wear to industrial uniforms, we have you covered.',
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=1200',
      features: ['Professional designs', 'Brand alignment', 'Comfortable for all-day wear', 'Various styles available']
    },
    {
      id: 'promotional',
      title: 'Promotional T-Shirts & Branded Apparel',
      description: 'Make your next event or marketing campaign a success with our custom promotional apparel. We offer a wide range of t-shirts, polo shirts, and hoodies that can be customized with your logo and message.',
      icon: <Shirt className="w-10 h-10 text-blue-600" />,
      image: 'https://5.imimg.com/data5/YK/PO/WG/SELLER-33308056/promotional-customized-t-shirts-with-company-branding-1000x1000.jpg',
      features: ['High-quality printing', 'Wide range of colors', 'Fast turnaround', 'Perfect for events']
    },
    {
      id: 'embroidery',
      title: 'Embroidery Services',
      description: 'Add a touch of class to your garments with our premium embroidery services. We use state-of-the-art machinery to accurately reproduce your logo or design on uniforms, caps, bags, and more.',
      icon: <PenTool className="w-10 h-10 text-blue-600" />,
      image: 'https://i.etsystatic.com/14612011/r/il/cf6e93/5382890178/il_1080xN.5382890178_qbbo.jpg',
      features: ['Precision stitching', 'Durable threads', 'Complex logo reproduction', 'Digitization services']
    },
    {
      id: 'tailoring',
      title: 'Tailoring & Custom Fitting',
      description: 'Ensure the perfect fit for every team member with our expert tailoring services. We offer custom measurements and alterations to guarantee comfort and a professional appearance.',
      icon: <Scissors className="w-10 h-10 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=1200',
      features: ['Expert tailors', 'Precise measurements', 'Alteration services', 'Custom designs']
    },
    {
      id: 'labeling',
      title: 'Labeling & Garment Branding',
      description: 'Complete your custom apparel with professional labeling and branding. We provide woven labels, printed tags, and custom packaging to give your garments a premium retail finish.',
      icon: <Tag className="w-10 h-10 text-blue-600" />,
      image: 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?auto=format&fit=crop&q=80&w=1200',
      features: ['Woven labels', 'Printed neck tags', 'Care labels', 'Custom packaging']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive garment solutions tailored to your specific needs. From design to final production, we handle it all.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-2xl mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-sm">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/quote" 
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors text-lg"
                >
                  Request a quote for this service <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            If you have specific requirements not listed here, get in touch. We offer fully customized garment manufacturing tailored to your exact specifications.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
