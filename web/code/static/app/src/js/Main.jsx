import React, {
    Component,
    PropTypes,
} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import EitherBox from './component/eitherBox';
import FlagShip from './component/flagShip';
import SlickNews from './component/slickNews';
import TopProject from './component/topProject';
import Footer from './component/footer';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import About from './component/about';
import Form from './component/form';
import Events from './component/events'
import GalleryBox from './component/gallery'
import Actions from './actions/actions';
import AppStore from './store/store';
import NewsBox from './component/newsBox';
import GalleryItemDetail from './component/GalleryItemDetail';



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: AppStore.getState().about,
            data: AppStore.getState(),
            indexGallery: AppStore.getState().indexGallery
        }
    }
    componentWillMount() {
        // console.log('componentWillMount');
        Actions.getData();
        if (this.props.location.pathname.substr(0, 10) === `/projects/`) {
            // console.log('componentWillMount', this.props.location.pathname.substring(10, this.props.location.pathname.length));
            Actions.getIdGallery(+this.props.location.pathname.substring(10, this.props.location.pathname.length), 'project');
        }
        else if (this.props.location.pathname.substr(0, 9) === `/gallery/`) {
            // console.log('componentWillMount', this.props.location.pathname.substring(10, this.props.location.pathname.length));
            Actions.getIdGallery(+this.props.location.pathname.substring(9, this.props.location.pathname.length), 'gallery');
        }
    }
    onChangeState(){
        this.setState({
            about: AppStore.getState().about,
            data: AppStore.getState(),
            indexGallery: AppStore.getState().indexGallery
        });

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState !== this.state || this.props.location.pathname !== nextProps.location.pathname) {
            return true
        }
        else {
            return false
        }
    }
    componentDidMount() {
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        // console.log('render', this);
        var subtitles = '',
        descriptionHome = '';
        if (this.state.about[0] !==  undefined) {
            subtitles = this.state.about[0].subtitle;
            descriptionHome = this.state.about[0].home_description;
        }
        if (this.props.location.pathname === '/') {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/"/>
                    <EitherBox/>
                    <div id="contentOuterSeparator"></div>

                    <FlagShip/>
                    <div className="container">
                        <div className="divPanel page-content">
                            <div className="row-fluid">
                                <div className="span12" id="divMain">
                                    <h1>{subtitles}</h1>
                                    <p>
                                        {descriptionHome}
                                    </p>
                                    <hr style={{margin: '45px 0 35px'}} />
                                    <div className="lead">
                                        <h2>Новости</h2>
                                        {/*<h3>Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</h3>*/}
                                    </div>
                                    <br />
                                    <SlickNews/>
                                    <hr style={{margin: '45px 0 35px'}} />

                                    <div className="lead">
                                        <h2>Будущий проект</h2>
                                        {/*<h3>Content on this page is for presentation purposes only.</h3>*/}
                                    </div>
                                    <br />
                                    <div className="row-fluid">
                                        <TopProject />
                                        {/*<Form />*/}
                                    </div>
                                </div>
                            </div>
                            <div id="footerInnerSeparator" />
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname === '/about') {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/about"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <span>О Клубе</span>
                            </div>
                            <About/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname === '/events') {
            window.scrollTo(0, 0)
            return (
                <div>
                    <Header path="/events"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <span>Календарь</span>
                            </div>
                            <Events/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname === '/gallery') {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/gallery"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <span>Галерея</span>
                            </div>
                            <GalleryBox mode={'gallery'}/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname === '/projects') {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/projects"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <span>Проекты</span>
                            </div>
                            <GalleryBox mode={'projects'}/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname === '/news') {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/news"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <span>Новости</span>
                            </div>
                            <NewsBox/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname.substr(0, 10) === `/projects/`) {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/projects"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <Link to={'/projects'}>Проекты</Link> &nbsp;/&nbsp; <span>Проект</span>
                            </div>
                            <GalleryItemDetail/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
        else if (this.props.location.pathname.substr(0, 9) === `/gallery/`) {
            window.scrollTo(0, 0)
            return (
                <div>
                    <div className="calendarButton">
                        <Link to={'/events'}>
                            <i className="fa fa-calendar fa-3x" ariaHidden="true" />
                            <br/>
                            <span>Календарь событий</span>
                        </Link>
                    </div>
                    <Header path="/gallery"/>
                    <div id="contentOuterSeparator"></div>
                    <div className="container">

                        <div className="divPanel page-content">
                            <div className="breadcrumbs">
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <Link to={'/gallery'}>Галерея</Link> &nbsp;/&nbsp; <span>Компонент</span>
                            </div>
                            <GalleryItemDetail/>
                            <div id="footerInnerSeparator"></div>
                        </div>
                    </div>
                    <div id="footerOuterSeparator"></div>
                    <Footer/>
                </div>
            );
        }
    }
}

// Main.propTypes = {};
// Main.defaultProps = {};
Main.contextTypes = {
    router: PropTypes.object.isRequired
}


class Main2 extends Component {
    render() {
        console.log('!!!!@@#!@#!')
        return (
            <Main router="/projects/:propjectId"/>
        );
    }
}




ReactDOM.render(<Router >
    <Route path="/" component={Main}>
        <Switch>
            <Main>
                <Route path="/about" component={Main}/>
                <Route path="/news" component={Main}/>
                <Route path="/projects" component={Main}>
                    {/*<Route path="/projects/:propjectId" component={Main2}/>*/}
                </Route>
                <Route path="/projects/:projectId" component={Main2}/>
                <Route path="/gallery" component={Main}>
                    <Route path="/gallery/:workId" component={Main}/>
                </Route>
                <Route path="/events"/>
            </Main>
        </Switch>
    </Route>
</Router>, document.getElementById('reactComponent'));
