import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayGames, resetAll, searchByName,getVideogames } from '../../Actions';


export default function NavBar() {
  const [name, setName] = useState('');
  const videogamesName = useSelector(state => state.searchByName)
  const videogames = useSelector(state => state.videogames)

  const dispatch = useDispatch()

  function handleSubmit(e) {
  e.preventDefault();
  dispatch(searchByName(name))
  dispatch(resetAll())
  dispatch(displayGames(videogamesName))
  setName('')
}
  function handleReset(e){
    e.preventDefault();
    dispatch(getVideogames(videogames))
  }

return (
<React.Fragment>
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={(e)=> setName(e.target.value)}
    placeholder='Load videogame...' type='search'></input>
      <button type='submit' onSubmit={handleSubmit}>PLAY!</button>
      <button type='submit' onSubmit={handleReset}>Reset</button>
  </form>
</React.Fragment>
)}