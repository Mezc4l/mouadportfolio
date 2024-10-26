import React from 'react'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex items-center lg:h-[90vh] justify-center' >
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug '>Hi There, I'm Mouad <span className='text-red-500'>Lakhnati</span></h1>
            <p className='md:text-2xl text-xl mb-4'>Full-Stack Developer</p>
            <p className='mb-4'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
            {/* <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing" download target='_blank'>Download CV</a></button> */}
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>

            <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
            <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
