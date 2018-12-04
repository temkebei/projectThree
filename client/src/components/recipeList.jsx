import React, { Component } from 'react';
import axios from "axios";
import './style.css/recipeList.css';
import Recipecard from './recipecard';
import DashNav from './dashNav';
import { Link } from 'react-router-dom';



class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    componentWillMount() {
        axios.get("/api/recipes").then(response => {
            console.log(response.data);
            this.setState({ recipes: response.data })
        })

    }
    render() {
        return (
            <div>
                <div>
                    <DashNav />
                </div>
                <div>
                    <div className="row">
                        {this.state.recipes.map(item => (
                            <div className="col s12 m6 l4" key={item._id}>
                                <div className="card medium" id="card">
                                    <div className="card-image">
                                        <img id="profilepic" src={item.image} alt='details' />
                                    </div>
                                    <div className="card-content">
                                        <h5>{item.recipe_name}</h5>
                                        <p>Ingredients: {item.ingredients}</p>
                                        <Link className="waves-effect waves-light btn-small" id="more" to={`/banana/${item._id}`}>DETAILS</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default RecipeList;
