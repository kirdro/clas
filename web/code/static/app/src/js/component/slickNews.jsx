import React, {
    Component,
    PropTypes,
} from 'react';
import Slider from 'react-slick';
import SlickNewsItem from './slickNewsItem';
import {Router, Route, Link} from 'react-router-dom';
import AppStore from '../store/store';

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
    constructor(props){
        super(props);
        this.state = {
            news: AppStore.getState().news,
            secondNews: AppStore.getState().secondNews
        }
        this.internalStatet = {
            isMounted: false
        }
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                news: AppStore.getState().news,
                secondNews: AppStore.getState().secondNews
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
        var componentNewsNode = this.state.news.map((prop, id) => {
            return(
            <div>
                <SlickNewsItem id={id} prop={prop} key={id}/>
            </div>
            );
        })
        var componentSlick = null;
        if (this.state.news.length > 0) {
            componentSlick = <Slider {...settings}>

                {componentNewsNode}
            </Slider>
        }
        return (
            <div className="list_carousel responsive">
                {componentSlick}
                <Link to={`/news`} className="btn btn-secondary mySecondary" >Новости</Link>

            </div>
        );
    }
}


export default SlickNews;
