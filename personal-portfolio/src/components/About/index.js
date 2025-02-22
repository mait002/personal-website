
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../LetterAnimation';
import DP from '../../assets/images/Mask group.png'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const greetingArray = ['H', 'i', ' ', 't', 'h', 'e', 'r', 'e', '!', ' ', 'I', ' ', 'a', 'm', ' ', 'M', 'a', 'i', 't', 'r', 'e', 'y', 'e', 'e', ' ', 'D', 'a', 's', ' ', 'U', 'r', 'm', 'i']
    useEffect(() => {
            const timeoutId = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
    
            return () => clearTimeout(timeoutId); // ✅ Cleanup timeout on unmount
        }, []);
    return (
        <div className="container about-page">
            <img src={DP} alt='profile picture'/>
            <div className="text-zome">
                <h1><AnimatedLetters letterClass={letterClass} 
                strArray={greetingArray} 
                idx={0}/></h1>
                <p>
                I am a third-year Computer Science student at Toronto Metropolitan University 
                with a strong passion for web development, machine learning, and database management
                systems. I have consistently excelled academically and am known for my adaptability 
                and commitment to excellence. As I seek internship opportunities, I am eager to apply my 
                technical skills and problem-solving abilities to innovative teams in the tech industry.
                </p>
            </div>
        </div>
    );
}

export default About;