import React from 'react';
import PokeCell from './PokeCell';
import {pokeClasses} from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({onClick}) =>{//we generate a new array and then display it.
    const cells = pokeClasses.map(pokeClass =>{
        return(
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                onClick={onClick}
            />
        );
    });
    return(
        <section className="poke-list">
            {cells}
            </section>
    )
}

export default PokeList;