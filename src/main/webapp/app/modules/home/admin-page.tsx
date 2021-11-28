import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Alert, Col, Row } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const AdminPageComponent = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
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
  );
};

export default AdminPageComponent;
