import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';

class TopProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            futureProject: AppStore.getState().futureProject
        }
    }
    onChangeState(){
        this.setState({
            futureProject: AppStore.getState().futureProject
        });

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
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        // console.log('render', this.state.futureProject);
        var url = null,
        title = null,
        desc = null;
        if (this.state.futureProject !== null) {
            for (var i = 0; i < this.state.futureProject.media.length; i++) {
                if (this.state.futureProject.media[i].is_favorite === true) {
                    if (this.state.futureProject.media[i].item_type === 'image') {
                        url = this.state.futureProject.media[i].url;
                    }
                }
            }
            title = this.state.futureProject.title;
            desc = this.state.futureProject.description;
        }
        return (
            <div className="span12">
                <h3><a style={{color: '#333', cursor: 'pointer'}} href="">{title}</a></h3>
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
