import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faObjectGroup, faScrewdriver, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="footer">
    <div className="footer-top">
      <Row>
        <div className="col-md-4 footer-about Team Stanislas" style={{ visibility: 'visible' }}>
          <img className="logo-footer" src="../../../../content/images/logo.png" alt="logo-footer" width="60" height="60"></img>
          <p>Welcome to our beautiful and heart warming project </p>
          <p>
            <a href="#">Our Team</a>
          </p>
        </div>

        <div className="col-md-4 footer-contact Team Stanislas" style={{ visibility: 'visible' }}>
          <h3 className="footer-header">Contact</h3>
          <p>
            <i className="fa fa-map-marker"></i>
            &nbsp; Vandoeuvre Les Nancy
          </p>

          <p>
            <i className="fa fa-phone"></i>
            &nbsp; Phone: (0078) 674 879 789
          </p>

          <p>
            <i className="fa fa-envelope"></i>
            &nbsp; Email:&nbsp;
            <a href="mailto:teamstanislas@gmail.com">teamstanislas@gmail.com</a>
          </p>
        </div>

        <div className="col-md-4 footer-links Team Stanislas" style={{ visibility: 'visible' }}>
          <div className="row">
            <div className="col">
              <h3 className="footer-header">Links</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                <a className="scroll-link" href="http://localhost:9000">
                  <FontAwesomeIcon icon={faHome} /> Home
                </a>
              </p>
              <p>
                <a href="#">
                  <FontAwesomeIcon icon={faObjectGroup} /> Our Product
                </a>
              </p>
            </div>

            <div className="col-md-6">
              <p>
                <a href="#">
                  <FontAwesomeIcon icon={faScrewdriver} /> How it works
                </a>
              </p>

              <p>
                <a href="#">
                  <FontAwesomeIcon icon={faUserFriends} /> Our Clients
                </a>
              </p>
            </div>
          </div>
        </div>
      </Row>
    </div>

    <div className="footer-bottom">
      <Row className="justify-content-center">
        <Col xs="6 footer-copyright">
          <p>&copy; 2021: Team Stanislas. All Rights Reserved.</p>
        </Col>
        <Col xs="6 footer-social text-right">
          <div className="container pt-3">
            <Link to="#" className="mr-2">
              <i className="fa fa-facebook" />
            </Link>
            <Link to="#" className="mr-2">
              <i className="fa fa-twitter" />
            </Link>
            <Link to="#" className="mr-2">
              <i className="fa fa-linkedin" />
            </Link>
            <Link to="#" className="mr-2">
              <i className="fa fa-google-plus" />
            </Link>
            <Link to="#">
              <i className="fa fa-skype" />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Footer;
