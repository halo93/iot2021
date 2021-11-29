import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { faThermometerFull, faLightbulb, faWater, faAudioDescription, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntities } from 'app/modules/home/user-preference.reducer';

const RoomsCardComponent = props => {
  const [comfort, setComfort] = useState(props.comfort);

  return (
    <Col md="3" className="text-left">
      <Card>
        <CardImg variant="top" src="../../content/images/IMG_7995.jpg" />
        <CardBody>
          <CardTitle>
            <h5> {comfort.room.name}</h5>
          </CardTitle>
          <CardSubtitle className="ribbon-card text-center">{comfort.rank || 'N/A'}</CardSubtitle>
          <CardText>
            <ListGroup>
              <ListGroupItem className={`justify-content-between ${comfort.temperature.valid ? ' ' : 'error'}`}>
                <FontAwesomeIcon icon={faThermometerFull} />
                <span>&nbsp;</span>
                Temperature&nbsp;
                <Badge pill>{comfort.temperature.value}&#8451;</Badge>
              </ListGroupItem>

              <ListGroupItem className={`justify-content-between ${comfort.humidity.valid ? ' ' : 'error'}`}>
                <FontAwesomeIcon icon={faWater} />
                <i className="far fa-humidity"></i>
                <span>&nbsp;</span>
                Humidity <Badge pill>{comfort.humidity.value}%</Badge>
              </ListGroupItem>

              <ListGroupItem className={`justify-content-between ${comfort.light.valid ? ' ' : 'error'}`}>
                <FontAwesomeIcon icon={faLightbulb} />
                <span>&nbsp;</span>
                Light <Badge pill>{comfort.light.value} Lux</Badge>
              </ListGroupItem>

              <ListGroupItem className={`justify-content-between ${comfort.noise.valid ? ' ' : 'error'}`}>
                <FontAwesomeIcon icon={faFileAudio} />
                <span>&nbsp;</span>
                Noise <Badge pill>{comfort.noise.value} dB</Badge>
              </ListGroupItem>
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoomsCardComponent;
