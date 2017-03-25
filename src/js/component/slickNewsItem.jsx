import React, {
    Component,
    PropTypes,
} from 'react';

class SlickNewsItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            imgUrl: this.props.prop.urlImg
        }
    }
    render() {
        return (
            <div>
                <div style={{
                    background: `rgb(227,227,227) url(${this.props.prop.urlImg}) no-repeat center`,
                    backgroundSize: '100%'
                }}
                     className="boxNewsItem">
                    <div className="hoverDiscriptionNews">
                        <h3>{this.props.prop.title}</h3>
                        <p>{this.props.prop.disc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// SlickNewsItem.propTypes = {};
// SlickNewsItem.defaultProps = {};

export default SlickNewsItem;
