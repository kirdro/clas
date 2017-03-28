import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';
import YouTube from 'react-youtube';

class GalleryItemDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectsItem: AppStore.getState().projectsItem,
            gallery: AppStore.getState().gallery
        }
        this.internalStatet = {
            isMounted: true
        }
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                projectsItem: AppStore.getState().projectsItem,
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
        console.log('galleryDetail', this.state.projectsItem);
        var componentNode = null;
        var title = null;
        var desc = null;
        if (this.state.projectsItem !== undefined) {
            desc = this.state.projectsItem.description;
            var media = this.state.projectsItem.media;
            title = this.state.projectsItem.title;
            componentNode = media.map((prop, id) => {
                if (prop.item_type === 'description') {
                    return (<p key={id}>{prop.value}</p>)
                }
                else if (prop.item_type === 'image') {
                    return (<img className="img-polaroid" style={{margin: '5px 0px 15px'}} key={id} src={prop.url} alt=""/>);
                }
                else if (prop.item_type === 'subtitle') {
                    return (<h3>{prop.value}</h3>);
                }
                else if (prop.item_type === 'video') {
                    console.log('galleryDetail', prop.youtube_id);
                    const opts = {
                        height: '200',
                        width: '240',
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                        }
                    };
                    return (<YouTube
                        key={id}
                        opts={opts}
                        videoId={prop.youtube_id} />);
                }
            })
        }
        return (
            <div className="row-fluid">
                {/*Edit Main Content Area here*/}
                <div className="span12" id="divMain">
                    <h1>{title}</h1>
                    <hr />
                    <p>{desc}</p>
                    {componentNode}
                </div>
                {/*End Main Content Area*/}
            </div>
        );
    }
}

// GalleryItemDetail.propTypes = {};
// GalleryItemDetail.defaultProps = {};

export default GalleryItemDetail;
