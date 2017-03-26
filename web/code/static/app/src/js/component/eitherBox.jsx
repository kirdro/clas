import React, {
    Component,
    PropTypes,
} from 'react';

class EitherBox extends Component {
    render() {
        return (
            <div id="decorative1" style={{position: 'relative', backgroundImage: 'url(https://pp.userapi.com/c419619/v419619515/5/EgumwQ36C1o.jpg)'}}>
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
