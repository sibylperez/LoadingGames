import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { displayGames, getVideogames } from '../../Actions/index';
import Videogames from '../../Components/Videogames/Videogames'
import Loading from '../Loading/Loading'


export default function Home() {
  const videogames = useSelector(state => state.videogames)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])
  
  if (videogames.length !== 0){
    dispatch(displayGames(videogames))
  } 

  
  
return (
  <React.Fragment>
    <div>
      {videogames.length === 0 ?
      <Loading /> : <Videogames/>}
    </div>
  </React.Fragment>
)}



