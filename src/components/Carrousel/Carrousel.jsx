import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../Assets/arrow1.svg";
import arrow2 from "../../Assets/arrow2.svg"
import meter1 from "../../Assets/meter1.svg";
import meter2 from "../../Assets/meter2.svg";
import meter3 from "../../Assets/meter3.svg";
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
        items: 3
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
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">

                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item2">
                                  <img className='equipoimg' src={meter1} alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                              <div className="item2">
                                  <img className='equipoimg' src={meter2} alt="Image" />
                                  <h5>Brand Identity</h5>
                              </div>
                              <div className="item2">
                                  <img className='equipoimg' src={meter3} alt="Image" />
                                  <h5>Logo Design</h5>
                              </div>
                              <div className="item2">
                                  <img className='equipoimg' src={meter1} alt="Image" />
                                  <h5>Web Development</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }

  export default Skills


  