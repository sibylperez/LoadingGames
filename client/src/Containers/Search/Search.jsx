import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../Actions/index';
import Videogames from '../../Components/Videogames/Videogames';
import Pagination from '../../Components/Pagination/Pagination';
import style from './Search.module.css'


export default function Search() {
  const dispatch = useDispatch();
  let { name } = useParams()
  
  const searchVideogame = useSelector((state) => state.searchByName);
  
  useEffect(() => {
  dispatch(searchByName(name));
  }, [dispatch, name]);
    
    // Paginacion
  function paginate(e, num) {
  e.preventDefault();
  setPage(num);
  }
  
  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);
  
  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = searchVideogame.slice(firtsCardPerPage, lastCardPerPage);
  
return (
  <div>
    {searchVideogame.length > 0 ?
      <React.Fragment>
        <h1 className= {style.titleSearch}>Games Load with name </h1>
        <p className= {style.titleName}>{name}!</p>
          <Videogames videogames={currentPageGames} />
            <Pagination
              videogamesPerPage={videogamesPerPage}
              totalVideogames={searchVideogame.length}
              paginate={paginate}/>
      </React.Fragment> : <h1></h1>}
  </div>
)};
