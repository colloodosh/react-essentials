import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';

const App = () => {

    return <div>

        <section className="hero-is-link"><h3>Personal Digital Assistants</h3></section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg} description="Alexa application essentials"/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg} description="Cortana application essentials"/>
                    </div>
                    <div class="column is-4">
                        <ProfileCard title="Siri" handle="@siri01" image={SiriImg} description="Siri application essentials"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
}

export default App;
