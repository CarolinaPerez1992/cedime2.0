import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import niña from '../../Assets/personas-discapacidad-removebg-preview.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import './Inicio.css';
import TrackVisibility from 'react-on-screen';
import NavBar from "../NavBar/NavBar";


export const Inicio = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Ayuda.", "Contención.", "Atención."];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <>
  
                <div className="Hero">
                    <NavBar />
                    <section className="banner" id="home">
                       
                            <div className="container_hero1">
                                <div className="text_cedime">
                                    <TrackVisibility>
                                        {({ isVisible }) =>
                                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                                <span className="tagline">Centro de día</span>
                                                <h1>{"CEDIME es: "} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Ayuda." , "Contención." , "Atención" ]'><span className="wrap">{text}</span></span></h1>
                                                <p>Trabajamos día a día con jóvenes y adultos con discapacidad, por una mejor calidad de vida para ellos y su familia. ¡Te invitamos a que nos conozcas!</p>
                                            </div>}
                                    </TrackVisibility>
                                </div>
                                <div className="img__hero">
                                    <TrackVisibility>
                                        {({ isVisible }) =>
                                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                                <img src={niña} width="400" height="500" alt="Header Img" />
                                            </div>}
                                    </TrackVisibility>
                                </div>
                            </div>
                
                    </section>
                </div>
        </>
    )
}


export default Inicio