import React, {
    Component,
    PropTypes,
} from 'react';
import AboutItem from './aboutItem'

class About extends Component {
    render() {
        return (
            <div className="row-fluid">
                {/*Edit Main Content Area here*/}
                <div className="span8" id="divMain">
                    <h1>О Нас</h1>
                    <hr />
                    <p><strong>There are many variations of passages of Lorem Ipsum available.</strong></p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
                    </p><h3>Subtitle</h3>
                    <AboutItem len={4} id={0}/>
                    <AboutItem len={4} id={1}/>
                    <AboutItem len={4} id={2}/>
                    <AboutItem len={4} id={3}/>
                </div>
                {/*End Main Content Area here*/}
                {/*Edit Sidebar Content here*/}
                <div className="span4 sidebar">
                    <div className="sidebox">
                        <h3 className="sidebox-title">Sample Sidebar Content</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>.</p>
                        <p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                        <h4 className="sidebox-title">Sidebar Categories</h4>
                        <ul>
                            <li><a href="#">Quisque diam lorem sectetuer adipiscing</a></li>
                            <li><a href="#">Interdum vitae, adipiscing dapibus ac</a></li>
                            <li><a href="#">Scelerisque ipsum auctor vitae, pede</a></li>
                            <li><a href="#">Donec eget iaculis lacinia non erat</a></li>
                            <li><a href="#">Lacinia dictum elementum velit fermentum</a></li>
                            <li><a href="#">Donec in velit vel ipsum auctor pulvinar</a></li>
                        </ul>
                        <h4 className="sidebox-title">Our Skills</h4>
                        <h5>Web Design ( 40% )</h5>
                        <div className="progress progress-info">
                            <div className="bar" style={{width: '20%'}} />
                        </div>
                        <h5>Wordpress ( 80% )</h5>
                        <div className="progress progress-success">
                            <div className="bar" style={{width: '40%'}} />
                        </div>
                        <h5>Branding ( 100% )</h5>
                        <div className="progress progress-warning">
                            <div className="bar" style={{width: '60%'}} />
                        </div>
                        <h5>SEO Optmization ( 60% )</h5>
                        <div className="progress progress-danger">
                            <div className="bar" style={{width: '80%'}} />
                        </div>
                    </div>
                </div>
                {/*End Sidebar Content here*/}
            </div>
        );
    }
}

// About.propTypes = {};
// About.defaultProps = {};

export default About;
