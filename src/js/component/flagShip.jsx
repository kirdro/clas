import React, {
    Component,
    PropTypes,
} from 'react';

class FlagShip extends Component {
    render() {
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
