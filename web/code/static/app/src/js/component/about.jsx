import React, {
    Component,
    PropTypes,
} from 'react';
import AboutItem from './aboutItem';
import AppStore from '../store/store';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: AppStore.getState().about,
            gallery: AppStore.getState().gallery
        }
        this.internalStatet = {
            isMounted: false
        }
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                about: AppStore.getState().about,
                gallery: AppStore.getState().gallery
            });
        }

    }
    componentDidMount() {
        this.internalStatet.isMounted = true;
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        this.internalStatet.isMounted = false;
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        // console.log('render', this.state.about);
        var title = '',
        desc = '',
        media = null,
            componentNode = null;
        if (this.state.about[0] !== undefined) {
            title = this.state.about[0].title;
            desc = this.state.about[0].description;
            media = this.state.about[0].media;
            componentNode = media.map((prop, id) => {
                return(
                    <AboutItem key={id} prop={prop} len={media.length} id={id}/>
                );
            })
        }
        return (
            <div className="row-fluid">
                {/*Edit Main Content Area here*/}
                <div className="span12" id="divMain">
                    <h1>О Нас</h1>
                    <hr />
                    <h3>{title}</h3>
                    <p>
                        {desc}
                    </p>
                    {componentNode}
                </div>
                {/*End Main Content Area here*/}
                {/*Edit Sidebar Content here*/}
                {/*<div className="span4 sidebar">*/}
                    {/*<div className="sidebox">*/}
                        {/*<h3 className="sidebox-title">Sample Sidebar Content</h3>*/}
                        {/*<p>Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>.</p>*/}
                        {/*<p> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>*/}
                        {/*<h4 className="sidebox-title">Sidebar Categories</h4>*/}
                        {/*<ul>*/}
                            {/*<li><a href="#">Quisque diam lorem sectetuer adipiscing</a></li>*/}
                            {/*<li><a href="#">Interdum vitae, adipiscing dapibus ac</a></li>*/}
                            {/*<li><a href="#">Scelerisque ipsum auctor vitae, pede</a></li>*/}
                            {/*<li><a href="#">Donec eget iaculis lacinia non erat</a></li>*/}
                            {/*<li><a href="#">Lacinia dictum elementum velit fermentum</a></li>*/}
                            {/*<li><a href="#">Donec in velit vel ipsum auctor pulvinar</a></li>*/}
                        {/*</ul>*/}
                        {/*<h4 className="sidebox-title">Our Skills</h4>*/}
                        {/*<h5>Web Design ( 40% )</h5>*/}
                        {/*<div className="progress progress-info">*/}
                            {/*<div className="bar" style={{width: '20%'}} />*/}
                        {/*</div>*/}
                        {/*<h5>Wordpress ( 80% )</h5>*/}
                        {/*<div className="progress progress-success">*/}
                            {/*<div className="bar" style={{width: '40%'}} />*/}
                        {/*</div>*/}
                        {/*<h5>Branding ( 100% )</h5>*/}
                        {/*<div className="progress progress-warning">*/}
                            {/*<div className="bar" style={{width: '60%'}} />*/}
                        {/*</div>*/}
                        {/*<h5>SEO Optmization ( 60% )</h5>*/}
                        {/*<div className="progress progress-danger">*/}
                            {/*<div className="bar" style={{width: '80%'}} />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*End Sidebar Content here*/}
            </div>
        );
    }
}

// About.propTypes = {};
// About.defaultProps = {};

export default About;
