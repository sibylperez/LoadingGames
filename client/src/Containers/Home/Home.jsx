import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, resetAll } from '../../Actions/index'
import Videogames from '../../Components/Videogames/Videogames';
import Pagination from '../../Components/Pagination/Pagination';


export default function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(resetAll());
    dispatch(getVideogames());
  }, [dispatch]);

// Filtrado y Ordenado 
  let allgames;
  filterBy === "All" && orderBy === "Select"
    ? (allgames = videogames)
    : (allgames = filteredVideogames);

// Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = allgames.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div >
      <div>
        <Videogames videogames={currentPageGames} />
      </div>
      <div>
        <Pagination
          videogamesPerPage={videogamesPerPage}
          totalVideogames={allgames.length}
          paginate={paginate}
        />
      </div>  
    </div>
  );
};
  



