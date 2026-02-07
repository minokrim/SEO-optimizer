"use client";

import { motion } from "motion/react";
import Image from "next/image";
export function DashboardCard({ title, name,position,image }:{title:string,name:string,position:string,image:string}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "tween", stiffness: 300, damping: 20 }}
      className="bg-black w-full flex items-center justify-center mt-25 md:mt-50 hover:border-purple-500/40hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]">
        <div className="w-[90%] gap-5 border-black shadow-[0_0_1px_rgba(255,255,255,0.5)] border-[0.0001em] text-center flex flex-col md:flex-row items-start md:items-center justify-center px-5 py-20 md:p-25 bg-gradient-to-b bg-no-repeat from-[#8C45FF]/49 via-transparent to-black rounded-2xl">
        <Image src={image} height={200} width={150} alt='image'/>
        <div className="w-full md:w-[40%] flex flex-col justify-center text-left">
          <h4 className="text-xl w-full md:w-[80%]">{title}</h4>
          <div className="w-max text-left mt-5">
            <h5>{name}</h5>
            <p className="text-sm">{position}</p>
          </div>
        </div>
        </div>
    </motion.div>
  );
}
