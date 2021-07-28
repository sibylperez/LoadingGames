import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewVideogame, getGenres, getPlatforms } from '../../Actions';
import style from './Create.module.css'

export default function Create() {
  const dispatch = useDispatch();
  const apigenres = useSelector((state) => state.genres);
  const apiplatforms = useSelector((state) => state.platforms)

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    creationDate: "",
    rating: 0,
    genres: [],
    platforms: [],
  })

  
//Llamo a los Generos y Plataformas
  useEffect(() => {
    dispatch(getGenres())
    dispatch(getPlatforms())
  }, [dispatch])

//Handlers
const handleSubmit = (e) => {
  e.preventDefault();

  const game = {
    name: form.name,
    description: form.description,
    image: form.image,
    creationDate: form.creationDate,
    rating: form.rating,
    genres: form.genres,
    platforms: form.platforms
  }

//Validar los campos
  if(!game.name) { alert("Name requires")
        return}
  if(!game.description) { alert("Description requires")
        return}
  if(!game.creationDate) { alert("Creation Date requires.")
        return}
  if(game.rating > 50 || game.rating < 0) { alert("The rating should be between 0 and 50.")
        return}
  
//Dispatch nuevo juego
  dispatch(addNewVideogame(game));
  e.target.reset();
        
  setForm({
    name: "",
    description: "",
    image: "",
    creationDate: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  alert ('New Game Loaded');
};

const handleChange = (e) => {
  if (e.target.name === "genres" || e.target.name === "platforms") {
    const arr = form[e.target.name];
    setForm({
      ...form,
      [e.target.name]: arr.concat(e.target.value),
    });
  } else {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
};

const platforms = [... new Set(apiplatforms)]

return (
<div className= {style.formG}>  
  <div className = {style.card}>
    <h1 className= {style.title}>Create a NEW Game to Load!</h1>
    <Link className= {style.btnD} to="/home"><button className= {style.btnD} type="submit">Home</button></Link>
      <form className={style.bodyForm}
        onChange={(e) => handleChange(e)}
        onSubmit={(e) => handleSubmit(e)} >
      <div className= {style.divForm}>
        <label className= {style.label}>Name</label>
          <input type="text" name="name" value = {form.name}></input>
      </div>
      <div className= {style.divForm}>
        <label className= {style.label}>Creation Date</label>
           <input type="date" name="creationDate" value={form.creationDate}></input>
      </div>
      <div className= {style.divForm}> 
        <label className= {style.label}>Rating</label>
          <input type="number" name="rating" value={form.rating}></input>
      </div>
      <div>
      <div className= {style.divForm}>
        <label className= {style.label}>Description</label>
            <textarea type="text" name="description" value={form.description}></textarea>
      </div>
        <h4>Genres</h4>{apigenres.map((e) => (
          <div key={e.name} className={style.genres}><input type='checkbox' name='genres' value={e.id}/>
            <label name={e.name}>{e.name}</label></div>))}
            </div>
      <div>       
        <h4>Platforms</h4>{platforms.map((e) => (
          <div key={e.name} className={style.platforms}><input type='checkbox' name='platforms' value={e.id}/>
            <label name={e.name}>{e.name}</label></div>))}
      </div>
      <div>
        <button type="submit" className={style.btnForm}> Add videogame </button>
      </div>
    </form>
  </div>
</div> 
)}