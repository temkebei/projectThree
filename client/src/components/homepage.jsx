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
    src="/1.jpg"
    placement="right">
    OUR | WONDERFUL | AVOCADO TOAST
  </Slide>
  <Slide
    src="/2.jpg"
    placement="right">
    OUR | WONDERFUL | AVOCADO TOAST
  </Slide>
</Slider>
</div>

  )

  }
}
export default Homepage;

