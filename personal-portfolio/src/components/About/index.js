
import './index.scss';
import DP from '../../assets/images/Mask group.png'

const About = () => {
    return (
        <div className="container about-page">
            <img src={DP} alt='profile picture'/>
            <div className="text-zome">
                <h1>Hi there, I'm Maitreyee Das Urmi</h1>
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