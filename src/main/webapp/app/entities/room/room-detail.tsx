import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Card, CardBody, CardText, ListGroupItem } from 'reactstrap';
import { openFile, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './room.reducer';
import { APP_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const RoomDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const roomEntity = useAppSelector(state => state.room.entity);
  return (
    <div>
      <h3 data-cy="roomDetailsHeading" className="mb-3">
        Room Details
      </h3>
      <Row>
        <Col md="5">
          <div className="jh-entity-details">
            <div
              style={{
                fontWeight: 'bold',
                fontSize: 'larger',
                textAlign: 'center',
                marginBottom: '10px',
                backgroundColor: '#053742',
                color: '#ffffff',
              }}
            >
              {roomEntity.name}
            </div>
            <div>
              {roomEntity.images ? (
                <div>
                  {roomEntity.imagesContentType ? (
                    <a onClick={openFile(roomEntity.imagesContentType, roomEntity.images)}>
                      <img
                        src={`data:${roomEntity.imagesContentType};base64,${roomEntity.images}`}
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                      />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </Col>

        <Col md="7" style={{ marginTop: '20px' }}>
          <Card>
            <CardBody>
              <CardText className="jh-entity-details">
                <ListGroupItem>
                  <span id="id" style={{ fontWeight: 'bold' }}>
                    ID :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.id}
                </ListGroupItem>

                <ListGroupItem>
                  <span id="floor" style={{ fontWeight: 'bold' }}>
                    Floor :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.floor}
                </ListGroupItem>

                <ListGroupItem>
                  <span id="size" style={{ fontWeight: 'bold' }}>
                    Size :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.size}
                </ListGroupItem>

                <ListGroupItem>
                  <span id="capacity" style={{ fontWeight: 'bold' }}>
                    Room Capacity :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.capacity}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ fontWeight: 'bold' }}> Sensor Device ID : </span>
                  <span>&nbsp;</span>
                  {roomEntity.devices
                    ? roomEntity.devices.map((val, i) => (
                        <span key={val.id}>
                          <a>{val.id}</a>
                          {roomEntity.devices && i === roomEntity.devices.length - 1 ? '' : ', '}
                        </span>
                      ))
                    : null}
                </ListGroupItem>

                <ListGroupItem>
                  <span id="createdBy" style={{ fontWeight: 'bold' }}>
                    Created By :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.createdBy}
                </ListGroupItem>

                <ListGroupItem>
                  <span id="createdDate" style={{ fontWeight: 'bold' }}>
                    Created Date :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.createdDate ? (
                    <TextFormat value={roomEntity.createdDate} type="date" format={APP_DATE_FORMAT} blankOnInvalid />
                  ) : null}
                </ListGroupItem>

                <ListGroupItem>
                  <span id="lastModifiedBy" style={{ fontWeight: 'bold' }}>
                    Last Modified Date :{' '}
                  </span>
                  <span>&nbsp;</span>
                  {roomEntity.lastModifiedDate ? (
                    <TextFormat value={roomEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} blankOnInvalid />
                  ) : null}
                </ListGroupItem>
              </CardText>
            </CardBody>
          </Card>
          <Button tag={Link} to="/room" replace color="info" data-cy="entityDetailsBackButton" className="mt-2">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/room/${roomEntity.id}/edit`} replace color="primary" className="mt-2">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default RoomDetail;
