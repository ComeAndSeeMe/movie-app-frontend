import React from 'react'
import Slider from '../components/Slider'
import Grid from '../components/Grid'
import Median from '../components/Median'
import Navigation from '../components/Navigation'
import End from '../components/End'

const HomePage = () => {
    
    return (
        <div>
         <Navigation />
         <Slider />
         <Median />
         <Grid />
         <End />
        </div>
    )
}

export default HomePage
