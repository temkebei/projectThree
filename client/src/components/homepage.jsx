import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css/homepage.css';
import { Slide, Slider} from 'react-materialize';



class Homepage extends Component {
  render() {
   
  return(
<div>
<Slider className="sliderfont">
  <Slide
    src= "image/mainpage.JPG"
    title="Mix Food">
    TASTE | WONDERFUL | RECIPES 
  </Slide>
  <Slide
    src="image/cajun.JPG"
    placement="left">
    TASTE | WONDERFUL | CAJUN CHICKEN PASTA 
  </Slide>
  <Slide
    src="image/HotSpanichDip.jpg"
    placement="right">
    HOT | WONDERFUL | Hot-Spanich-Dip
  </Slide>
</Slider>
</div>

  )

  }
}
export default Homepage;

