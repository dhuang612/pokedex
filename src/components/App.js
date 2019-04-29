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
                encounterlocations: '',
               
            }
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.onClick = this.onClick.bind(this);
        this.showPokemonLocation = this.showPokemonLocation.bind(this);
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
        let uniqueArr = [];
        this.handleOnClick(id);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
        .then(res => res.json())
        .then(function(data){
          for(let i = 0; i < data.length; i++){
            for(let x = 0; x < data[i].version_details.length; x++){
                if(data[i].version_details[x].version.name === 'red' ||data[i].version_details[x].version.name === 'blue'){
                   locations.push(data[i].location_area.name);
                    uniqueArr = [...new Set(locations)]
                  
                   Pokemon.location_area_encounters = uniqueArr;
                   
                   console.log(Pokemon.location_area_encounters);
                        }
                    
                     
                   }
                }
                
            });
            return  uniqueArr;
            
            
        } 
     


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


