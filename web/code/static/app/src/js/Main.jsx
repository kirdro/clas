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
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import About from './component/about';
import Form from './component/form';
import Events from './component/events'
import GalleryBox from './component/gallery'



class Main extends Component {
    render() {
        // console.log('mainmian', this.props.location);
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
                                    <h1>Welcome</h1>
                                    <p>Content on this page is for presentation purposes only. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <hr style={{margin: '45px 0 35px'}} />
                                    <div className="lead">
                                        <h2>Lorem ipsum dolor sit amet.</h2>
                                        <h3>Vivamus leo ante, consectetur sit amet vulputate vel, dapibus sit amet lectus.</h3>
                                    </div>
                                    <br />
                                    <SlickNews/>
                                    <hr style={{margin: '45px 0 35px'}} />

                                    <div className="lead">
                                        <h2>Featured Content.</h2>
                                        <h3>Content on this page is for presentation purposes only.</h3>
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
                                <Link to={'/'}>Главная</Link> &nbsp;/&nbsp; <span>Галерея</span>
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
    }
}

// Main.propTypes = {};
// Main.defaultProps = {};
Main.contextTypes = {
    router: PropTypes.object.isRequired
}

ReactDOM.render(<BrowserRouter>
    <Switch>
    <Route path="/" component={Main}>
        <Route path="/about" component={Main}/>
        <Route path="/news" component={Main}>
            <Route path="/news/:newsId" component={Main}/>
        </Route>
        <Route path="/projects" component={Main}/>
        <Route path="/gallery" component={Main}>
            <Route path="/works/:workId" component={Main}/>
        </Route>
        <Route path="/events"/>
    </Route>
    </Switch>
</BrowserRouter>, document.getElementById('reactComponent'));