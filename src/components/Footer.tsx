import { Mail, MessageCircle, Instagram } from "lucide-react";
import logoUrl from "@assets/AE270CF0-256C-421F-B504-A5E7A3214788_1776862074978.png";

const WHATSAPP_NUMBER = "233248412300";
const EMAIL = "terryaboat@gmail.com";
const INSTAGRAM_HANDLE = "pixelbytb";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 bg-black overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoUrl}
                alt="PixelByTB"
                className="w-11 h-11 rounded-full bg-black object-contain"
              />
              <div>
                <div className="font-display font-bold text-xl text-white tracking-tight">
                  PixelByTB
                </div>
                <div className="text-xs text-gray-500 tracking-wider uppercase">
                  Code · Create · Elevate
                </div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Premium websites that bring local businesses more customers.
              Built in Ghana, made for the world.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/40 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/5 text-sm text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} PixelByTB. Built by Terry Agyenim Boateng.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
