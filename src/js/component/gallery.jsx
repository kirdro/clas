import React, {
    Component,
    PropTypes,
} from 'react';

import YouTube from 'react-youtube';

const IMAGES =
        [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
        },

        {
            src: "https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg",
            thumbnail: "https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg"
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg"
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg"
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg"
        },
        {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg"
        }
        ]

class GalleryBox extends Component {
    componentWillMount() {
        // $(window).load(function () {var options = {autoResize: true,container: $('#gridArea'),offset: 10};
        //     var handler = $('#tiles li');
        //     handler.wookmark(options);
        //     $('#tiles li').each(function () { var imgm = 0;
        //         if($(this).find('img').length>0)imgm=parseInt($(this).find('img').not('p img').css('margin-bottom'));
        //         var newHeight = $(this).find('img').height() + imgm + $(this).find('div').height() + $(this).find('h4').height() + $(this).find('p').not('blockquote p').height() + $(this).find('iframe').height() + $(this).find('blockquote').height() + 5;
        //         if($(this).find('iframe').height()) newHeight = newHeight+15;$(this).css('height', newHeight + 'px');
        //     });
        //     handler.wookmark(options);
        //     handler.wookmark(options);
        // });
        // $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
        // $("a[rel^='prettyPhoto'] img").hover(function(){$(this).animate({opacity:0.7},300)},function(){$(this).animate({opacity:1},300)});
    }

    render() {
        const opts = {
            height: '200',
            width: '240',
            playerVars: { // https://developers.google.com/youtube/player_parameters

            }
        };
        return (
            <div className="row-fluid">
                <div className="span12">
                    <h1>Галлерея</h1>
                    <div id="gridArea">
                        <ul id="tiles">
                            <li>
                                <a href="https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg" title="Sticky" rel="prettyPhoto[gallery1]"><img src="https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg" alt="Sticky" title="Sticky" /></a>
                                <div className="meta"><span>7 minutes ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">New photo</a></h4>
                                <p>A sample photo with short description. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </li>
                            <li>
                                <a href="styles/thumbs/egg_800.jpg" title="Egg" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/egg_350.jpg" alt="Egg" title="Egg" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Sample photo with long description</a></h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/earrings_800.jpg" title="Earrings" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/earrings_350.jpg" alt="Earrings" title="Earrings" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Earrings</a></h4>
                                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>

                                <YouTube
                                    opts={opts}
                                    videoId={'CdGgqC3iqcE'} />
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Vimeo video embed</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </li>
                            <li>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Sample short text</a></h4>
                                <p>A sample short text post with no 'Read More' link.
                                </p></li>
                            <li>
                                <a href="styles/thumbs/butterfly_800.jpg" title="Butterfly" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/butterfly_350.jpg" alt="Butterfly" title="Butterfly" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Butterfly</a></h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <img src="styles/thumbs/orange_350.jpg" alt="Orange" title="Orange" />
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Sample photo with no lightbox</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></li>
                            <li>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Sample quote</a></h4>
                                <blockquote>
                                    <p>"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."</p>
                                    <small>by Author</small>
                                </blockquote>
                            </li>
                            <li>
                                <a href="styles/thumbs/painted-wood_800.jpg" title="Painted Wood" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/painted-wood_350.jpg" alt="Painted Wood" title="Painted Wood" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Painted Wood</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/spiral_800.jpg" title="Spiral" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/spiral_350.jpg" alt="Spiral" title="Spiral" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Sample photo with no description</a></h4>
                            </li>
                            <li>
                                <a href="styles/thumbs/puzzle_800.jpg" title="Puzzle" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/puzzle_350.jpg" alt="Puzzle" title="Puzzle" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Puzzle</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/candle_800.jpg" title="Candle" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/candle_350.jpg" alt="Candle" title="Candle" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Candle</a></h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                            </li>
                            <li>
                                <a href="styles/thumbs/calendar_800.jpg" title="Calendar" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/calendar_350.jpg" alt="Calendar" title="Calendar" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Calendar</a></h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/christmas_800.jpg" title="Christmas" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/christmas_350.jpg" alt="Christmas" title="Christmas" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Christmas</a></h4>
                                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/ships_800.jpg" title="Ships" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/ships_350.jpg" alt="Ships" title="Ships" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Ships</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/card_800.jpg" title="Card" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/card_350.jpg" alt="Card" title="Card" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/fashion_800.jpg" title="Fashion" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/fashion_350.jpg" alt="Fashion" title="Fashion" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Duis mollis, est non commodo</a></h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <a href="styles/thumbs/air_800.jpg" title="Air" rel="prettyPhoto[gallery1]"><img src="styles/thumbs/air_350.jpg" alt="Air" title="Air" /></a>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
                            <li>
                                <article className="youtube video flex-video">
                                    <iframe width={560} height={315} src="http://www.youtube.com/embed/e7OYeIXsW60" />
                                </article>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Youtube video embed</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /><a href="#" className="more_link">Read More</a></p>
                            </li>
                            <li>
                                <div className="meta"><span>7 days ago</span><span className="pull-right">By Bob</span></div>
                                <h4><a href="#">Sample long text</a></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <br /><a href="#" className="more_link">Read More</a></p></li>
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
