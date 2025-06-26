import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Ghost, Skull, Eye, Brain } from "lucide-react";

const buttonVariants = {
  hidden: { opacity: 0, y: 60, rotate: -15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: i * 0.3, duration: 0.7, type: "spring" }
  })
};

const backgroundVariants = {
  initial: { opacity: 0, backgroundColor: "#000000" },
  animate: {
    opacity: 1,
    backgroundColor: "#0a0a0a",
    transition: { duration: 2, ease: "easeInOut" }
  }
};

const cardHover = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.08,
    rotate: 2,
    transition: { duration: 0.4 }
  }
};

const icons = [<Ghost size={24} />, <Skull size={24} />, <Eye size={24} />, <Brain size={24} />];

export default function Anthrofaked() {
  const buttons = ["Secret", "Gallery", "Notes", "Logout"];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white p-4 flex flex-col items-center font-mono overflow-hidden"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: -60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="text-6xl font-black mb-12 text-center text-red-700 drop-shadow-[0_0_25px_red] tracking-widest animate-pulse"
      >
        Anthrofaked
      </motion.h1>

      <div className="grid gap-8 w-full max-w-sm">
        {buttons.map((text, i) => (
          <motion.div
            key={text}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              variants={cardHover}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="rounded-2xl shadow-[0_0_35px_#220000] bg-gradient-to-br from-zinc-900 to-black border border-zinc-700"
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div className="text-red-500 animate-bounce-slow">
                  {icons[i % icons.length]}
                </div>
                <Button className="w-full text-xl py-6 bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-all duration-300 text-white tracking-wide shadow-[0_0_20px_#550000] hover:shadow-[0_0_30px_#aa0000] hover:scale-105">
                  {text}
                </Button>
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ delay: 1, duration: 4 }}
        className="fixed inset-0 bg-[url('/scary-graphic.png')] bg-cover bg-center pointer-events-none z-0"
      />
    </motion.div>
  );
}

