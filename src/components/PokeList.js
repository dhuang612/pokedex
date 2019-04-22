import React from 'react';
import PokeCell from './PokeCell';
import {pokeClasses} from '../pokeClasses';
import './styles/PokeList.css';

const PokeList = ({handleOnClick}) =>{//we generate a new array and then display it.
    const cells = pokeClasses.map(pokeClass =>{
        return(
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                handleOnClick={handleOnClick}
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