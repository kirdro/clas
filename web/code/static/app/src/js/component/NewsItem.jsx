import React, {
    Component,
    PropTypes,
} from 'react';
import YouTube from 'react-youtube';
var moment = require('moment');

class NewsItem extends Component {
    render() {
        // console.log('render', this.props.prop);
        var title = null,
        descr = null,
        newsDescrNode = null,
        dt = new Date();
        if (this.props.prop !== null) {
            dt = this.props.prop.dt
            title = this.props.prop.title;
            descr = this.props.prop.description;
            newsDescrNode = this.props.prop.media.map((prop, id) => {
                // console.log('render', prop);
                if (prop.item_type === 'description') {
                    return (<p key={id}>{prop.value}</p>)
                }
                else if (prop.item_type === 'image') {
                    return (<img key={id} src={prop.url} alt=""/>);
                }
                else if (prop.item_type === 'video') {
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
            <div>
                <h1>{title}</h1>
                <hr />
                <span className="dateTimeNews">{moment(dt).fromNow()}</span>
                <p>{descr}</p>
                {newsDescrNode}
            </div>
        );
    }
}

// NewsItem.propTypes = {};
// NewsItem.defaultProps = {};

export default NewsItem;
