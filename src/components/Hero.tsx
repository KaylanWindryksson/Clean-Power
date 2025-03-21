import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-blue-600 text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div
        className="relative z-10 min-h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/1a/1e/e4/1a1ee42d3428b0420dddab089da5bc5f.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Higienização Profissional de Estofados
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Revitalize seus móveis com nossa limpeza profunda e
              especializada. Removemos manchas, ácaros e bactérias, devolvendo
              vida e higiene aos seus estofados.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                Solicitar Orçamento
              </a>
              <a
                href="https://wa.me/32999067654"
                target="_blank"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-semibold text-lg inline-flex items-center justify-center transition-colors"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                (32) 99906-7654
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
