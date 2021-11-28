import './home.scss';

import React from 'react';

import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import TabsComponent from './tabs';
import RoomsCardComponent from 'app/modules/home/rooms-card';

export interface IRequestFormProps {
  showModal: boolean;
  inputError: boolean;
  handleForm: (temperature: string, humidity: string, light: string, sound: string, room_capacity: string) => void;
  handleClose: () => void;
}

export const UserPageComponent = () => {
  return (
    <div>
      <h2>Room Comfort Preference</h2>
      <div>
        <TabsComponent />
      </div>
      <div>
        <RoomsCardComponent />
      </div>
    </div>
  );
};

export default UserPageComponent;
