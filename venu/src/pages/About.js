import './stylesheets/About.css';
import Navbar from "../components/Navbar";

function About() {

    return (
    <div>   
        <Navbar/>
        
        <div className="About"/>
        <p>Intros!</p> 
        <div className="Team">
            <ul>
            <li>People!</li>
            <li>Things!</li>
            <li>Words!</li>
            </ul>
        </div>
        
    </div>
    );

}

export default About;
