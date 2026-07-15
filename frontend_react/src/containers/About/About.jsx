import React, { useEffect, useState } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { client } from '../../Client'
import  { AppWrap } from '../../wrapper'
const fallbackImages = [images.about01, images.about02, images.about03, images.about04]



const resolveAboutImage = (about, index) => {
    if (!about?.imgUrl) {
        return fallbackImages[index % fallbackImages.length]
    }

    return about.imgUrl
}

const About = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "about"]{_id, name, description, "imgUrl": imgUrl.asset->url}'

        client
            .fetch(query)
            .then((data) => setAbouts(data || []))
            .catch((error) => {
                console.error('Failed to fetch about documents from Sanity:', error)
                setAbouts([])
            })
    }, [])

  return (
        <div className="app__about">
        <h2 className="head-text">I Know that <span>Good Development</span> <br/>means <span>Good Business</span> </h2>
        <div className="app__profiles">
        {abouts.map((about, index) => (
            <motion.div
                whileInView={{opacity: 1}}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.5, type: 'tween'}}
                className="app__profile-item"
                                key={about._id || `${about.name}-${index}`}
            >
                                <img src={resolveAboutImage(about, index)} alt={about.name || 'about'} />
                                <h2 className="bold-text app__profile-title">{about.name}</h2>
                <p className="p-text app__profile-description">{about.description}</p>
            </motion.div>
        ))}
    </div>
    </div>
  )
}

export default AppWrap(About, 'about')