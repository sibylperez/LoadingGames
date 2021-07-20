import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchById } from '../../Actions/index';
import style from './Details.module.css';

export default function Detail({ id }) {
  const videogame = useSelector(state => state.searchById);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(searchById(id));
  }, [dispatch, id]);
  
  
return (
  <div className= {style.cardD} >
      <img className={style.imgD} src={videogame.img} alt={videogame.name} />
        <div className = {style.ctnD}>
          <p className= {style.nameD}>{videogame.name}</p>
          <Link className= {style.btnD} to="/home"><button className= {style.btnD} type="submit">Home</button></Link>
          <p className= {style.ratingD}> {videogame.rating} ⭐ points</p>
          <p className = {style.paraD}><b>Genres:</b> {videogame.genres}</p>
          <p className = {style.paraD}><b>Platforms:</b> {videogame.platforms}.</p>
          <strong className= {style.strong}>About this game:</strong>
        <p className = {style.descriptionD} dangerouslySetInnerHTML={{__html: videogame.description}}></p>
      </div>
  </div>
)}