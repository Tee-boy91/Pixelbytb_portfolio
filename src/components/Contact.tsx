import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "233248412300";
const WHATSAPP_DISPLAY = "+233 24 841 2300";
const EMAIL = "terryaboat@gmail.com";
const INSTAGRAM_HANDLE = "pixelbytb";

export function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello Terry, my name is ${name}.\nBusiness: ${business}\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const channels = [
    {
      label: "WhatsApp",
      value: WHATSAPP_DISPLAY,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: <MessageCircle className="w-5 h-5" />,
      external: true,
    },
    {
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: <Mail className="w-5 h-5" />,
      external: false,
    },
    {
      label: "Instagram",
      value: `@${INSTAGRAM_HANDLE}`,
      href: `https://instagram.com/${INSTAGRAM_HANDLE}`,
      icon: <Instagram className="w-5 h-5" />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/15 blur-[180px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Let's build something <span className="text-gradient">unforgettable</span>.
          </h2>
          <p className="text-xl text-gray-400">
            Tell me about your business. I'll reply within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                  Fastest reply
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">Chat on WhatsApp</div>
              <div className="text-white/80 text-sm flex items-center gap-2">
                {WHATSAPP_DISPLAY}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {channels.slice(1).map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-white/[0.05] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {c.label}
                  </div>
                  <div className="text-white font-medium truncate">
                    {c.value}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Kwame Mensah"
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Business name
              </label>
              <input
                type="text"
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Your business or brand"
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What do you need?
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, timeline, and budget..."
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full px-6 py-4 rounded-xl bg-white text-black font-semibold relative overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                Send via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <p className="text-xs text-gray-500 text-center">
              Submitting opens WhatsApp with your message ready to send.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
