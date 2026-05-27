import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "233248412300";
const EMAIL = "terryaboat@gmail.com";
const INSTAGRAM_HANDLE = "pixelbytb";

type FloatingButton = {
  href: string;
  label: string;
  ariaLabel: string;
  icon: typeof MessageCircle;
  bg: string;
  glow: string;
  ping?: boolean;
  external: boolean;
};

const buttons: FloatingButton[] = [
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "Chat on WhatsApp",
    ariaLabel: "Chat with Terry on WhatsApp",
    icon: MessageCircle,
    bg: "from-green-500 to-green-600",
    glow: "rgba(34,197,94,0.5)",
    ping: true,
    external: true,
  },
  {
    href: `https://instagram.com/${INSTAGRAM_HANDLE}`,
    label: `@${INSTAGRAM_HANDLE} on Instagram`,
    ariaLabel: "Follow on Instagram",
    icon: Instagram,
    bg: "from-fuchsia-500 via-pink-500 to-orange-400",
    glow: "rgba(236,72,153,0.5)",
    external: true,
  },
  {
    href: `mailto:${EMAIL}`,
    label: "Send an email",
    ariaLabel: "Send Terry an email",
    icon: Mail,
    bg: "from-primary to-secondary",
    glow: "rgba(99,102,241,0.5)",
    external: false,
  },
];

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {buttons.map((btn, i) => {
        const Icon = btn.icon;
        return (
          <motion.a
            key={btn.href}
            href={btn.href}
            target={btn.external ? "_blank" : undefined}
            rel={btn.external ? "noopener noreferrer" : undefined}
            aria-label={btn.ariaLabel}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1 + i * 0.12,
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group block"
          >
            {btn.ping && (
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
            )}
            <span
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${btn.bg} blur-md opacity-60 group-hover:opacity-100 transition-opacity`}
            ></span>
            <span
              className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${btn.bg} border border-white/20`}
              style={{ boxShadow: `0 8px 28px ${btn.glow}` }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.2} />
            </span>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/90 border border-white/10 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none">
              {btn.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
