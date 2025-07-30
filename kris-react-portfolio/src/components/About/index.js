import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A','b','o','u','t',' ', 'm','e']}
                        idx={15}
                    />
                </h1>
                <p>Meticulous developer with 5 years of frontend, backend and project management JR experience, 
                    passionated for UX design with complete understanding of entire software development 
                    lifecycle. Highly effective at developing and standardizing designs according to 
                    company brand and objectives. I love learning new things and keep myself 
                    updated through online courses.
                </p>
                <p>Flexible and adaptable, Problem-solving, Time and project management, 
                    Attention to detail, Teamwork, Work Ethic, Creativity, Goal-oriented
                </p>
            </div>
        </div>
    )
}

export default About;