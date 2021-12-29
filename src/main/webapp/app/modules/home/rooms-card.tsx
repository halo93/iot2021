import React from 'react';
import { Badge, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { faThermometerFull, faLightbulb, faWater, faAudioDescription, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const RoomsCardComponent = () => {
  return (
    <div>
      <Row className="mt-3">
        <Col md="3" className="text-left">
          <Card>
            <CardBody>
              <CardTitle>
                <Link to="/comfort">Room Name:</Link>
              </CardTitle>
              <CardSubtitle>Ranking:</CardSubtitle>
              <CardText>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faThermometerFull} />
                    <span>&nbsp;</span>
                    Temperature <Badge pill>12&#8451;</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faWater} />
                    <i className="far fa-humidity"></i>
                    <span>&nbsp;</span>
                    Humidity <Badge pill>80%</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>&nbsp;</span>
                    Light <Badge pill>250lux</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <span>&nbsp;</span>
                    Noise <Badge pill>45dB</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="text-left">
          <Card>
            <CardBody>
              <CardTitle>Room Name:</CardTitle>
              <CardSubtitle>Ranking:</CardSubtitle>
              <CardText>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faThermometerFull} />
                    <span>&nbsp;</span>
                    Temperature <Badge pill>12&#8451;</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faWater} />
                    <i className="far fa-humidity"></i>
                    <span>&nbsp;</span>
                    Humidity <Badge pill>80%</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>&nbsp;</span>
                    Light <Badge pill>250lux</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <span>&nbsp;</span>
                    Noise <Badge pill>45dB</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="text-left">
          <Card>
            <CardBody>
              <CardTitle>Room Name:</CardTitle>
              <CardSubtitle>Ranking:</CardSubtitle>
              <CardText>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faThermometerFull} />
                    <span>&nbsp;</span>
                    Temperature <Badge pill>12&#8451;</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faWater} />
                    <i className="far fa-humidity"></i>
                    <span>&nbsp;</span>
                    Humidity <Badge pill>80%</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>&nbsp;</span>
                    Light <Badge pill>250lux</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <span>&nbsp;</span>
                    Noise <Badge pill>45dB</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="text-left">
          <Card>
            <CardBody>
              <CardTitle>Room Name:</CardTitle>
              <CardSubtitle>Ranking:</CardSubtitle>
              <CardText>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faThermometerFull} />
                    <span>&nbsp;</span>
                    Temperature <Badge pill>12&#8451;</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faWater} />
                    <i className="far fa-humidity"></i>
                    <span>&nbsp;</span>
                    Humidity <Badge pill>80%</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>&nbsp;</span>
                    Light <Badge pill>250lux</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <span>&nbsp;</span>
                    Noise <Badge pill>45dB</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md="3" className="text-left">
          <Card>
            <CardBody>
              <CardTitle>Room Name:</CardTitle>
              <CardSubtitle>Ranking:</CardSubtitle>
              <CardText>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faThermometerFull} />
                    <span>&nbsp;</span>
                    Temperature <Badge pill>12&#8451;</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faWater} />
                    <i className="far fa-humidity"></i>
                    <span>&nbsp;</span>
                    Humidity <Badge pill>80%</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>&nbsp;</span>
                    Light <Badge pill>250lux</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <span>&nbsp;</span>
                    Noise <Badge pill>45dB</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="text-left">
          <Card>
            <CardBody>
              <CardTitle>Room Name:</CardTitle>
              <CardSubtitle>Ranking:</CardSubtitle>
              <CardText>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faThermometerFull} />
                    <span>&nbsp;</span>
                    Temperature <Badge pill>12&#8451;</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faWater} />
                    <i className="far fa-humidity"></i>
                    <span>&nbsp;</span>
                    Humidity <Badge pill>80%</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faLightbulb} />
                    <span>&nbsp;</span>
                    Light <Badge pill>250lux</Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    <FontAwesomeIcon icon={faFileAudio} />
                    <span>&nbsp;</span>
                    Noise <Badge pill>45dB</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RoomsCardComponent;
