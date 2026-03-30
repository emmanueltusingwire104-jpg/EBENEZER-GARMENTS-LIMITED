import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, ShieldCheck, Clock, Scissors, Shirt, Briefcase, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const services = [
    {
      title: 'School Uniforms',
      description: 'Durable, comfortable, and smart uniforms for students of all ages. Bulk production available.',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      link: '/services#school',
      image: 'https://earth911.com/wp-content/uploads/2019/09/AdobeStock_234480046-1.jpeg',
    },
    {
      title: 'Corporate Wear',
      description: 'Professional corporate uniforms that reflect your brand identity and ensure team unity.',
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      link: '/services#corporate',
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Promotional T-Shirts',
      description: 'Custom branded apparel for events, campaigns, and promotional giveaways.',
      icon: <Shirt className="w-8 h-8 text-blue-600" />,
      link: '/services#promotional',
      image: 'https://5.imimg.com/data5/YK/PO/WG/SELLER-33308056/promotional-customized-t-shirts-with-company-branding-1000x1000.jpg',
    },
    {
      title: 'Embroidery Services',
      description: 'High-quality logo embroidery and custom branding on all types of garments.',
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      link: '/services#embroidery',
      image: 'https://i.etsystatic.com/14612011/r/il/cf6e93/5382890178/il_1080xN.5382890178_qbbo.jpg',
    },
  ];

  const features = [
    { title: 'Premium Fabrics', desc: 'Durable, high-quality materials that last.', icon: <ShieldCheck className="w-6 h-6 text-blue-600" /> },
    { title: 'Custom Branding', desc: 'Expert embroidery, printing, and labeling.', icon: <PenTool className="w-6 h-6 text-blue-600" /> },
    { title: 'Bulk Production', desc: 'Reliable capacity for large-scale orders.', icon: <Users className="w-6 h-6 text-blue-600" /> },
    { title: 'Fast Turnaround', desc: 'On-time delivery for all your deadlines.', icon: <Clock className="w-6 h-6 text-blue-600" /> },
  ];

  const testimonials = [
    {
      quote: "The quality of the school uniforms we received was outstanding. The fabric is durable and the embroidery is perfect. Highly recommended!",
      author: "Sarah Jenkins",
      role: "School Principal",
      rating: 5,
    },
    {
      quote: "We ordered 500 promotional t-shirts for our corporate event. They delivered ahead of schedule and the print quality was top-notch.",
      author: "David Chen",
      role: "Marketing Director",
      rating: 5,
    },
    {
      quote: "Our staff looks incredibly professional in their new corporate wear. The custom fitting service made a huge difference.",
      author: "Amanda Torres",
      role: "HR Manager",
      rating: 5,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2000" 
            alt="Tailoring background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/30">
              <Scissors size={16} />
              <span>Expert Tailoring & Branding</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Premium Custom Uniforms & Branded Apparel for Schools and Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              High-quality tailoring, embroidery, and bulk garment solutions you can trust. We are your one-stop shop for durable, professional apparel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quote" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/portfolio" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-50 shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive garment solutions tailored to your specific needs, from design to final production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
                  >
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-base font-bold rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / USP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your One-Stop Garment Solution
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on delivering exceptional quality and service. With years of experience in bulk garment production, we understand the importance of durability, comfort, and brand representation.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Durable, high-quality fabrics sourced from trusted suppliers',
                  'Custom branding including logos, embroidery, and labels',
                  'Reliable bulk production with strict quality control',
                  'Fast turnaround times to meet your deadlines',
                  'Expert tailoring and custom fitting services'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  Read our story <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Tailoring equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-gray-900">10k+</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Garments Delivered</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-400">
              Don't just take our word for it. Here's what schools and businesses have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-white text-lg">{testimonial.author}</p>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to upgrade your uniforms?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Get a free quote today. Our team is ready to discuss your requirements and provide the best garment solutions for your organization.
          </p>
          <Link 
            to="/quote" 
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors shadow-xl"
          >
            Request a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
