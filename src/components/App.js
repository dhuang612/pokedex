import React, {Component} from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';
//because it's a class we generate the render(){}
class App extends Component{
    constructor(){
        super();
        this.state = {
            pokemon: {}
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

//helper method
    handleOnClick(id){
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data =>{
            const pokemon = new Pokemon(data);
                this.setState({pokemon})
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="App">
              <PokeList handleOnClick={this.handleOnClick} />
              <DetailView pokemon={this.state.pokemon} />
            </div>     
        );
    }
}

export default App;