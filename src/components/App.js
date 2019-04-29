import React, {Component} from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';

import pokeball from '../assets/pokeball.png';
import './styles/App.css';
//because it's a class we generate the render(){}
class App extends Component{
    constructor(){
        super();
        //adding in the pokeball as a default image.
        this.state = {
            pokemon: {
                sprite: pokeball,
                encounterlocations: null,
               
            }
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick(id){
        this.handleOnClick(id);
        this.showPokemonLocation(id);
    }

//helper method for api calls switching it to promise all?
    handleOnClick(id){
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data =>{
            const pokemon = new Pokemon(data);
       
           
                this.setState({pokemon});
              
        })
        .catch(err => console.log(err));
    }

    showPokemonLocation(id){
        const locations = [];
        const uniqueArr = [];
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
        .then(res => res.json())
        .then(function(data){
          for(let i = 0; i < data.length; i++){
            for(let x = 0; x < data[i].version_details.length; x++){
                if(data[i].version_details[x].version.name === 'red' ||data[i].version_details[x].version.name === 'blue'){
                   locations.push(data[i].location_area.name);
                    uniqueArr = [...new Set(locations)]
                   console.log(uniqueArr);
                   
                        }
                       return(
                           <div>{uniqueArr}</div>
                       ) 
                   }
                }
                
            });
            
        }   

    

/*

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

*/



    render(){
        return(
            <div className="App">
              <PokeList onClick={this.onClick}/>
              <DetailView pokemon={this.state.pokemon}/>
            </div>     
        );
    }
}

export default App;
/*
 this.displayedPokeStats = this.stats.map(stat =>{
     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
            .then(res => res.json())
            .then(data =>{
                const pokemonLocationURL = console.log(data);
              
            })

             console.log([{data}[0]]);
           // console.log([{data}[version_details]]);
            if(data.version_details !== undefined ){
                for(let i = 0; i < [data[i].version_details.length]; i++){
                    //array of objects is next.
                    console.log(data[i].version_details);

                    for(let x = 0; x < data[i].version_details[x]; x++){
                       
                        console.log(data[i].version_details[x]);
                    }
                }        

*/





