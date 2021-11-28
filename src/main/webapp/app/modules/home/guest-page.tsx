import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Alert, Col, Row } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faScrewdriver, faUserFriends } from '@fortawesome/free-solid-svg-icons';

export const GuestPageComponent = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <img src="../../../content/images/istockphoto-1180939305-612x612.jpg" width="100%" height="100%" />
      </Col>

      <Col md="9">
        <h3>Welcome to our 2021 IoT Project!</h3>
        <Row className="mt-4">
          <Col md="4">
            <p className="font-weight-bold bg-secondary text-white text-center" style={{ lineHeight: '3' }}>
              <FontAwesomeIcon icon={faUserFriends} /> About Us
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum sed nunc eu blandit. Curabitur interdum metus sit
            amet nulla malesuada suscipit. Nam id iaculis nisi. Nulla faucibus turpis vitae faucibus convallis. Nam a tempus tellus, ut
            consequat ex. Ut ornare nunc at lacus blandit, non suscipit metus imperdiet. Morbi fermentum placerat ligula eget ornare. Duis
            vitae ante ultrices, congue orci nec, hendrerit neque. Maecenas sodales pretium eros vel porttitor.
          </Col>
          <Col md="4">
            <p className="font-weight-bold bg-secondary text-white text-center" style={{ lineHeight: '3' }}>
              <FontAwesomeIcon icon={faObjectGroup} /> Our Product
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum sed nunc eu blandit. Curabitur interdum metus sit
            amet nulla malesuada suscipit. Nam id iaculis nisi. Nulla faucibus turpis vitae faucibus convallis. Nam a tempus tellus, ut
            consequat ex. Ut ornare nunc at lacus blandit, non suscipit metus imperdiet. Morbi fermentum placerat ligula eget ornare. Duis
            vitae ante ultrices, congue orci nec, hendrerit neque. Maecenas sodales pretium eros vel porttitor.
          </Col>
          <Col md="4">
            <p className="font-weight-bold bg-secondary text-white text-center" style={{ lineHeight: '3' }}>
              <FontAwesomeIcon icon={faScrewdriver} /> How it Works
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum sed nunc eu blandit. Curabitur interdum metus sit
            amet nulla malesuada suscipit. Nam id iaculis nisi. Nulla faucibus turpis vitae faucibus convallis. Nam a tempus tellus, ut
            consequat ex. Ut ornare nunc at lacus blandit, non suscipit metus imperdiet. Morbi fermentum placerat ligula eget ornare. Duis
            vitae ante ultrices, congue orci nec, hendrerit neque. Maecenas sodales pretium eros vel porttitor.
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md="12" className="justify-content-center">
            <Alert color="warning">
              Do you have an account?
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                {' '}
                Sign in
              </Link>
            </Alert>
          </Col>

          <Col md="12" className="justify-content-center">
            <Alert color="warning">
              Please sign up here if you do not have an account!&nbsp;
              <Link to="/account/register" className="alert-link">
                Register a new account
              </Link>
            </Alert>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default GuestPageComponent;
