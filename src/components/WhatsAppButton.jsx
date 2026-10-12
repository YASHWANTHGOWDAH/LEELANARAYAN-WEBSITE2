import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ number = "919980334147", customMessage }) {
  const defaultMessage = "Hello Leela, I would like to know more about your music classes and upcoming programs.";
  const messageToUse = customMessage || defaultMessage;
  const encodedMsg = encodeURIComponent(messageToUse);
  const whatsappUrl = `https://wa.me/${number}?text=${encodedMsg}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Leela Narayan"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg border border-emerald-500/30 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-6 h-6 fill-current animate-bounce" />
      <span className="hidden sm:inline font-medium text-sm pr-1">
        WhatsApp Leela
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
      </span>
    </a>
  );
}
