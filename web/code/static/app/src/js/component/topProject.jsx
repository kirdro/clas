import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';
import {Router, Route, Link} from 'react-router-dom';
import Actions from '../actions/actions';


class TopProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            futureProject: AppStore.getState().futureProject
        }
        this.internalStatet = {
            isMounted: false
        }
    }
    getId(){
        Actions.getIdGallery(this.state.futureProject.index, 'project');
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                futureProject: AppStore.getState().futureProject
            });
        }

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.futureProject !== this.state.futureProject) {
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
        // console.log('render', this.state.futureProject);
        var url = null,
        title = null,
        desc = null,
            index = 0;
        if (this.state.futureProject !== null) {
            for (var i = 0; i < this.state.futureProject.media.length; i++) {
                if (this.state.futureProject.media[i].is_favorite === true) {
                    if (this.state.futureProject.media[i].item_type === 'image') {
                        url = this.state.futureProject.media[i].url;
                    }
                }
            }
            index = this.state.futureProject.index;
            title = this.state.futureProject.title;
            desc = this.state.futureProject.description;
        }
        return (
            <div className="span12">
                <h3><Link onClick={this.getId.bind(this)} to={`/projects/${index}`} style={{color: '#333', cursor: 'pointer'}}>{title}</Link></h3>
                <p>
                    <img src={url} className="img-polaroid" style={{margin: '12px 0px'}} />
                </p>
                <p>
                    {desc}
                </p>
            </div>
        );
    }
}

// TopProject.propTypes = {};
// TopProject.defaultProps = {};

export default TopProject;
