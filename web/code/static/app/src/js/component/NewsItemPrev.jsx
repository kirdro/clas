import React, {
    Component,
    PropTypes,
} from 'react';
import YouTube from 'react-youtube';
var moment = require('moment');
import Actions from '../actions/actions';

class NewsItemPrev extends Component {
    onClickNews(){
        Actions.onClickNews(this.props.id);
    }
    render() {
        // console.log('render', this.props.prop);
        var media = this.props.prop.media,
        mediaComponent = null;

        for (var i = 0; i < media.length; i++) {
            if (media[i].is_favorite === true) {
                if (media[i].item_type === 'video') {
                    const opts = {
                        height: '200',
                        width: '200',
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                        }
                    };
                    mediaComponent = <YouTube
                        opts={opts}
                        videoId={media[i].youtube_id} />
                }
                else if (media[i].item_type === 'image') {
                    mediaComponent =  <img src={media[i].url} className="img-polaroid" alt />
                }
            }
        }
        return (
            <div>
                <h3 onClick={this.onClickNews.bind(this)} style={{cursor: 'pointer'}}>{this.props.prop.title}</h3>
                {mediaComponent}
                <p>{this.props.prop.description.substr(0, 152) + '...'}</p>
            </div>
        );
    }
}

NewsItemPrev.propTypes = {};
NewsItemPrev.defaultProps = {};

export default NewsItemPrev;
