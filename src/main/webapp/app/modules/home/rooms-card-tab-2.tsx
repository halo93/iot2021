import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { faThermometerFull, faLightbulb, faWater, faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Rank } from 'app/shared/model/enumerations/rank.model';

const RoomsCardTab2Component = props => {
  const [comfort, setComfort] = useState(props.comfort);

  useEffect(() => {
    setComfort(props.comfort);
  }, [props.comfort]);

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
            <h5>
              <Link to="/comfort">{comfort.room.name}</Link>
              &nbsp;{' '}
              <Badge pill color="primary">
                {' '}
                Total Point: {_.round(comfort.totalPoint, 2)}{' '}
              </Badge>
            </h5>
          </CardTitle>
          <CardSubtitle className="ribbon-wrapper text-center">
            <div className="ribbon-card">{(comfort.rank && Rank[comfort.rank]) || Rank.NA}</div>
          </CardSubtitle>
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
                <i className="far fa-humidity" />
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

export default RoomsCardTab2Component;
