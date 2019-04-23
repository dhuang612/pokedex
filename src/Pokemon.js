import { prototype } from "stream";
import React from 'react';
//this is going out to the api and grabbing back info.


class Pokemon{
    
    constructor(data){
        
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
        //array of objects
        this.height = data.height;
        this.stats = data.stats
        this.filterPokeStats = this.stats.filter()
        this.displayedPoke = this.stats.map(stat =>{
            //returning console.log(stat) shows the display
               console.log(stat.base_stat);
               return(
                  <div>
                      <p>Speed: {stat.base_stat}</p>
                      <p>Special Defense: {stat.base_stat}</p>
                      <p>Special Attack: {stat.base_stat}</p>
                      <p>Defense: {stat.base_stat}</p>
                      <p>Speed: {stat.base_stat}</p>
                      <p>Attack: {stat.base_stat}</p>
                      <p>HP: {stat.base_stat}</p>
                  </div> 
               );
               console.log(data.stats)
        })
           
        
    }
    


} 

export default Pokemon;

/*
const stats = function(){
  
        
            return(
                <div>
                    {stat.stats.base_stat}
                </div>
            )
            
    
    })
}

})
*/



