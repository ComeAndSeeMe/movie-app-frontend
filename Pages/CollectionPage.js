
import React from 'react'
import LeftNav from '../components/LeftNav'
import Navigation from '../components/Navigation'
import End from '../components/End'
import Collection from '../components/Collection'
import MovieItem from '../components/MovieItem'
import MoviePicture from '../components/MovieItem/MoviePicture'

const CollectionPage = () => {
    return (
        <div>
            <Navigation />
            <LeftNav />
            <Collection />
            <End />
        </div>
    )
}

export default CollectionPage
