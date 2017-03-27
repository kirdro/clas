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
    }
    onChangeState(){
        this.setState({
            about: AppStore.getState().about
        });

    }
    componentDidMount() {
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        // console.log('render', this.state.about);
        var urlImage = 'https://pp.userapi.com/c419619/v419619515/5/EgumwQ36C1o.jpg';
        if (this.state.about[0] !== undefined) {
            urlImage = this.state.about[0].media[0].url;
        }
        return (
            <div id="decorative1" style={{position: 'relative', backgroundImage: `url(${urlImage})`}}>
                <div className="container">
                    <div className="divPanel headerArea">
                        <div className="row-fluid">
                            <div className="span12">
                                <div id="headerSeparator" />
                                <div id="divHeaderText" className="page-content">
                                    <div id="divHeaderLine1">Клуб Любителей Активного Спорта!</div><br />
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
