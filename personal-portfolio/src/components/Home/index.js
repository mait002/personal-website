
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../LetterAnimation';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const letterArray = ['M', 'a', 'i', 't', 'r', 'e', 'y', 'e', 'e'];
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId); // ✅ Cleanup timeout on unmount
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Meet <AnimatedLetters letterClass={letterClass} 
                strArray={letterArray} 
                idx={15}/>, 
                a data-driven tech enthusiast with a strong foundation in data science and web development!
                </h1>
                
            </div>
        </div>
    );
}

export default Home;