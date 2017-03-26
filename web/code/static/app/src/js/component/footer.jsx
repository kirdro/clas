import React, {
    Component,
    PropTypes,
} from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="divFooter" className="footerArea">
                <div className="container">
                    <div className="divPanel">
                        <div className="row-fluid">
                            <div className="span3" id="footerArea1">
                                <h3>About Company</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                <p>
                                    <a href="#" title="Terms of Use">Terms of Use</a><br />
                                    <a href="#" title="Privacy Policy">Privacy Policy</a><br />
                                    <a href="#" title="FAQ">FAQ</a><br />
                                    <a href="#" title="Sitemap">Sitemap</a>
                                </p>
                            </div>
                            <div className="span3" id="footerArea2">
                                <h3>Recent Blog Posts</h3>
                                <p>
                                    <a href="#" title>Lorem Ipsum is simply dummy text</a><br />
                                    <span style={{textTransform: 'none'}}>2 hours ago</span>
                                </p>
                                <p>
                                    <a href="#" title>Duis mollis, est non commodo luctus</a><br />
                                    <span style={{textTransform: 'none'}}>5 hours ago</span>
                                </p>
                                <p>
                                    <a href="#" title>Maecenas sed diam eget risus varius</a><br />
                                    <span style={{textTransform: 'none'}}>19 hours ago</span>
                                </p>
                                <p>
                                    <a href="#" title>VIEW ALL POSTS</a>
                                </p>
                            </div>
                            <div className="span3" id="footerArea3">
                                <h3>Sample Content</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
                                </p>
                            </div>
                            <div className="span3" id="footerArea4">
                                <h3>Get in Touch</h3>
                                <ul id="contact-info">
                                    <li>
                                        <i className="general foundicon-phone icon" />
                                        <span className="field">Phone:</span>
                                        <br />
                                        (123) 456 7890 / 456 7891
                                    </li>
                                    <li>
                                        <i className="general foundicon-mail icon" />
                                        <span className="field">Email:</span>
                                        <br />
                                        <a href="mailto:info@yourdomain.com" title="Email">info@yourdomain.com</a>
                                    </li>
                                    <li>
                                        <i className="general foundicon-home icon" style={{marginBottom: 50}} />
                                        <span className="field">Address:</span>
                                        <br />
                                        123 Street<br />
                                        12345 City, State<br />
                                        Country
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row-fluid">
                            <div className="span12">
                                <p className="copyright">
                                    Copyright © 2013 Your Company. All Rights Reserved.
                                </p>
                                <p className="social_bookmarks">
                                    <a href="#"><i className="social foundicon-facebook" />&nbsp;Facebook</a>
                                    <a href><i className="social foundicon-twitter" />&nbsp;Twitter</a>
                                    <a href="#"><i className="social foundicon-pinterest" />&nbsp;Pinterest</a>
                                    <a href="#"><i className="social foundicon-rss" />&nbsp;Rss</a>
                                </p>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;
