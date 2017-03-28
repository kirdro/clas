import React, {
    Component,
    PropTypes,
} from 'react';

class AboutItem extends Component {
    render() {
        // console.log('render', this.props.prop);
        // var componentHr = null;
        // if (this.props.id !== this.props.len - 1) {
        //     componentHr = <hr />;
        // }
        var component = null;
        if (this.props.prop.item_type === 'image') {
            component = <div className="span10">
                <img src={this.props.prop.url} className="img-polaroid" style={{margin: '5px 0px 15px'}} alt /> </div>
        }
        else if (this.props.prop.item_type === 'description') {
            component = <div className="span12">
                <p>{this.props.prop.value}</p>
            </div>
        }
        return (
            <div>
                <div className="row-fluid">
                    {component}
                </div>
                {/*{componentHr}*/}
            </div>
        );
    }
}

// AboutItem.propTypes = {};
// AboutItem.defaultProps = {};

export default AboutItem;
