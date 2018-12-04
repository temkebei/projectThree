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

class App extends Component {
  constructor (props){
    super (props);
    this.state= {
      isAuthed: false
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
