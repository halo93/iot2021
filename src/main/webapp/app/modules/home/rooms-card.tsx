import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { faThermometerFull, faLightbulb, faWater, faAudioDescription, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RoomsCardComponent = props => {
  const [comfort, setComfort] = useState(props.comfort);
  const [temperature, setTemperature] = useState(props.temperature);
  const [humidity, setHumidity] = useState(props.humidity);
  const [light, setLight] = useState(props.light);
  const [noise, setNoise] = useState(props.noise);

  useEffect(() => {
    setComfort(props.comfort);
    setTemperature(props.temperature);
    setHumidity(props.humidity);
    setLight(props.light);
    setNoise(props.noise);
  }, [props.comfort, props.temperature, props.humidity, props.light, props.noise]);

  return (
    <Col md="3" className="text-left">
      <Card>
        <CardImg
          variant="top"
          src={
            comfort.room.images
              ? `data:${comfort.room.imagesContentType};base64,${comfort.room.images}`
              : '../../content/images/unavailable-image.jpg'
          }
        />
        <CardBody>
          <CardTitle>
            <h5> {comfort.room.name}</h5>
          </CardTitle>
          <CardSubtitle className="ribbon-card text-center">{comfort.rank || 'N/A'}</CardSubtitle>
          <CardText>
            <ListGroup>
              <ListGroupItem
                className={`justify-content-between ${temperature && comfort.temperature.valid ? ' ' : 'error'} ${
                  !temperature ? 'secondary' : ''
                }`}
              >
                <FontAwesomeIcon icon={faThermometerFull} />
                <span>&nbsp;</span>
                Temperature&nbsp;
                <Badge pill>{comfort.temperature.value}&#8451;</Badge> {!temperature && <Badge pill>Disabled</Badge>}
              </ListGroupItem>

              <ListGroupItem
                className={`justify-content-between ${humidity && comfort.humidity.valid ? ' ' : 'error'} ${!humidity ? 'secondary' : ''}`}
              >
                <FontAwesomeIcon icon={faWater} />
                <i className="far fa-humidity" />
                <span>&nbsp;</span>
                Humidity <Badge pill>{comfort.humidity.value}%</Badge> {!humidity && <Badge pill>Disabled</Badge>}
              </ListGroupItem>

              <ListGroupItem
                className={`justify-content-between ${light && comfort.light.valid ? ' ' : 'error'} ${!light ? 'secondary' : ''}`}
              >
                <FontAwesomeIcon icon={faLightbulb} />
                <span>&nbsp;</span>
                Light <Badge pill>{comfort.light.value} Lux</Badge> {!light && <Badge pill>Disabled</Badge>}
              </ListGroupItem>

              <ListGroupItem
                className={`justify-content-between ${noise && comfort.noise.valid ? ' ' : 'error'} ${!noise ? 'secondary' : ''}`}
              >
                <FontAwesomeIcon icon={faFileAudio} />
                <span>&nbsp;</span>
                Noise <Badge pill>{comfort.noise.value} dB</Badge> {!noise && <Badge pill>Disabled</Badge>}
              </ListGroupItem>
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoomsCardComponent;
