import React, {Component} from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';

import pokeball from '../assets/pokeball.png';
import './styles/App.css';
import PokeCell from './PokeCell';
//because it's a class we generate the render(){}
class App extends Component{
    constructor(){
        super();
        //adding in the pokeball as a default image.
        this.state = {
            pokemon: {
                sprite: pokeball,
                location_area_encounters: [],
            }
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.onClick = this.onClick.bind(this);
        this.showPokemonLocation = this.showPokemonLocation.bind(this);
    }
    async onClick(id){
        const data = await this.handleOnClick(id);
        const routelocations = await this.showPokemonLocation(id);
        const pokemon = new Pokemon(data, routelocations)
        this.setState({pokemon})
    }

//helper method for api calls switching it to promise all?
    handleOnClick(id){
       return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data =>{
           return data;
                
          
              
        })
        .catch(err => console.log(err));
    }
//this should be converted over to using map
    showPokemonLocation(id){
        const locations = [];
        let uniqueArr = [];
        this.handleOnClick(id);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
        .then(res => res.json())
        .then(function(data){
            console.log(data);
          for(let i = 0; i < data.length; i++){

            for(let x = 0; x < data[i].version_details.length; x++){
                if(data[i].version_details[x].version.name === 'red' ||data[i].version_details[x].version.name === 'blue'){
                   locations.push(data[i].location_area.name);
                    uniqueArr = [...new Set(locations)]
                   console.log(uniqueArr);
                        }
                   }
                }
                console.log(uniqueArr)
                
            });
            
         
            return uniqueArr;
        
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


/*
 const pokemon = new Pokemon(data);
                this.setState({pokemon});

*/