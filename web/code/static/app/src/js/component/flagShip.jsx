import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';
import {Router, Route, Link} from 'react-router-dom';
import Actions from '../actions/actions';

class FlagShip extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteProject: AppStore.getState().favoriteProject
        }
        this.internalStatet = {
            isMounted: false
        }
    }
    getId(){
        Actions.getIdGallery(this.state.favoriteProject.index, 'project');
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                favoriteProject: AppStore.getState().favoriteProject
            });
        }

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.favoriteProject !== this.state.favoriteProject) {
            return true
        }
        else {
            return false
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
        // console.log('render', this.state.favoriteProject);
        var url = null,
        title = null,
        desc = null,
        index = 0;
        if (this.state.favoriteProject !== null) {
            for (var i = 0; i < this.state.favoriteProject.media.length; i++) {
                if (this.state.favoriteProject.media[i].is_favorite === true) {
                    if (this.state.favoriteProject.media[i].item_type === 'image') {
                        url = this.state.favoriteProject.media[i].url;
                    }
                }
            }
            index = this.state.favoriteProject.index;
            title = this.state.favoriteProject.title;
            desc = this.state.favoriteProject.description.substr(0, 68) + '...';
        }
        return (
            <div id="decorative1" style={{position: 'relative', backgroundImage: `url(${url})`}}>
                <div className="container">
                    <div className="divPanel headerArea">
                        <div className="row-fluid">
                            <div className="span12">
                                <div id="headerSeparator" />
                                <div id="divHeaderText" className="page-content">
                                    <div id="divHeaderLine1" className="divHeaderLine1">{title}</div><br />
                                    <div id="divHeaderLine2">{desc}</div><br />
                                    <div id="divHeaderLine3"><Link onClick={this.getId.bind(this)} to={`/projects/${index}`} className="btn btn-large btn-primary" >Подробнее</Link></div>
                                </div>
                                <div id="headerSeparator2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// FlagShip.propTypes = {};
// FlagShip.defaultProps = {};

export default FlagShip;
