import React, {
    Component,
    PropTypes,
} from 'react';
import {Router, Route, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        var componentNav = null;
        if (this.props.path === '/') {
            componentNav = <ul className="nav nav-pills ddmenu">
                <li className="dropdown active"><Link to="/">Главная</Link></li>
                <li className="dropdown"><Link to="/about">О Клубе</Link></li>
                <li className="dropdown"><Link to={'/gallery'}>Галерея</Link></li>

                <li className="dropdown">
                    <a href="page.html" className="dropdown-toggle">Page <b className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="full.html">Full Page</a></li>
                        <li><a href="2-column.html">Two Column</a></li>
                        <li><a href="3-column.html">Three Column</a></li>
                        <li><a href="../documentation/index.html">Documentation</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Dropdown Item &nbsp;»</a>
                            <ul className="dropdown-menu sub-menu">
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link to={'/projects'}>Проекты</Link></li>
            </ul>
        }
        else if (this.props.path === '/about') {
            componentNav = <ul className="nav nav-pills ddmenu">
                <li className="dropdown"><Link to="/">Главная</Link></li>
                <li className="dropdown active"><Link to="/about">О Клубе</Link></li>
                <li className="dropdown"><Link to={'/gallery'}>Галерея</Link></li>
                <li className="dropdown">
                    <a href="page.html" className="dropdown-toggle">Page <b className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="full.html">Full Page</a></li>
                        <li><a href="2-column.html">Two Column</a></li>
                        <li><a href="3-column.html">Three Column</a></li>
                        <li><a href="../documentation/index.html">Documentation</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Dropdown Item &nbsp;»</a>
                            <ul className="dropdown-menu sub-menu">
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link to={'/projects'}>Проекты</Link></li>
            </ul>
        }
        else if (this.props.path === '/events') {
            componentNav = <ul className="nav nav-pills ddmenu">
                <li className="dropdown"><Link to="/">Главная</Link></li>
                <li className="dropdown"><Link to="/about">О Клубе</Link></li>
                <li className="dropdown"><Link to={'/gallery'}>Галерея</Link></li>
                <li className="dropdown">
                    <a href="page.html" className="dropdown-toggle">Page <b className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="full.html">Full Page</a></li>
                        <li><a href="2-column.html">Two Column</a></li>
                        <li><a href="3-column.html">Three Column</a></li>
                        <li><a href="../documentation/index.html">Documentation</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Dropdown Item &nbsp;»</a>
                            <ul className="dropdown-menu sub-menu">
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link to={'/projects'}>Проекты</Link></li>
            </ul>
        }
        else if (this.props.path === '/gallery') {
            componentNav = <ul className="nav nav-pills ddmenu">
                <li className="dropdown"><Link to="/">Главная</Link></li>
                <li className="dropdown"><Link to="/about">О Клубе</Link></li>
                <li className="dropdown active"><Link to={'/gallery'}>Галерея</Link></li>
                <li className="dropdown">
                    <a href="page.html" className="dropdown-toggle">Page <b className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="full.html">Full Page</a></li>
                        <li><a href="2-column.html">Two Column</a></li>
                        <li><a href="3-column.html">Three Column</a></li>
                        <li><a href="../documentation/index.html">Documentation</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Dropdown Item &nbsp;»</a>
                            <ul className="dropdown-menu sub-menu">
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link to={'/projects'}>Проекты</Link></li>
            </ul>
        }
        else if (this.props.path === '/projects') {
            componentNav = <ul className="nav nav-pills ddmenu">
                <li className="dropdown"><Link to="/">Главная</Link></li>
                <li className="dropdown"><Link to="/about">О Клубе</Link></li>
                <li className="dropdown"><Link to={'/gallery'}>Галерея</Link></li>
                <li className="dropdown">
                    <a href="page.html" className="dropdown-toggle">Page <b className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="full.html">Full Page</a></li>
                        <li><a href="2-column.html">Two Column</a></li>
                        <li><a href="3-column.html">Three Column</a></li>
                        <li><a href="../documentation/index.html">Documentation</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Dropdown Item &nbsp;»</a>
                            <ul className="dropdown-menu sub-menu">
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown active"><Link to={'/projects'}>Проекты</Link></li>
            </ul>
        }
    else if (this.props.path === '/news') {
            componentNav = <ul className="nav nav-pills ddmenu">
                <li className="dropdown"><Link to="/">Главная</Link></li>
                <li className="dropdown"><Link to="/about">О Клубе</Link></li>
                <li className="dropdown"><Link to={'/gallery'}>Галерея</Link></li>
                <li className="dropdown">
                    <a href="page.html" className="dropdown-toggle">Page <b className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><a href="full.html">Full Page</a></li>
                        <li><a href="2-column.html">Two Column</a></li>
                        <li><a href="3-column.html">Three Column</a></li>
                        <li><a href="../documentation/index.html">Documentation</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle">Dropdown Item &nbsp;»</a>
                            <ul className="dropdown-menu sub-menu">
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                                <li><a href="#">Dropdown Item</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link to={'/projects'}>Проекты</Link></li>
            </ul>
        }
        return (
            <div id="decorative2">
                <div className="container">
                    <div className="divPanel topArea notop nobottom">
                        <div className="row-fluid">
                            <div className="span12">
                                <div id="divLogo" className="pull-left">
                                    <Link to={`/`} id="divSiteTitle"></Link><br />
                                </div>
                                <div id="divMenuRight" className="pull-right">
                                    <div className="navbar">
                                        <button type="button" className="btn btn-navbar-highlight btn-large btn-primary" data-toggle="collapse" data-target=".nav-collapse">
                                            NAVIGATION <span className="icon-chevron-down icon-white" />
                                        </button>
                                        <div className="nav-collapse collapse">
                                            {componentNav}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Header.propTypes = {};
// Header.defaultProps = {};

export default Header;
