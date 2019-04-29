import { prototype } from "stream";
import React from 'react';
import { version } from "punycode";
import {showPokemonLocation} from '../src/components/App';
/*
this is organizing our data received from the api.
also known as a class property.
*/
class Pokemon{
    
    constructor(data){
        console.log(data)
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
     
        this.stats = data.stats;
       
            
        this.displayedPokeStats = this.stats.map(stat =>{
            //returning console.log(stat) shows the display
              if(this.stats.indexOf(stat.stat.name)=== -1){
                    console.log(stat.base_stat, stat.stat.name);
                return(
                    <div>
                        <p>{stat.stat.name} {stat.base_stat}</p>
                    </div> 
                )
            }  
        })
        
       
       
  
        //currently have promise setup to return data. need to parse through info to get down to correct label
      
        
    }
   


} 

export default Pokemon;


           




