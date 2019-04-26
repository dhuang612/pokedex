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
        this.encounterlocations = data.location_area_encounters;
        this.stats = data.stats;
        //this returns a link to a separate page with additional info.
        
       //going to add in a second fetch for the encounter location.
       
        console.log(this.encounterlocations);
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

/*

 for(let x = 0; x < ([data[i].version_details[x].length]); x++){
                               
                        console.log(data[i].version_details[x]);
                            }
 if(([[data[i].version_details[x].version.name] ==='red'])){
                            console.log(([[data[i].version_details[x].version.name]]));


/////////////////////////////////////////
this is pulling down into an individual array:
console.log(([[data[0]]]));

if(([{data}]).version_details[i].version ==='red'){
                            console.log(([{data}]).version_details);

    if(([data.version_details]) === 'red'){
                    console.log(data.version_details);
                }


     if(this.location_area_encounters = undefined){
                    return Pokemon;
                }
                if(this.version_details[version:{'red'}] === 'red'){
                    console.log(data);
                }





                  this.location_area_encounters = fetch(data.location_area_encounters)
            .then(res => res.json())
            .then(data =>{//need to account for the data not being available immediately
                    console.log(data);
                    for(let i = 0; i <data[i].version_details.length; i++){
                        //array of objects is next.
                        console.log(data[i].version_details);

                        for(let x = 0; x < data[i].version_details[x]; x++){
                           
                            console.log(data[i].version_details[x]);
                        }
                       
                        //this next for loop is not currently accomplishing anything
                
                            
                      
                      }
                            
                        }
                    
                  
                 //else return the info and will put it into the detailed view under base stats.   
                
            );
           
*/



