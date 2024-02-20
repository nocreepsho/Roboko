"use client";

import { Hero, RoboCard } from "@/components";
import { robots } from "@/constants";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* How it works */}
      <div className="w-full bg-black" id="discover">
        <div className="w-full max-width padding-x text-white bg-black mt-36 pt-12 md:pt-16 pb-24 md:pb-[200px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn" }}
            className="max-width home__text_container md:mt-12">
            <h1 className="text-6xl font-extrabold">How it works</h1>
            <p className="mt-2 md:text-xl opacity-90">Renting is easy and effortless.</p>
          </motion.div>
          <div className="flex flex-col items-center justify-center mt-24 md:mt-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-32">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", type: "spring", stiffness: 150, damping: 24, duration: 0.8, delay: 0.5 }}
                className="flex flex-col items-center">
                <Spline scene="https://prod.spline.design/J7YDjAw0XJZDfSSR/scene.splinecode" />
                <h2 className="text-2xl md:text-4xl font-bold  mt-5">Search</h2>
                <p className="text-center mt-3 opacity-90 md:text-xl">Find the perfect robot for your needs.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", type: "spring", stiffness: 150, damping: 24, duration: 0.8, delay: 1.0 }}
                className="flex flex-col items-center">
                <Spline scene="https://prod.spline.design/m4poqLdKqOeqqwL3/scene.splinecode" />
                <h2 className="text-2xl md:text-4xl font-bold  mt-5">Book</h2>
                <p className=" text-center mt-3 opacity-90 md:text-xl">Book the robot for the time you need it.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", type: "spring", stiffness: 150, damping: 24, duration: 0.8, delay: 1.5 }}
                className="flex flex-col items-center">
                <Spline scene="https://prod.spline.design/h3fgDOHyrpkKY7ko/scene.splinecode" />
                <h2 className="text-2xl md:text-4xl font-bold  mt-5">Done</h2>
                <p className=" text-center mt-3 opacity-90 md:text-xl">The robot will be delivered to your location.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Safety */}
      <div className="w-full bg-black">
        <div className="flex flex-col md:flex-row w-full items-center max-width padding-x text-white bg-black pt-12 md:pt-12 pb-24 md:pb-[240px]">
          <div className="home__text_container md:mt-12">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn" }}
              className="text-6xl font-extrabold">Trust & Safety</motion.h1>
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
              className="w-1/2">
              <p className="text-medium mt-16 text-4xl opacity-90">Our Robots uphold the highest standard of trust & safety. Compliant with the Robot Safety Act.</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn" }}
            className="w-full">
            <Spline scene="https://prod.spline.design/oYcanBqtV5H6rOvR/scene.splinecode" />
          </motion.div>
        </div>
      </div>

      {/* Catalogue */}
      <div className="w-full bg-black">
        <div className="padding-x py-8 max-width bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn" }}
            className="home__text-container">
            <h1 className="text-6xl text-white font-extrabold">Catalogue</h1>
            <p className="opacity-85 md:text-xl">
              Find the perfect robot for your needs.
            </p>
          </motion.div>

          <section>
            <div className="home__robots-wrapper">
              {robots.map((robot) => (
                <RoboCard key={robot.name} robot={robot} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Payment options */}
      <div className="w-full bg-black">
      <div className="w-full max-width padding-x text-white bg-black pt-12 pb-24 md:pb-[250px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn" }}
            className="max-width home__text_container md:mt-12">
            <h1 className="text-6xl font-extrabold">Multiple payment options</h1>
            <p className="mt-2 md:text-xl opacity-90">We accept multiple payment options for easy booking.</p>
          </motion.div>
          <div className="flex flex-col items-center justify-center mt-24 md:mt-32">
            <div className="flex flex-col w-full md:flex-row justify-around items-center">
              <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", type: "spring", stiffness: 150, damping: 24, duration: 0.8, delay: 0.8 }}
                className="flex flex-col items-center">
                <Spline scene="https://prod.spline.design/bVOlNOXr7SJj5ffC/scene.splinecode" />
                <h2 className="text-2xl md:text-4xl font-bold  mt-5">Credit/Debit cards</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", type: "spring", stiffness: 150, damping: 24, duration: 0.8, delay: 1.0 }}
                className="flex flex-col items-center">
                <Spline scene="https://prod.spline.design/p84JwN6AQoYi7eQ7/scene.splinecode" />
                <h2 className="text-2xl md:text-4xl font-bold  mt-5">Bitcoin</h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
