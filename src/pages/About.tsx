import { motion } from 'motion/react';
import { Target, Heart, Award, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our fabrics, stitching, or branding.',
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with you to meet your exact needs.',
      icon: <Heart className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Reliability',
      description: 'We deliver on our promises. On time, every time, regardless of the order size.',
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Teamwork',
      description: 'Our skilled tailors, designers, and support staff work together seamlessly.',
      icon: <Users className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a dedicated team of professionals passionate about creating high-quality, custom garments that make you look and feel your best.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to revolutionize the uniform and custom apparel industry, Ebenezer Garments started as a small tailoring shop. Over the years, our commitment to quality and customer satisfaction has driven our growth into a full-scale garment manufacturing facility.
              </p>
              <p>
                We realized early on that schools and businesses struggled to find reliable suppliers who could provide both high-quality fabrics and expert branding under one roof. We built our business to solve that problem.
              </p>
              <p>
                Today, we are proud to be the trusted partner for hundreds of schools, corporations, and organizations, delivering thousands of premium garments every year.
              </p>
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
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200" 
                alt="Our tailoring facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                  <Target className="w-10 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide superior quality, custom-branded apparel that enhances the identity and professionalism of our clients, while maintaining ethical manufacturing practices and exceptional customer service.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                  <Award className="w-10 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading and most trusted provider of custom uniforms and promotional apparel globally, recognized for our innovation, quality, and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do, from the first stitch to the final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex justify-center items-center p-4 bg-blue-50 rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
