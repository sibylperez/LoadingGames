import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { displayGames, getVideogames } from '../../Actions/index';
import Videogames from '../../Components/Videogames/Videogames'


export default function Home() {

  const videogames = useSelector(state => state.videogames)
  const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getVideogames())
    }, [])

    if (videogames.length !== 0){
      dispatch(displayGames(videogames))
    }

    return (
        <div>
          {videogames.length === 0 ?
          <div>Cargando...</div> : <Videogames />}
        </div>
    )
}



