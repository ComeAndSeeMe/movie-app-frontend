
import React from 'react'
import LeftNav from '../components/LeftNav'
import Navigation from '../components/Navigation'
import End from '../components/End'
import List from '../components/List'
import MoviePicture from '../components/MovieItem/MoviePicture'
import MovieItem from '../components/MovieItem'


const ListPage = () => {
    return (
        <div>
            <Navigation />
            <LeftNav />
            <MovieItem />
            <End />
        </div>
    )
}

export default ListPage
