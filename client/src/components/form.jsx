import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import axios from "axios";
import DashNav from './dashNav';
import './style.css/form.css';

// Form to Add an recipe & Update recipe's Details
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipe_name: "",
            image: "",
            ingredients: "",
            directions: ""
        }

    }

//   componentDidMount() {
//         if (this.props.match.params.recipeId) {
//             axios.get("/api/recipes/" + this.props.match.params.recipeId).then(response => {
//                 console.log(response.data)
//                 this.setState(response.data)
//                 console.log(this.state);
//             })
//         }
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(this.state)
//         if (this.state._id) {
//             this.update_recipe(this.state)
//         }
//         else {
//             this.createRecipe(this.state)
//         }
//     }

    // Create a New recipe

    createRecipe = (recipe) => {
        axios.post('/api/recipes', recipe).then(response => {
            console.log(response.data)
            this.setState({
            recipe_name: "",
            image: "",
            ingredients: "",
            directions: ""
            })
            this.props.history.push('/recipes/' + response.data._id)
        })
    }

    //Update an recipe's Details
    update_recipe = (recipe) => {
        axios.put('/api/recipes/' + recipe._id, recipe).then(response => {
            console.log(response.data)
            this.setState({
                recipe_name: "",
                image: "",
                ingredients: "",
                directions: ""
            })
            this.props.history.push('/recipes/' + response.data._id)
        })
    }

    /// Capturing User's Input
    captureUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            //Rendering Form to Update/Add an recipe
            <div>
                <div>
                    <DashNav />
                </div>
                <div className="container">
                    <Row>
                        <form>
    <Input label="RECIPE NAME" placeholder="RECIPE NAME" onChange={this.captureUserInput} id="form" name="recipe_name" value={this.state.recipe_name} s={12} />
    <Input label="IMAGE URL" placeholder="IMAGE URL" onChange={this.captureUserInput} id="form" name="image" s={12} value={this.state.image} />
    <Input label="INGREDIENTS" placeholder="INGREDIENTS" onChange={this.captureUserInput} name="ingredients" s={12} value={this.state.ingredients} />
    <Input label="DIRECTIONS" placeholder="DIRECTIONS" onChange={this.captureUserInput} name="directions" s={12} value={this.state.directions} />
    <button className="waves-effect waves-light btn-small" id="update" onClick={this.handleSubmit}>
    {this.state._id == null ? "Add" : "Update"} Recipe
    </button>
        </form>
            </Row>
                </div>
            </div>
        );
    }
}
export default Form;
