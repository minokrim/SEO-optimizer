"use client";
import { useState,useEffect } from "react";
import Image from "next/image";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoBitcoin } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import { IoLogoHackernews } from "react-icons/io";
import { IoLogoBehance } from "react-icons/io5";
import { IoLogoDeviantart } from "react-icons/io5";
import { HiDocumentDuplicate } from "react-icons/hi";
import { GoGoal } from "react-icons/go";
import { HiCursorClick } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { features } from "@/types";
import ft from "@/app/Homepage/features.json";
import Footer from "../components/footer";
import Nav from "../components/nav";
import FloatingCube from "../components/ui/floatingCubes";
import UseMouseParralax from "../components/ui/mouseParralax";
import { SkeletonCard } from "../components/ui/skeletonCard";
import { PrimaryCTA } from "../components/ui/primaryCta";
import { DashboardCard } from "../components/ui/dashboardCard"; 
import { motion, Variant, Variants } from "motion/react";
import {Carousel,CarouselContent,CarouselItem,} from "@/app/components/ui/carousel";

export default function HomePage() {
  const iconsMap: Record<string, React.ElementType> = {
    FaChartLine: FaChartLine,
    GoGoal: GoGoal,
    HiMiniBellAlert: HiMiniBellAlert,
    BsStars: BsStars,
    HiDocumentDuplicate: HiDocumentDuplicate,
    HiCursorClick: HiCursorClick,
  };

  const { mouseX, mouseY, handleMouseMove } = UseMouseParralax(4);

const container:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const item:Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1200);
  return () => clearTimeout(timer);
}, []);



  return (
    <div className="h-full bg-black text-white pb-5 flex flex-col items-center justify-center">
      <Nav/>
      <section
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="rounded-b-xl"
      >
        <div  className="flex flex-col inset-x-0 inset-y-0 bg-gradient-to-tl bg-no-repeat from-[#8C45FF] via-transparent to-black">
          <motion.section variants={container} onMouseMove={handleMouseMove} style={{ x: mouseX, y: mouseY }} className="flex justify-around">
            <motion.div variants={container}  className="relative flex flex-col gap-5 w-full md:w-[50%] h-[50vh] md:h-[80vh] justify-center px-5">
              <motion.div variants={container} className="flex rounded-full border-[0.001em] border-solid border-gray-500 md:w-max px-3 py-2 items-center justify-center gap-2 w-full">
                <motion.p variants={item} className="rounded-3xl bg-[#9855FF] font-semibold px-2 text-black">
                  New
                </motion.p>
                <motion.h5 variants={item} className="text-[#9855FF] font-medium text-sm md:text-xl">
                  Latest integration just arrived
                </motion.h5>
              </motion.div>

              <motion.h1 variants={item} className="text-transparent bg-clip-text bg-gradient-to-br from-black/10 via-white to-white text-4xl font-semibold md:text-8xl w-full ">
                Elevate your SEO efforts.
              </motion.h1>

              <motion.h4 variants={item} className="w-full text-md md:text-2xl font-sans text-white">
                Elevate your site's visibility effortlessly with AI, where smart
                technology meets user-friendly SEO tools.
              </motion.h4>
            </motion.div>


            <section className="relative z-5 hidden mt-10 w-1/3 items-center justify-center align-middle md:flex">
              <FloatingCube className="absolute top-10 right-50 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-30 right-20 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-70 right-10 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-95 right-50 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-30 right-80 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-70 right-80 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-50 right-50 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-110 right-80 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-110 right-10 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
              <FloatingCube className="absolute top-140 right-45 w-26 h-26 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl"/>
            </section>
          </motion.section>

          <div className="flex flex-col w-full p-5 items-center gap-0 md:flex md:flex-row md:gap-5">
            <p className="text-white">Trusted by top innovative teams:</p>
            <section className="flex items-center w-[100%] gap-5 md:w-[80%]">
              <Carousel
                className="w-full"
                plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
                opts={{
                  align: "start",
                  loop: true,
                  containScroll: false,
                  skipSnaps: false,
                }}
              >
                <CarouselContent className="w-[100%] md:w-[20%]">
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoAndroid />
                    <h5>Android</h5>
                  </CarouselItem>
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoApple className="text-2xl" />
                    <h5>Apple</h5>
                  </CarouselItem>
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoBehance className="text-2xl" />
                    <h5>Behance</h5>
                  </CarouselItem>
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoBitcoin className="text-2xl" />
                    <h5>Bitcoin</h5>
                  </CarouselItem>
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoDeviantart className="text-2xl" />
                    <h5>DevianTart</h5>
                  </CarouselItem>
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoDribbble className="text-2xl" />
                    <h5>Dribble</h5>
                  </CarouselItem>
                  <CarouselItem className="flex items-center gap-3 text-2xl">
                    <IoLogoHackernews className="text-2xl" />
                    <h5>Hacker News</h5>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </section>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <p className="text-[#9855ff] text-md border-black shadow-[0_0_1px_rgba(255,255,255,0.5)] border-[0.0001em] rounded-4xl py-1 px-5 w-max mt-5">
          Everything you need
        </p>
        <h3 className="w-[90%] md:w-[42%] text-center text-2xl md:text-4xl mt-5">
          Harness the power of AI, making search engine optimization intuitive
          and effective for all skill levels.
        </h3>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 5, y: 0 }} transition={{ duration: 2, ease: "easeOut" }}>
            {loading ? <SkeletonCard /> : <Image src="/App.png" alt="dashboard image" height={200} width={2000} className="mt-10"/>}
            
        </motion.div>

        <div className="w-full flex flex-wrap gap-10 items-center justify-around mt-10 md:mt-0">
          {ft.map((Feature: features) => {
            const Icon = iconsMap[Feature.icon];
            return (
              <section key={Feature.id} className="flex flex-col w-[80%] md:w-[350px] items-start md:items-start">
                  <section className="flex gap-5 items-center text-center md:text-left w-full">
                    {Icon && <Icon />}
                    <h4 className="w-max font-semibold">{Feature.feature}</h4>
                  </section>
                  <h5 className="w-full md:w-[80%] text-wrap text-s mt-3 font-normal ">
                    {Feature.desc}
                  </h5>
              </section>
            );
          })}
        </div>
      </section>


      {/* <section className=" bg-black w-full flex items-center justify-center mt-25 md:mt-50">
        <div className="w-[90%] gap-5 border-black shadow-[0_0_1px_rgba(255,255,255,0.5)] border-[0.0001em] text-center flex flex-col md:flex-row items-start md:items-center justify-center px-5 py-20 md:p-25 bg-gradient-to-b bg-no-repeat from-[#8C45FF]/49 via-transparent to-black rounded-2xl">
          <Image src="/avatar.png" height={200} width={150} alt="image of customer"/>
        <div className="w-full md:w-[40%] flex flex-col justify-center text-left">
          <h4 className="text-xl w-full md:w-[80%]">”This product has completely transformed how I manage my projects and deadlines”</h4>
          <div className="w-max text-left mt-5">
            <h5>Talia Taylor</h5>
            <p className="text-sm">Digital Marketing Director @ Quantum</p>
          </div>
        </div>
        </div>
      </section> */}

      <DashboardCard title="This product has completely transformed how I manage my projects and deadlines" name="Talia Taylor" position="Digital Marketing Director @ Quantum" image="/avatar.png"/>


      <section className="flex items-center justify-center mt-20 w-full">
        <div className="w-[90%] bg-gradient-to-b from-[#8C45FF]/49 via-transparent to-black"> 
          <div style={{backgroundImage:"url('/stars.png')",backgroundSize: "cover", backgroundPosition: "center"}} className="items-center justify-center flex flex-col w-full border-black shadow-[0_0_1px_rgba(255,255,255,0.5)] border-[0.0001em] px-5 py-20 md:p-30">
        <Image src="/icon.png" height={100} width={100} alt="icon"/>
        <h3 className="text-4xl text-white font-semibold text-wrap md:w-[40%] text-center mt-5">The magic of AI at your fingertips.</h3>
        <p className="text-center font-normal w-full md:w-[30%] mt-5  mb-2 text-xl">Achieve clear, impactful results without the complexity.</p>
        <PrimaryCTA>Try for free</PrimaryCTA>
        </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
