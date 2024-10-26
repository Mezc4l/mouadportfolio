import React from 'react'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'
import PlacePicker from '../assets/picker.png';
import Reflex from '../assets/reflex.png';
import SpyceBites from '../assets/SpicyBites.png';

const Projects = () => {

  const projectJson = [

    {
      title: 'PlacePicker',
      desc: 'PlacePicker is a web app for managing collections of visited or planned locations, built from scratch with a focus on user experience and performance.',
      image: PlacePicker,
      live: "https://spicybites.netlify.app/",
      github: "https://github.com/rohitsingh93300/YtSpicyBites"
    },
    {
      title: 'Reflex Timer: Test Your Precision',
      desc: 'I created The Almost Final Countdown, a responsive web app where users stop a timer close to a target time with 15 difficulty levels.',
      image: Reflex,
      live: "https://youtube-clone-93300.netlify.app/",
      github: "https://github.com/rohitsingh93300/YouTube-clone"
    },
    {
      title: 'Webelite builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Webelite,
      live: "https://www.webelitebuilders.com/",
      github: "#"
    },
    {
      title: 'Rent Car WebSite',
      desc: 'Super Car is an innovative project for renting high-performance vehicles designed for speed and efficiency. Its sleek, aerodynamic design ensures a modern, responsive driving experience.',
      image: Supercar,
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/rohitsingh93300/supercars"
    },
    {
      title: 'Sypic Bites',
      desc: 'Sypic Bites is a unique project for renting gourmet food trucks that deliver exceptional culinary experiences. Each truck features a modern design, offering a responsive service that delights food lovers.',
      image: SpyceBites,
      live: "https://supercar123.netlify.app/",
      github: "https://github.com/rohitsingh93300/supercars"
    },
  ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
