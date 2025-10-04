import React from 'react'
import {motion, useScroll, useTransform, useSpring} from 'motion/react'
import { assets } from '../assets/assets'


const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping : 50}) 
    
    const mountain3Y = useTransform(x, [0, 0.5],
        ["0%", "70%"]);
    const planetsX = useTransform(x, [0, 0.5],
        ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5],
        ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5],
        ["0%", "0%"]);

  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='realtive h-screen overflow-y-hidden'>
        <div className='absolute inset-0 w-full h-screen -z-50'
        style={{
            backgroundImage: `url(${assets.sky})` ,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
        }} />
        <motion.div className='absolute inset-0 -z-40' 
        style={{
            backgroundImage: `url(${assets.mountain3})` ,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain3Y,
        }} />
        <motion.div className='absolute inset-0 -z-30' 
        style={{
            backgroundImage: `url(${assets.planets})` ,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x:planetsX
        }} />
        <motion.div className='absolute inset-0 -z-20' 
        style={{
            backgroundImage: `url(${assets.mountain2})` ,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain2Y,
        }} />
        <motion.div className='absolute inset-0 -z-10' 
        style={{
            backgroundImage: `url(${assets.mountain1})` ,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y:mountain1Y,
        }} />
      </div>
    </section>
  )
}

export default ParallaxBackground