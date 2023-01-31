import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../Assets/arrow1.svg";
import arrow2 from "../../Assets/arrow2.svg"
import { Sliderdata } from './data';
import "../Carrousel/Carrousel.css"
const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">

                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {Sliderdata.map((item)=>(
                          <div className='cardequipo item2'>
                                <img src={item.img} alt="" width="500"/>
                                <h3>{item.name}</h3>
                                <h4>{item.profesion}</h4>
                              </div>
                            ))}
                          </Carousel>
                      </div>
                     
                  </div>
              </div>
          </div>
      </section>
    )
  }

  export default Skills


  