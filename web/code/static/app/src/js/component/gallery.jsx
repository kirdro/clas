import React, {
    Component,
    PropTypes,
} from 'react';

import GalleryItem from './dalleryItem';
import AppStore from '../store/store';

class GalleryBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: AppStore.getState().projects,
            gallery: AppStore.getState().gallery
        }
        this.internalStatet = {
            isMounted: false
        }
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                projects: AppStore.getState().projects,
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
        var componentList;
        var title;
        // console.log('!!!!!', this.state.projects);
        if (this.props.mode === 'gallery') {
            title = 'Галерея';
            componentList = this.state.gallery.map((prop, id) => {
                return (<GalleryItem id={id} mode="gallery" prop={prop} key={id} />)
            })
        }
        else if (this.props.mode === 'projects') {
            title = 'Проекты';
            componentList = this.state.projects.map((prop, id) => {
                return (<GalleryItem id={id} mode="projects" prop={prop} key={id} />)
            })
        }
        return (
            <div className="row-fluid">
                <div className="span12">
                    <h1>{title}</h1>
                    <div id="gridArea">
                        <ul id="tiles">
                            {componentList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

// Gallery.propTypes = {};
// Gallery.defaultProps = {};

export default GalleryBox;
