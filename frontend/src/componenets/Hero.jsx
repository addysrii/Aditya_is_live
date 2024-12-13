import React from 'react';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  Cpu, 
  ArrowRight,
  Globe,
  Paintbrush
} from 'lucide-react';

const LandingPage = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code className="w-8 h-8 text-purple-500" />,
      description: "Custom websites and web applications for galleries, museums, and cultural institutions with immersive experiences.",
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      description: "Native Android and iOS apps for virtual tours, interactive exhibitions, and cultural education.",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      description: "AI-powered art analysis, recommendation systems, and personalized cultural experiences.",
    },
    {
      id: 4,
      title: "Blockchain Solutions",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      description: "NFT platforms, digital art authentication, and secure ownership tracking for cultural assets.",
    },
    {
      id: 5,
      title: "IoT Integration",
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      description: "Smart museum solutions, interactive installations, and connected cultural spaces.",
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-purple-900/20 pt-24 px-4">
      {/* Hero Section */}
      <div className="relative text-center mb-16">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
          Where Technology Meets Art
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Transforming the cultural landscape through innovative IT solutions
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-sm"></div>
        
        {/* Paisley Decorative Elements */}
        <svg className="absolute -top-8 left-4 w-24 h-24 text-orange-500/20" viewBox="0 0 100 100">
          <path d="M50,0 C60,20 90,50 50,100 C10,50 40,20 50,0" fill="currentColor"/>
        </svg>
        <svg className="absolute -top-8 right-4 w-24 h-24 text-pink-500/20 scale-x-[-1]" viewBox="0 0 100 100">
          <path d="M50,0 C60,20 90,50 50,100 C10,50 40,20 50,0" fill="currentColor"/>
        </svg>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group relative bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500"
          >
            {/* Decorative Corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-orange-500/40 rounded-tl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg"></div>

            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              {service.title}
            </h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <button className="flex items-center text-purple-500 hover:text-purple-400 transition-colors">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </div>
        ))}
      </div>

      {/* Culture & Technology Section */}
      <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-16 border border-orange-500/20">
        {/* Decorative Corners */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-orange-500/40 rounded-tl-lg"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-pink-500/40 rounded-br-lg"></div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Bridging Culture & Technology
            </h2>
            <p className="text-gray-300">
              We specialize in creating digital solutions that enhance and preserve cultural experiences. 
              Our expertise spans across multiple technologies, enabling cultural institutions to thrive 
              in the digital age.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Globe className="w-6 h-6 text-purple-500" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Paintbrush className="w-6 h-6 text-purple-500" />
                <span>Creative Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;