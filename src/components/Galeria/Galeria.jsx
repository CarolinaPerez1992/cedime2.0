import { useState, useEffect, UseRef, useRef } from 'react';
import React from 'react';
import "../Galeria/Galeria.css";
import { motion } from 'framer-motion';

import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'


const images = [image1, image2, image3, image4, image2, image1, image3, image4]

const Galeria = () => {

  const carousel = useRef();
  const [ width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <>
    <div className='Galeria' id="galeria">
        <div className='contenedor_titulo'>
      <div className='blob5'></div>
      <h2 className="titulo_galeria">Galeria</h2>
      </div>
    <div className="slider">
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
          <motion.div 
          className='inner'
          drag='x'
          dragConstraints={{ right: 0, left: -width}}
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{ duration: 0.8}}
          >  


              {images.map(image => (
                <motion.div className='item'  key={image}>
                    <img src={image} alt="imagenes_para_reemplazar" />
                  </motion.div >
              ))}
          </motion.div>
      </motion.div>
    </div>
    <button className="button7">
    <span className="button-content">Ver Más</span>
</button>
    {/* <div className="container_galeria" >
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img src="https://picsum.photos/seed/picsum/500/700" alt="img_random" className='image_galeria'/>
              <div className="over_galeria">
                <p className="caption">Info</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img src="https://picsum.photos/seed/picsum/500/700" alt="img_random" className='image_galeria'/>
              <div className="over_galeria">
                <p className="caption">Info</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img src="https://picsum.photos/seed/picsum/500/700" alt="img_random"className='image_galeria' />
              <div className="over_galeria">
                <p className="caption">Info</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Galeria