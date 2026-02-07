import { useMotionValue,useTransform } from "motion/react";

export default function UseMouseParralax(strength=20){
    const x=useMotionValue(0);
    const y=useMotionValue(0);

    const mouseX=useTransform(x,[-0.5,0.5],[-strength,strength]);
    const mouseY=useTransform(y,[-0.5,0.5],[-strength,strength]);

function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  } 

  return{mouseX,mouseY,handleMouseMove};
}