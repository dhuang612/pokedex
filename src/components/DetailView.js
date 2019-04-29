import React from 'react';
import './styles/DetailView.css';
import Pokemon from '../Pokemon';
import { Stats, stat } from 'fs';
import {showPokemonLocation} from '../components/App';



const DetailViews = ({pokemon}) =>{
    //defined the variable here.
    const{id, name, sprite, type} = pokemon;
    //defined the function here
    const displayedPokeStats = pokemon.displayedPokeStats;
    const showPokemonLocation = pokemon.showPokemonLocation;
    
   
   

    return(
    <section className="detail-view">
    <img src={sprite} className='sprite-image' alt="sprite" />
    <div className='data-wrapper'>
         <h1 className='data-name'>ID: {id} {name}</h1>
            <p className="data-char">Type: {type}</p>
            <div className="data-info">{displayedPokeStats}
           
            </div>
                <p>{[showPokemonLocation]}</p>
         
    </div>
</section>    
        
    )
}

export default DetailViews;

/*
 <p>{this.pokemonStats}</p>

    const pokeStats = this.stats.map(stat =>{
        return(
            {
               stat 
            }
        )
    })
         <p>{stats()}</p>
   <p>{stats.map(stat=> <div>{stat.stats}</div>)}</p>


 <p>{stats.map(stat =>
                            <div>{stat.stats.base_stat}</div>
                   )}</p>

*/