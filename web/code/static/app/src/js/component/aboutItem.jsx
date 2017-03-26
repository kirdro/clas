import React, {
    Component,
    PropTypes,
} from 'react';

class AboutItem extends Component {
    render() {
        var componentHr = null;
        if (this.props.id !== this.props.len - 1) {
            componentHr = <hr />;
        }
        return (
            <div>
                <div className="row-fluid">
                    <div className="span2">
                        <img src="http://libymax.ru/wp-content/uploads/2015/03/Forest-at-dawn-2.jpg" className="img-polaroid" style={{margin: '5px 0px 15px'}} alt /> </div>
                    <div className="span10">
                        <p>Lorem ipsum dolor sit amet, consectetueradipiscing elied diam nonummy nibh euisod tincidunt ut laoreet dolore magna aliquam erat volutpatorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                {componentHr}
            </div>
        );
    }
}

// AboutItem.propTypes = {};
// AboutItem.defaultProps = {};

export default AboutItem;
