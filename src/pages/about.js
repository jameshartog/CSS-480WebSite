import { Link } from 'react-router-dom'
import '../App.css';

const About = () => {
    return (
        <div>
            <h1>
            <Link to="https://www.google.com">1. Learning things (Google)</Link><br></br>
            <Link to="https://www.youtube.com">2. see above (Youtube)</Link><br></br>
            <Link to="https://www.wikipedia.org">3. see above (Wikipedia)</Link><br></br>
            <Link to="https://www.nytimes.com">4. World News (NyTimes)</Link><br></br>
            <Link to="https://www.playstation.com/en-us/games/helldivers-2/">5. Current Game I'm enjoying (Helldivers 2)</Link><br></br>
            <Link to="https://wsdot.com/ferries/vesselwatch/default.aspx">6. WA State Ferry Boats</Link><br></br>
            <Link to="https://www.nasa.gov">7. Space</Link><br></br>
            <Link to="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSGmIN_vH7aKNY6wNKjEhTGgYJ8oOL_w5MunbaDaul-L-ZgDbnChQGPvIWH2Qn9Rht1">8. A morning cup of hot chocolate</Link><br></br>
            <Link to="https://www.nal.usda.gov/plant-production-gardening/vegetable-gardening">9. Gardening</Link><br></br>
            <Link to="https://www.ncoa.org/adviser/sleep/sleep-statistics">10. Sleep (I'm really out of ideas)</Link><br></br>
            </h1>
        </div>
    );
};
 
export default About;