import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity } from './room.reducer';

export const DevicesDialog = (props: RouteComponentProps<{ id: string }>) => {
  const [loadModal, setLoadModal] = useState(false);
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
    setLoadModal(true);
  }, []);

  const roomEntity = useAppSelector(state => state.room.entity);
  const updateSuccess = useAppSelector(state => state.room.updateSuccess);

  const handleClose = () => {
    history.push('/room' + props.location.search);
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmUpdateDevices = () => {
    history.push('/room/' + roomEntity.id + '/edit');
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="addDevicesForRoomDialogHeading">
        Installed Devices in Room: {roomEntity.name}
      </ModalHeader>
      <ModalBody>
        {roomEntity.devices && roomEntity.devices.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand">Name</th>
                <th className="hand">Producer</th>
                <th className="hand">Version</th>
                <th className="hand">Type</th>
              </tr>
            </thead>
            <tbody>
              {roomEntity.devices.map((device, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td className="pt-1">
                    <Button
                      className="pl-0"
                      tag={Link}
                      to={`/device/${device.id}`}
                      color="link"
                      id={device.id}
                      data-toggle="tooltip"
                      title={device.id}
                    >
                      {device.name}
                    </Button>
                  </td>
                  <td>{device.producer}</td>
                  <td>{device.version}</td>
                  <td>{device.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="alert alert-warning">No Devices found</div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Close
        </Button>
        <Button id="jhi-confirm-delete-room" data-cy="entityConfirmUpdateDeviceButton" color="primary" onClick={confirmUpdateDevices}>
          <FontAwesomeIcon icon={faChevronCircleRight} />
          &nbsp; Add Devices
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DevicesDialog;
