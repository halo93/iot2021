import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './device.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const DeviceDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const deviceEntity = useAppSelector(state => state.device.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="deviceDetailsHeading">Device</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{deviceEntity.id}</dd>
          <dt>
            <span id="name">Name</span>
          </dt>
          <dd>{deviceEntity.name}</dd>
          <dt>
            <span id="producer">Producer</span>
          </dt>
          <dd>{deviceEntity.producer}</dd>
          <dt>
            <span id="version">Version</span>
          </dt>
          <dd>{deviceEntity.version}</dd>
          <dt>
            <span id="type">Type</span>
          </dt>
          <dd>{deviceEntity.type}</dd>
        </dl>
        <Button tag={Link} to="/device" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/device/${deviceEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DeviceDetail;
