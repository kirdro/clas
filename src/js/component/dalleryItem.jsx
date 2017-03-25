import React, {
    Component,
    PropTypes,
} from 'react';
import YouTube from 'react-youtube';
var moment = require('moment');


class GalleryItem extends Component {
    getId(){

    }
    render() {
        const opts = {
            height: '200',
            width: '240',
            playerVars: { // https://developers.google.com/youtube/player_parameters

            }
        };
        console.log('gallery', moment(this.props.prop.date).fromNow());
        var componentContent;
        if (this.props.prop.favouriteImg !== null) {
            componentContent = <a href={this.props.prop.favouriteImg} title="Sticky" rel="prettyPhoto[gallery1]">
                <img src={this.props.prop.favouriteImg} alt="Sticky" title="Sticky" />
            </a>
        }
        else if (this.props.prop.favouriteImg === null) {
            componentContent = <YouTube
                opts={opts}
                videoId={this.props.prop.videosId[0]} />
        }
        return (
            <li>

                {componentContent}
                <div className="meta"><span>{moment(this.props.prop.date).fromNow()}</span><span className="pull-right">{this.props.prop.author}</span></div>
                <h4 onClick={this.getId.bind(this)}><a href="#">{this.props.prop.title}</a></h4>
                <p>
                    {this.props.prop.disc}
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
