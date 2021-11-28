import './home.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import { GuestPageComponent } from '../home/guest-page';
import { UserPageComponent } from '../home/user-page';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col>{account && account.login ? <UserPageComponent /> : <GuestPageComponent />}</Col>
    </Row>
  );
};

export default Home;
