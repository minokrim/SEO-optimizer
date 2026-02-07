import { motion } from "motion/react";
export function SecondaryCTA({ children }:{children:React.ReactNode}) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
      className="
        px-6 py-3 rounded-xl
        text-gray-300
        border border-white/10
        hover:border-white/20
        bg-white/5
      "
    >
      {children}
    </motion.button>
  );
}
