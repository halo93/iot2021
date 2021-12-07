import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './room.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const RoomDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const roomEntity = useAppSelector(state => state.room.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="roomDetailsHeading">Room</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{roomEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{roomEntity.name}</dd>
          <dt>
            <span id="floor">Floor</span>
          </dt>
          <dd>{roomEntity.floor}</dd>
          <dt>
            <span id="size">Size</span>
          </dt>
          <dd>{roomEntity.size}</dd>
          <dt>
            <span id="capacity">Capacity</span>
          </dt>
          <dd>{roomEntity.capacity}</dd>
          <dt>
            <span id="images">Images</span>
          </dt>
          <dd>
            {roomEntity.images ? (
              <div>
                {roomEntity.imagesContentType ? (
                  <a onClick={openFile(roomEntity.imagesContentType, roomEntity.images)}>
                    <img src={`data:${roomEntity.imagesContentType};base64,${roomEntity.images}`} style={{ maxHeight: '100px' }} />
                  </a>
                ) : null}
              </div>
            ) : null}
          </dd>
          <dt>Device</dt>
          <dd>
            {roomEntity.devices
              ? roomEntity.devices.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {roomEntity.devices && i === roomEntity.devices.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <span id="createdBy">Created By</span>
          </dt>
          <dd>{roomEntity.createdBy}</dd>
          <dt>
            <span id="createdDate">Created Date</span>
          </dt>
          <dd>
            {roomEntity.createdDate ? (
              <TextFormat value={roomEntity.createdDate} type="date" format={APP_DATE_FORMAT} blankOnInvalid />
            ) : null}
          </dd>
          <dt>
            <span id="lastModifiedBy">Last Modified By</span>
          </dt>
          <dd>{roomEntity.lastModifiedBy}</dd>
          <dt>
            <span id="lastModifiedDate">Last Modified Date</span>
          </dt>
          <td>
            {roomEntity.lastModifiedDate ? (
              <TextFormat value={roomEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} blankOnInvalid />
            ) : null}
          </td>
        </dl>
        <Button tag={Link} to="/room" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/room/${roomEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default RoomDetail;
