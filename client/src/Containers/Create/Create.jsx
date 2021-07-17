import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewVideogame, getGenres } from '../../Actions';
import style from './Create.module.css'

export default function Create(){
  const dispatch = useDispatch();
  const apigenres = useSelector((state) => state.genres);
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [creationDate, setCreationDate] = useState('')
  const [rating, setRating] = useState(0)
  const [genre, setGenre] = useState([])
  const [platform, setPlatform] = useState([])

    
    //Llamo a los Generos y Plataformas
  useEffect(() => {
   dispatch(getGenres());
  }, [dispatch]);

  //Handlers
const handleSubmit = (e) => {
  e.preventDefault();

       //Validar los campos
  if(!name) { alert("Name requires")
        return}
  if(!description) { alert("Description requires")
        return}
  if(!creationDate) { alert("Creation Date requires.")
        return}
  if(rating > 50 || rating < 0) { alert("The rating should be between 0 and 50.")
        return}

const game = {
  name: name,
  description: description,
  creationDate: creationDate,
  rating: rating,
  platform: platform,
  genre: genre
}
    
    //Dispatch nuevo juego
   dispatch(addNewVideogame(game));
  e.target.reset();
        
  setName('')
  setDescription('')
  setRating(0)
  setCreationDate('')
  setPlatform([])
  setGenre([])

  alert ('New Game Loaded');
};

const handleName = (e) => {
  setName(e.target.value)
}

const handleDescription = (e) => {
  setDescription(e.target.value)
}

const handleRelease = (e) => {
  setCreationDate(e.target.value)
}

const handleRating = (e) => {
  setRating(e.target.value)
}

const handlePlatforms = (e) => {
  let flag = true
  platform.forEach((c) => {
    if (e.target.value === c) {
      setPlatform(platform.filter(a => e.target.value !== a))
      return flag = false
    }
  })
  if (flag) {
    setPlatform(platform.concat(e.target.value))
  }
}

const handleGenres = (e) => {
  let flag = true
  genre.forEach((c) => {
    if (e.target.value === c) {
      setGenre(genre.filter(a => e.target.value !== a))
      return flag = false
    }
  })
  if (flag) {
    setGenre(genre.concat(e.target.value))
  }
}

const arrPlatforms = ['PlayStation 4', 'PlayStation 5', 'PC', 'Xbox', 'PS Vita', 'Android', 'iOS', 'macOS']
const genres = [... new Set(apigenres)];
console.log(genres)
return (
  <div className = {style.card}>
    <div className= {style.ctnF}>   
        <h1>Create NEW Game</h1>
        <Link to='/home'>Home</Link>
        <form 
          onSubmit={(e) => handleSubmit(e)}>
          <div><label>Name</label>
            <input type="text" name="name" value = {name} onChange={(e) => { handleName(e) }}></input>
          </div>
          <div><label>Description</label>
            <textarea type="text" name="description" value={description} onChange={(e) => { handleDescription(e) }}></textarea>
          </div>
          <div><label>Creation Date</label>
            <input type="date" name="creationDate" value={creationDate} onChange={(e) => { handleRelease(e) }}></input>
          </div>
          <div> <label>Rating</label>
            <input type="number" name="rating" value={rating} onChange={(e) => { handleRating(e) } }></input>
          </div>
          <div>
          <h4>Genres</h4>
            {genres.map((e) => {return (
              <div key={e.name}><input type='checkbox' name='genres' value={e.name} onChange={(e) => { handleGenres(e) }}/>
                <label name={e.name}>{e.name}</label>
              </div>)})}
          </div>
          <div>       
          <div>
            <h4>Platforms</h4>
            {arrPlatforms.map((e) => { return (
              <div key={e.id}><input type='checkbox' name='platforms' value={e} onChange={(e) => { handlePlatforms(e) }}/>
                 <label name={e}>{e}</label>
              </div>)})}
          </div>
          <button type="submit"> Add videogame </button>
          </div>
        </form>
    </div>
  </div>
)}