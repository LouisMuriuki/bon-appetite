import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import React from 'react'
import './Home.css'
import {motion } from 'framer-motion'
import Dessert from '../components/Desserts'
import Berbaque from '../components/Berbaque'
function Home() {
    return (
        <motion.div
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}} >
            <div>
            <Popular />
            <Berbaque/>
            <Veggie />
            <Dessert/>
            </div>

        </motion.div>
    )
}

export default Home