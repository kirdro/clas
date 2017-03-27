import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';


class FlagShip extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteProject: AppStore.getState().favoriteProject
        }
    }
    onChangeState(){
        this.setState({
            favoriteProject: AppStore.getState().favoriteProject
        });

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
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        // console.log('render', this.state.favoriteProject);
        var url = null,
        title = null,
        desc = null;
        if (this.state.favoriteProject !== null) {
            for (var i = 0; i < this.state.favoriteProject.media.length; i++) {
                if (this.state.favoriteProject.media[i].is_favorite === true) {
                    if (this.state.favoriteProject.media[i].item_type === 'image') {
                        url = this.state.favoriteProject.media[i].url;
                    }
                }
            }
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
                                    <div id="divHeaderLine3"><a className="btn btn-large btn-primary" href="#">Подробнее</a></div>
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
