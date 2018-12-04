import React, { Component } from 'react';
import axios from 'axios';
import './style.css/recipecard.css';
import {Button} from 'react-materialize';
import DashNav from './dashNav';
import Calendar from './calendar';

class Recipecard extends Component {
    state = {
        tweets:[]
    }
    
    componentDidMount() {
        axios.get("/api/recipes/" + this.props.match.params.id).then(response => {
            this.setState({
                recipe_data:response.data
            })
        })
        
    }
    removeRecipe= (event)=>{
        event.preventDefault ();
        console.log(this.state.recipe_data._id)
        axios.delete(`/api/recipes/${this.state.recipe_data._id}`)
        .then((response)=>{
             this.props.history.push('/recipes/')
        
        })
    }
    goToUpdateView = (event)=>{
        this.props.history.push('/updateRecipe/'+ this.state.recipe_data._id)
    }

    render() {
        return( <div>
            <div>
                <DashNav/>
            </div>
            <div className="container">
            <div className='row'>
                <div className="col s6 m6 l6">
                    <div className="container" id="moreinfo">
                    <img className="responsive-img" id="solopic" src={this.state.recipe_data && this.state.recipe_data.image}/>
                        <h5 id="recipecard">{this.state.recipe_data && this.state.recipe_data.recipe_name}</h5>
                        <p>Ingredients: {this.state.recipe_data && this.state.recipe_data.ingredients}</p>
                        <p>Directions: {this.state.recipe_data && this.state.recipe_data.directions}</p>
                       <Calendar/>
                        <Button waves='light' id="button" onClick={this.goToUpdateView}>Update Recipe</Button>
                        <Button waves='light' id="button" onClick={this.removeRecipe}>Remove Recipe</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
   }
}
export default Recipecard;

