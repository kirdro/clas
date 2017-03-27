import React, {
    Component,
    PropTypes,
} from 'react';
import YouTube from 'react-youtube';
import {Router, Route, Switch, Link } from 'react-router-dom';
import Actions from '../actions/actions';

class SlickNewsItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            imgUrl: this.props.prop.urlImg
        }
    }
    onClickNews(){
        Actions.onClickNews(this.props.id);
    }
    render() {
        // console.log('render', this.props.prop.media);
        var componentDom
        for (var i = 0; i < this.props.prop.media.length; i++) {
            if (this.props.prop.media[i].is_favorite === true) {
                if (this.props.prop.media[i].item_type === 'image') {
                    componentDom = <div style={{
                        background: `rgb(227,227,227) url(${this.props.prop.media[i].url}) no-repeat center`,
                        backgroundSize: '100%'
                    }}
                                        className="boxNewsItem">
                        <div onClick={this.onClickNews.bind(this)} className="hoverDiscriptionNews">
                            <Link to={`/news`} style={{textDecoration: 'none',color: '#333', cursor: 'pointer'}} >
                                <h3>{this.props.prop.title}</h3>
                                <p>{this.props.prop.description}</p>
                            </Link>
                        </div>
                    </div>
                }
                else if (this.props.prop.media[i].item_type === 'video') {
                    const opts = {
                        height: '200',
                        width: '330',
                        playerVars: { // https://developers.google.com/youtube/player_parameters
                        }
                    };
                    componentDom = <div style={{
                        background: `rgb(227,227,227)`,
                        backgroundSize: '100%'
                    }}
                                        className="boxNewsItem">
                        <div>
                            <YouTube
                                opts={opts}
                                videoId={this.props.prop.media[i].youtube_id} />
                        </div>
                    </div>
                }
            }
        }
        return (
            <div>
                {componentDom}
            </div>
        );
    }
}

// SlickNewsItem.propTypes = {};
// SlickNewsItem.defaultProps = {};

export default SlickNewsItem;
