import React, { useState, useEffect }from 'react';
import { useDispatch } from 'react-redux'
import { searchByName } from '../../Actions/index'


export default function Search (){
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchByName())
    },  [dispatch])
    
    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchByName(name)
        setName('');
    }

    console.log(searchByName)
return (
<div>
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange}
        placeholder='Load videogame...' type='text'></input>
        <button type='submit'>PLAY!</button>        
    </form>
</div>
)}

