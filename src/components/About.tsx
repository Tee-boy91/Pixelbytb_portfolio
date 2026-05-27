import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import logoUrl from "@assets/AE270CF0-256C-421F-B504-A5E7A3214788_1776862074978.png";

export function About() {
  const credentials = [
    {
      degree: "BSc Computer Science",
      school: "Ghana Communication Technology University (GCTU)",
    },
    {
      degree: "Diploma in Information Technology Management",
      school: "University of Professional Studies, Accra (UPSA)",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-full h-full rounded-full bg-black border border-white/10 overflow-hidden flex items-center justify-center p-12 shadow-[0_0_60px_rgba(99,102,241,0.3)]">
                <img
                  src={logoUrl}
                  alt="PixelByTB"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wide text-gray-300">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 leading-tight">
              Hi, I'm <span className="text-gradient">Terry</span>.<br />
              I build the web, on purpose.
            </h2>

            <div className="space-y-5 text-lg text-gray-400 leading-relaxed mb-10">
              <p>
                I'm a Ghana-based web designer and developer running PixelByTB
                — a one-person studio focused on websites that actually move
                the needle for local businesses.
              </p>
              <p>
                I obsess over the small things: the loading speed, the way a
                button feels when you tap it, the line of copy that turns a
                visitor into a customer. Code is just the medium. The real
                work is making your business unforgettable online.
              </p>
            </div>

            <div className="space-y-4">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{c.degree}</div>
                    <div className="text-sm text-gray-400">{c.school}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
