import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';
//this is grabbing information from an internal sheet.
const PokeCell = ({pokeClass, onClick}) =>{
    //we set in data into the pokeClass function
    const{id, backgroundPosition} = pokeClass;
    const style= {backgroundImage: `url(${sprites})`,
        backgroundPosition};

    return <button onClick={() => onClick(id)} style={style} className="poke-cell"></button>
};

export default PokeCell;