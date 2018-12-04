import React, {Component} from 'react';
import './style.css/footer.css';

//Footer Componenent 

class Footer extends Component{
    render(){
        return <div>
            <footer>
            <footer className="page-footer" id="footer">
            <div className= "container" className="col l4 offset-l2 s12">
                  <p className="white-text">RecipeApp Copyright &copy; 2018 </p>
                  <ul id="social">
                      <li id="icon"><i className="fab fa-instagram fa-2x ig"></i></li>
                      <li id="icon"><i className="fab fa-youtube-square fa-2x"></i></li>
                      <li id="icon"><i className="fab fa-twitter-square fa-2x"></i></li>
                      <li id="icon"><i className="fab fa-facebook fa-2x"></i></li>
                  </ul>
                  </div>
                  </footer>
                  </footer>
        </div>;
     
           
    }
}
export default Footer;