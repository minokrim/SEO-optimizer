import { motion, Variants } from "motion/react";

  const floatingVariant:Variants = {
  animate: {
    y: [5, -5, 30],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
} as const;
export default function FloatingCube({className}:{className:string}){
    return(
    <motion.div variants={floatingVariant} animate="animate"className={className}/>
    )
}