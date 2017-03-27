import React, {
    Component,
    PropTypes,
} from 'react';
import AppStore from '../store/store';


class FlagShip extends Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteProject: AppStore.getState().favoriteProject
        }
    }
    onChangeState(){
        this.setState({
            favoriteProject: AppStore.getState().favoriteProject
        });

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextState.favoriteProject !== this.state.favoriteProject) {
            return true
        }
        else {
            return false
        }
    }
    componentDidMount() {
        AppStore.addChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    componentWillUnmount() {
        AppStore.removeChangeStoreModuleListener(this.onChangeState.bind(this))
    }
    render() {
        console.log('render', this.state.favoriteProject);
        return (
            <div id="decorative1" style={{position: 'relative', backgroundImage: 'url(https://pp.userapi.com/c623717/v623717515/23ca4/6D1RDYZbugM.jpg)'}}>
                <div className="container">
                    <div className="divPanel headerArea">
                        <div className="row-fluid">
                            <div className="span12">
                                <div id="headerSeparator" />
                                <div id="divHeaderText" className="page-content">
                                    <div id="divHeaderLine1" className="divHeaderLine1">Клуб Любителей Активного Спорта!</div><br />
                                    <div id="divHeaderLine2">2nd line header text for calling extra attention to featured content..</div><br />
                                    <div id="divHeaderLine3"><a className="btn btn-large btn-primary" href="#">More Info</a></div>
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

// FlagShip.propTypes = {};
// FlagShip.defaultProps = {};

export default FlagShip;
