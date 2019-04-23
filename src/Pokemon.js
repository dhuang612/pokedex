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
       // console.log(data.stats);
       
        this.displayedPoke = this.stats.map(stat =>{
            //returning console.log(stat) shows the display
              if(this.stats.indexOf(stat.stat.name)=== -1){

               
                console.log(stat.base_stat, stat.stat.name);
                return(
                    <div>
                    <p>{stat.stat.name} {stat.base_stat}</p>
                    
                </div> 
                )
               
               
            }  
              
               console.log(data.stats)
        })
           
        
    }
    render(){
       
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


 this.filteredPokemonInfo = this.stats.filter(stat.stat.name =>{
            if(stats.indexOf(stat.stat.name)=== -1){
                
            }
        })
*/



