import { section } from 'motion/react-client'
import {useRef} from 'react'
import React from 'react'
import { assets } from '../assets/assets'
import Card from '../components/Card'
import { logos } from '../assets/logos/logos'
import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'

const About = () => {
    const grid2Container = useRef();
  return (
    <section id='about' className='c-space section-spacing'>
        <h2 className='text-heading'>About Me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6
        md:auto-rows-[18rem] mt-12'>
            <div className='flex items-end grid-default-color grid-1'>
                <img src={assets.codingPOV} alt="" 
                className='absolute scale-[1.75] -right-[5rem]
                -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 
                lg:scale-[2.5]'/>
                <div className='z-10'>
                    <p className='headtext'>Hey, I'm Parv Chaturvedi</p>
                    <p className='subtext'> 
                        I am a 3rd-year B.Tech CSE undergraduate passionate 
                        about building scalable, 
                        dynamic, and responsive web and software applications. 
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none 
                -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
            </div>
                <div className='grid-default-color grid-2 '>
                    <div ref={grid2Container} 
                    className='flex items-center 
                    justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            CODE IS TEDIOUS
                        </p>
                        <Card style ={{rotate: "75deg", top:"30%", 
                            left:"20%"}} 
                            text ="Code Logic"
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "-30deg", top:"60%", 
                            left:"45%"}} 
                            text ="Frameworks"
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "25deg", top:"30%", 
                            left:"70%"}} 
                            text ="Debugging"
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "-45deg", top:"55%", 
                            left:"0%"}} 
                            text ="Libraries"
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "0deg", top:"10%", 
                            left:"38%"}} 
                            text ="API"
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "30deg", top:"70%", 
                            left:"70%"}} 
                            image={logos.nodejs}
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "-45deg", top:"70%", 
                            left:"25%"}} 
                            image={logos.mongodb}
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "-45deg", top:"5%", 
                            left:"10%"}} 
                            image={logos.react}
                            containerRef = {grid2Container}
                        />
                        <Card style ={{rotate: "-45deg", top:"5%", 
                            left:"10%"}} 
                            image={logos.express}
                            containerRef = {grid2Container}
                        />
                    </div>    
                </div> 

            <div className='grid-black-color grid-3 '>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>
                            Time Zone
                    </p>
                    <p className='subtext'>
                        I'm based in Venus, and open to remote work 
                        worldwide
                    </p>
                </div>
                <figure className='absolute left-[30%] top-[10%]'>
                    <Globe />
                </figure>
            </div>
            <div className='grid-special-color grid-4 '>
                <div className='flex flex-col items-center 
                justify-center gap-4 size-full'>
                    <p className='text-center headtext'>
                       Do you want to start a project together?
                    </p>
                    <CopyEmailButton />
                </div>
            </div>
            <div className='grid-default-color grid-5 '>
                 <div className="z-10 w-[50%]">
                    <p className="headText">Teck Stack</p>
                    <p className="subtext">
                        I specialize in a variety of languages, frameworks, 
                        and tools that allow me to build robust and 
                        scalable applications
                    </p>
            </div>
                <div className='absolute inset-y-0 md:inset-y-9 w-full
                h-full start-[50%] md:scale-125'>
                    <Frameworks />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About