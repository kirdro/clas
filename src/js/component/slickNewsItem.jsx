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
                        <h3>Hello</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque debitis dolores ducimus eveniet exercitationem modi natus quam quia soluta! Ab atque incidunt iure minus modi numquam pariatur repellat ullam?</p>
                    </div>
                </div>
            </div>
        );
    }
}

// SlickNewsItem.propTypes = {};
// SlickNewsItem.defaultProps = {};

export default SlickNewsItem;
