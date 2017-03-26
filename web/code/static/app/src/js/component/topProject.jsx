import React, {
    Component,
    PropTypes,
} from 'react';

class TopProject extends Component {
    render() {
        return (
            <div className="span8">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p>
                    <img src="http://ng72.ru/userfiles/images/image-10-2015/tachka.jpg" className="img-polaroid" style={{margin: '12px 0px'}} />
                </p>
                <p>Content on this page is for presentation purposes only. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        );
    }
}

// TopProject.propTypes = {};
// TopProject.defaultProps = {};

export default TopProject;
