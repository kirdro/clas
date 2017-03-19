import React, {
    Component,
    PropTypes,
} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="span4 sidebar">
                <div className="sidebox">
                    <h3 className="sidebox-title">Sample Sidebar Content</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                </div>
                <br />
                <div className="sidebox">
                    <h3 className="sidebox-title">Sample Sidebar Content</h3>
                    <p>
                    </p><div className="input-append">
                    <input className="span8" id="inpEmail" size={16} type="text" />
                    <button className="btn" type="button">Action</button>
                </div>
                    <p />
                </div>
            </div>
        );
    }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
