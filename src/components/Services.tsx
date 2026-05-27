import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Search } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Business Websites",
      description: "Custom designed, high-converting websites for restaurants, shops, and local brands that turn visitors into paying customers.",
      icon: <Search className="w-6 h-6 text-primary" />,
    },
    {
      title: "E-Commerce",
      description: "Robust online stores with smooth checkout experiences. Sell your products 24/7 with zero technical headaches.",
      icon: <Smartphone className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Landing Pages",
      description: "Laser-focused single pages designed specifically to capture leads, sell a product, or promote a specific campaign.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "Web App Development",
      description: "Complex, interactive web applications tailored to your specific business operations and requirements.",
      icon: <Code className="w-6 h-6 text-secondary" />,
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold font-display text-white mb-6"
          >
            How I can help <span className="text-gradient">elevate</span> your business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            I don't just write code. I build digital assets that generate real revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
