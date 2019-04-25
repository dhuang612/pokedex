import { prototype } from "stream";
import React from 'react';
import { version } from "punycode";

/*
this is organizing our data received from the api.
also known as a class property.
*/
class Pokemon{
    
    constructor(data){
        
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
        //array of objects
        this.height = data.height;
        this.stats = data.stats;
        //this returns a link to a separate page with additional info.
        
       //going to add in a second fetch for the encounter location.
       
        console.log(this.location_area_encounters);
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
        this.location_area_encounters = fetch(data.location_area_encounters)
            .then(res => res.json())
            .then(data =>{
                    console.log(data);
              
                    
            });
           
        
    }
  

} 

export default Pokemon;

/*
    if(([data.version_details]) === 'red'){
                    console.log(data.version_details);
                }


     if(this.location_area_encounters = undefined){
                    return Pokemon;
                }
                if(this.version_details[version:{'red'}] === 'red'){
                    console.log(data);
                }
*/



