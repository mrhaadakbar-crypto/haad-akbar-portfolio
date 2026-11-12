
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const number = "923304728534"; // Apna WhatsApp number likho

  const message = "Hello Haad, I want to discuss a project.";

  const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
