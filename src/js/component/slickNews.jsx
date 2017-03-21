import React, {
    Component,
    PropTypes,
} from 'react';
import Slider from 'react-slick';
import SlickNewsItem from './slickNewsItem';

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

var news = [
    {
        urlImg: 'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'https://sites.google.com/site/strasilkiru/_/rsrc/1361006166400/temnyj-les---2/DarkForest.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'http://www.rabstol.net/uploads/gallery/main/200/rabstol_net_forest_27.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'https://avatanplus.com/files/resources/original/572f20ad98ebf1549017a63a.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'https://avatars.mds.yandex.net/get-pdb/33827/d1293761-f9c0-47f6-af86-ebcfeabb9302/s800',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'http://www.randrs.ru/photo/2-0/1810_wallpaper-.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    },
    {
        urlImg: 'https://avatanplus.com/files/resources/original/5862f4d2264f5159428c54ed.jpg',
        title: 'Hello',
        disc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?',
        urlVideo: null
    }
];

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
        var componentNewsNode = news.map((prop, id) => {
            return(
            <div>
                <SlickNewsItem prop={prop} key={id}/>
            </div>
            );
        })
        return (
            <div className="list_carousel responsive">
                <Slider {...settings}>

                    {componentNewsNode}
                </Slider>

            </div>
        );
    }
}


export default SlickNews;
