import { motion } from "motion/react";

export function PrimaryCTA({ children }:{children:React.ReactNode}) {
  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.03,
        boxShadow: "0 12px 40px rgba(168, 85, 247, 0.45)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative px-6 py-3 rounded-xl font-semibold
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white
        shadow-lg
        focus:outline-none
      "
    >
      {children}
    </motion.button>
  );
}
