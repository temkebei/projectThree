import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Form from './components/form';
import RecipeList from './components/recipeList';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Recipecard from './components/recipecard';
import Loginmodal from './components/loginmodal';
import Registermodal from "./components/registermodal";
import Recipes from "./components/Recipes";

const API_KEY ="d770724855dcdda3a349d61d83b25d9c";
class App extends Component {
  constructor (props){
    super (props);
    this.state= {
      isAuthed: false,
      recipes:[]
    };
  }

  login= (username, password) => {
    console.log(username)
    console.log(password)
    if (username==="temkebei@gmail.com" && password==="welcome1") {
      this.setState ({isAuthed:true}) 
      return true;
    } else{
      return false;
    }
  }
  getRecipe = async(e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);

    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  logout= () => {
      this.setState ({isAuthed:false}) 
  }
  render() {
    return (
      <div>
      <Router>
        <div>
          <Navbar isAuthed={this.state.isAuthed} logout={this.logout}/>
              <Switch>
                <Route exact path="/"  render={(props) => <Homepage {...props} isAuthed={this.state.isAuthed} />} />
                <Route path= "/register"  render={(props) => <Registermodal {...props} isAuthed={this.state.isAuthed} />}/>
                <Route path= "/login"  render={(props) => <Loginmodal {...props} isAuthed={this.state.isAuthed} login={this.login} />}/>
               
                <Route path= "/otherRecipes"  render={(props) => <Recipes {...props}  getRecipe={this.getRecipe}  recipes={this.state.recipes} isAuthed={this.state.isAuthed} login={this.login} />}/>
               
                {this.state.isAuthed? 
                <React.Fragment>
                <Route exact path={"/banana/:id"}  render={(props) => <Recipecard {...props} isAuthed={this.state.isAuthed} />} />
                <Route path="/recipes"  render={(props) => <RecipeList {...props} isAuthed={this.state.isAuthed} />}/>
                <Route path="/newRecipe"  render={(props) => <Form {...props} isAuthed={this.state.isAuthed} />} />
                <Route path="/updateRecipe/:recipeId"  render={(props) => <Form {...props} isAuthed={this.state.isAuthed} />} />
                 
                </React.Fragment> :

            <Redirect to="/"/>

                }
               
              </Switch>
        </div>
      </Router>
            <Footer/>
            </div>
    );
  }
}
///create Routes  ...create routes for each path

export default App;
