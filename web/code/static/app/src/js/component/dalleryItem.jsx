import React, {
    Component,
    PropTypes,
} from 'react';
import YouTube from 'react-youtube';
import {Router, Route, Link} from 'react-router-dom';
import Actions from '../actions/actions';
var moment = require('moment');


class GalleryItem extends Component {
    getId(){
        if (this.props.mode === 'projects') {
            Actions.getIdGallery(this.props.id, 'project');
        }
        else {
            Actions.getIdGallery(this.props.id, 'gallery');
        }
    }
    render() {
        const opts = {
            height: '200',
            width: '240',
            playerVars: { // https://developers.google.com/youtube/player_parameters

            }
        };
        console.log('gallery', this.props.prop.dt);
        var componentContent;
        var media = this.props.prop.media;
        for (var i = 0; i < media.length; i++) {
            if (media[i].is_favorite === true) {
                if (media[i].item_type === 'video') {
                    componentContent = <YouTube
                        opts={opts}
                        videoId={media[i].youtube_id} />
                }
                else if (media[i].item_type === 'image') {
                    componentContent = <a href={media[i].url} title="Sticky" rel="prettyPhoto[gallery1]">
                        <img src={media[i].url} alt="Sticky" title="Sticky" />
                    </a>
                }
            }
        }
        return (
            <li>

                {componentContent}
                <div className="meta"><span>{this.props.mode === 'gallery' ? moment(this.props.prop.dt).fromNow() : null}</span><span className="pull-right">{this.props.prop.autor}</span></div>
                <h4 onClick={this.getId.bind(this)}><Link to={`/projects/${this.props.id}`}>{this.props.prop.title}</Link></h4>
                <p>
                    {this.props.prop.description.substr(0, 166) + '...'}
                </p>
            </li>


        //     <li>
        //     <a href="styles/thumbs/sticky_800.jpg" title="Sticky" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/sticky_350.jpg" alt="Sticky" title="Sticky" /></a>
        //     <div className="meta"><span>7 minutes ago</span><span className="pull-right">By Bob</span></div>
        // <h4><a href="#">New photo</a></h4>
        // <p>A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        // </li>
        );
    }
}

// GalleryItem.propTypes = {};
// GalleryItem.defaultProps = {};

export default GalleryItem;
