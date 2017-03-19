import React, {
    Component,
    PropTypes,
} from 'react';
import Slider from 'react-slick';

var SampleNextArrow = React.createClass({
    render: function() {
        return <div {...this.props} style={{display: 'block', color: 'green'}}></div>;
    }
});

var SamplePrevArrow = React.createClass({
    render: function() {
        return (
            <div {...this.props} style={{display: 'block', color: 'green'}}></div>
        );
    }
});

class SlickNews extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            adaptiveHeight: true,
            centerPadding: '60px',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            focusOnSelect: true
        };
        return (
            <div className="list_carousel responsive">
                <Slider {...settings}>
                    <div>
                        <div style={{
                            background: 'rgb(227,227,227) url(https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg) no-repeat center',
                            backgroundSize: '100%'
                        }}
                              className="boxNewsItem">
                            <div className="hoverDiscriptionNews">
                                <h3>Hello</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            background: 'rgb(227,227,227) url(https://sites.google.com/site/strasilkiru/_/rsrc/1361006166400/temnyj-les---2/DarkForest.jpg) no-repeat center',
                            backgroundSize: '100%'
                        }}
                             className="boxNewsItem">
                            <div className="hoverDiscriptionNews">
                                <h3>Hello</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            background: 'rgb(227,227,227) url(http://www.rabstol.net/uploads/gallery/main/200/rabstol_net_forest_27.jpg) no-repeat center',
                            backgroundSize: '100%'
                        }}
                             className="boxNewsItem">
                            <div className="hoverDiscriptionNews">
                                <h3>Hello</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            background: 'rgb(227,227,227) url(https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg) no-repeat center',
                            backgroundSize: '100%'
                        }}
                             className="boxNewsItem">
                            <div className="hoverDiscriptionNews">
                                <h3>Hello</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            background: 'rgb(227,227,227) url(https://avatars.mds.yandex.net/get-pdb/33827/d1293761-f9c0-47f6-af86-ebcfeabb9302/s800) no-repeat center',
                            backgroundSize: '100%'
                        }}
                             className="boxNewsItem">
                            <div className="hoverDiscriptionNews">
                                <h3>Hello</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{
                            background: 'rgb(227,227,227) url(http://www.randrs.ru/photo/2-0/1810_wallpaper-.jpg) no-repeat center',
                            backgroundSize: '100%'
                        }}
                             className="boxNewsItem">
                            <div className="hoverDiscriptionNews">
                                <h3>Hello</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        );
    }
}


export default SlickNews;
