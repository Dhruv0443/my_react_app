import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  
export class OwlDemo extends Component {  
        render()  
        {      
          return (  
              <div>  
            <div class='container-fluid' >      
              
        </div>  
        <div class='container-fluid' >   
          <OwlCarousel items={3} margin={8} autoplay ={true} >  
          <div><img className="img" src={require("./images/SLIDER1.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER2.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER3.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER4.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER5.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER6.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER7.jpeg")}/></div>
              <div><img className='img' src={require("./images/SLIDER8.jpeg")}/></div>
      </OwlCarousel>  
      </div>  
      </div>  
          )  
        }  
      }  
        
  
export default OwlDemo  