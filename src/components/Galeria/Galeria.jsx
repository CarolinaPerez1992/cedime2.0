import React from 'react';
import "../Galeria/Galeria.css";
import { motion } from 'framer-motion';

import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'


const images = [image1, image2, image3, image4]

const Galeria = () => {
  return (
    <>
    <div className="slider">
      <motion.div className='carousel' whileTap={{ cursor: 'grabbing' }}>
          <motion.div 
          className='inner'
          drag='x'>  


              {images.map(image => (
                <motion.div className='item'  key={image}>
                    <img src={image} alt="imagenes_para_reemplazar" />
                  </motion.div >
              ))}


          </motion.div>
      </motion.div>
    </div>
    <div className="container_galeria" id='galeria'>
      <h2 className='h2_galeria'>GALERÍA</h2>
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
              <img src="https://picsum.photos/seed/picsum/500/700" alt="img_random" className='image_galeria'/>
              <div className="over_galeria">
                <p className="caption">Info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Galeria