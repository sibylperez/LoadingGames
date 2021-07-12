  import React, { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import { searchById } from '../../Actions/index';

  export default function Detail({ id }) {
  const videogame = useSelector(state => state.searchById);

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(searchById(id));
  }, [dispatch, id]);

console.log(videogame)

  return (
  <div>
      <h2>{videogame.name}</h2>
      <img src={videogame.img} alt={videogame.name} />
      <p>({videogame.released})</p>
      <p>Genres: {videogame.genres}</p>
      <p>Rating: {videogame.rating} points.</p>
      <p>Platforms: {videogame.platforms}.</p>

      <strong>About this game:</strong>

      <p>{videogame.description}</p>

      <Link to="/home">
      <button type="submit">Home</button>
      </Link>

  </div>
  )}