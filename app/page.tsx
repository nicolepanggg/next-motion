"use client";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const variant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="m-auto container mt-5">
      <h1><b>Run:</b><br />npm install framer-motion</h1>
      <motion.div
        className="square"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible, only once
      >
        Welcome to Framer Motion 1 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: {
            scale: 1, rotate: 360,
            transition: { duration: 1, ease: 'easeInOut' }
          }
        }}
        initial={{ scale: 0, rotate: 0 }}
      >
        Welcome to Framer Motion 2 !
      </motion.div>

      <motion.div
        className="square"
        whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0,0,0,0.3)' }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        Welcome to Framer Motion 3!
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 1, x: 0 },
          visible: {
            opacity:1,
            x: [0, 100, -100, 0],
            rotate: [0, 90, -90, 0],
            transition: { duration: 1, times: [0, 0.3, 0.7, 1], ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 4!
      </motion.div>

      <motion.div
        className="square"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        whileHover={{ scale: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Welcome to Framer Motion 5!
      </motion.div>

      <motion.div
        className="square"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 2 }}
        transition={{ duration: 0.3 }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Welcome to Framer Motion 6!
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 1, height: 0 },
          visible: {
            height: "300px",
            transition: { duration: 5, delay: 0.3, }
          }
        }}
      >
        Welcome to Framer Motion 7 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { scale: 0, rotate: 0 },
          visible: {
            scale: 1,
            rotate: 360,
            transition: { duration: 1, ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 8 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { scale: 0, rotate: 0 },
          visible: {
            scale: 1,
            rotate: 360,
            transition: { duration: 1, ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 9 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        animate={{ x: 100 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1, x: 0,
            transition: { duration: 2, ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 10 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        animate={{ x: [0, 100, 0] }}
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: {
            opacity: 1, x: 100,
            transition: { duration: 1, ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 11 !
      </motion.div>

      <motion.div
        className="square"
        initial={{ opacity: 0 }}
        whileHover={{ backgroundColor: "rgba(220, 220, 220, 1)" }}
        whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Welcome to Framer Motion 12, Hover Me!
      </motion.div>


      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { scale: 0, rotate: 0 },
          visible: {
            scale: 1,
            rotate: 360,
            transition: { duration: 1, ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 13 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1, x: 0,
              transition: { duration: 1, ease: 'easeInOut' }
            },
          }
        }
        initial="hidden"
      >
        Welcome to Framer Motion 14 !
      </motion.div>

      <motion.div
        className="square"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1, x: 0,
            scale: 1, rotate: 360,
            transition: { duration: 1, ease: 'easeInOut' }
          }
        }}
        initial="hidden"
      >
        Welcome to Framer Motion 15 !
      </motion.div>

      { /*Scroll animation*/
  // // Ref
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);

  // // useScroll
  // const { scrollYProgress: progress1 } = useScroll({
  //   target: ref1,
  //   offset: ["start end", "end start"],
  // });
  // const { scrollYProgress: progress2 } = useScroll({
  //   target: ref2,
  //   offset: ["start end", "end start"],
  // });
  // const { scrollYProgress: progress3 } = useScroll({
  //   target: ref3,
  //   offset: ["start end", "end start"],
  // });

  /*First animation opacity 0→1，y from -50→0*/
  // const opacity1 = useTransform(progress1, [0, 1], [0, 1]);
  // const y1 = useTransform(progress1, [0, 1], [-50, 0]);

  /*Second animation scale 0→1，rotate 0→360*/
  // const scale2 = useTransform(progress2, [0, 1], [0, 1]);
  // const rotate2 = useTransform(progress2, [0, 1], [0, 360]);

  /*Third animation move 0→100→-100→0，rotate 0→90→-90→0*/
  /* We use 4 stages to distribute in the range of 0~1:*/
  // const x3 = useTransform(
  //   progress3,
  //   [0, 0.3, 0.7, 1],
  //   [0, 100, -100, 0]
  // );
  // const rotate3 = useTransform(
  //   progress3,
  //   [0, 0.3, 0.7, 1],
  //   [0, 90, -90, 0]
  // );
  /*Scroll animation End*/


      /*Scroll animation*/
      /*<div style={{ height: "200vh", paddingTop: "150px" }}>
        <div ref={ref1} style={{ marginBottom: "150px" }}>
          <motion.div
            className="square bg-red-500 text-white flex justify-center items-center font-bold"
            style={{ opacity: opacity1, y: y1 }}
          >
            Welcome to Framer Motion 1 !
          </motion.div>
        </div>

        <div ref={ref2} style={{ marginBottom: "150px" }}>
          <motion.div
            className="square bg-green-500 text-white flex justify-center items-center font-bold"
            style={{ scale: scale2, rotate: rotate2 }}
          >
            Welcome to Framer Motion 2 !
          </motion.div>
        </div>

        <div ref={ref3} style={{ marginBottom: "150px" }}>
          <motion.div
            className="square bg-blue-500 text-white flex justify-center items-center font-bold"
            style={{ x: x3, rotate: rotate3 }}
          >
            Welcome to Framer Motion!
          </motion.div>
        </div>
      </div>
      /*Scroll animation End*/}
    </div>
  );
}
