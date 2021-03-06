import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';

class EitherBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: AppStore.getState().about
        }
        this.internalStatet = {
            isMounted: false
        }
    }
    onChangeState(){
        if (this.internalStatet.isMounted === true) {
            this.setState({
                about: AppStore.getState().about
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


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.about !== this.state.about) {
            return true
        }
        else {
            return false
        }
    }

    render() {
        // console.log('render', this.state.about);
        var urlImage = 'https://pp.userapi.com/c419619/v419619515/5/EgumwQ36C1o.jpg',
        title = '';
        if (this.state.about[0] !== undefined) {
            for (var i = 0; i < this.state.about[0].media.length; i++) {
                if (this.state.about[0].media[i].item_type === 'image') {
                    urlImage = this.state.about[0].media[i].url;
                }
            }
            title = this.state.about[0].home_title;
        }
        return (
            <div id="decorative1" style={{position: 'relative', backgroundImage: `url(${urlImage})`}}>
                <div className="container">
                    <div className="divPanel headerArea">
                        <div className="row-fluid">
                            <div className="span12">
                                <div id="headerSeparator" />
                                <div id="divHeaderText" className="page-content">
                                    <div id="divHeaderLine1">{title}</div><br />
                                    {/*<div id="divHeaderLine2">2nd line header text for calling extra attention to featured content..</div><br />*/}
                                    {/*<div id="divHeaderLine3"><a className="btn btn-large btn-primary" href="#">More Info</a></div>*/}
                                </div>
                                <div id="headerSeparator2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// EitherBox.propTypes = {};
// EitherBox.defaultProps = {};

export default EitherBox;
