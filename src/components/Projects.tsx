import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import oddsSpiceImg from "../assets/images/odds-spice.jpeg";
import porkytosImg from "../assets/images/porkytos.png";

export function Projects() {
  const projects = [
    {
      title: "Odd's Spice Kitchen",
      category: "Restaurant Website",
      image: oddsSpiceImg,
      url: "https://tee-boy91.github.io/liliposh/index.html",
      description: "A vibrant, appetizing website for a modern Ghanaian restaurant, featuring an interactive menu and bold layouts.",
    },
    {
      title: "Porkyto's Restaurant",
      category: "Premium Dining",
      image: porkytosImg,
      url: "https://tee-boy91.github.io/porkyto_s_premium/pages/food_menu.html",
      description: "An elegant showcase for a premium dining experience, highlighting culinary excellence with dark, moody aesthetics.",
    }
  ];

  return (
    <section id="work" className="py-32 relative">
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Selected <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real projects. Real results.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group block relative"
            >
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
                
                {/* Image Container */}
                <div className="w-full md:w-3/5 relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-3xl z-20 pointer-events-none"></div>
                  <div className="aspect-[16/10] overflow-hidden bg-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5">
                  <div className="text-sm font-medium tracking-wider text-primary mb-4 uppercase">{project.category}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-medium border-b border-primary/30 pb-1 group-hover:border-primary transition-colors">
                    Visit Live Site <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
