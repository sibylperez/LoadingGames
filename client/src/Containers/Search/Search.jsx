import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayGames, resetAll, searchByName } from '../../Actions';


export default function NavBar() {
  const [name, setName] = useState('');
  const videogames = useSelector(state => state.searchByName)

  const dispatch = useDispatch()

  function handleSubmit(e) {
  e.preventDefault();
  dispatch(searchByName(name))
  dispatch(resetAll())
  dispatch(displayGames(videogames))
}

return (
<React.Fragment>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=> setName(e.target.value)}
        placeholder='Load videogame...' type='search'></input>
        <button type='submit' onSubmit={handleSubmit}>PLAY!</button>
      </form>
</React.Fragment>
)}