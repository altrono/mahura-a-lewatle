"use client"

import { motion } from "framer-motion"
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = "+27721896531" // Replace with your actual WhatsApp number
  const message = "Hello, welcome to MAHURALEWATLE (PTY) LTD!" // Pre-filled message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <WhatsappIcon size={24} />
      <span className="sr-only">Contactez-nous sur WhatsApp</span>
    </motion.a>
  )
}

