import './home.scss';

import React, { useEffect } from 'react';

import { Row } from 'reactstrap';

import TabsComponent from './tabs';
import RoomsCardComponent from 'app/modules/home/rooms-card';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntities } from 'app/modules/home/user-preference.reducer';
import { transformToTwoDimensionalArray } from 'app/shared/util/entity-utils';

export interface IRequestFormProps {
  showModal: boolean;
  inputError: boolean;
  handleForm: (temperature: string, humidity: string, light: string, sound: string, room_capacity: string) => void;
  handleClose: () => void;
}

export const UserPageComponent = () => {
  const dispatch = useAppDispatch();

  const comfortList = useAppSelector(state => state.userPreference.entities);
  const loading = useAppSelector(state => state.userPreference.loading);
  const totalItems = useAppSelector(state => state.userPreference.totalItems);

  const getAllEntities = () => {
    dispatch(getEntities());
  };

  useEffect(() => {
    getAllEntities();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>ROOM COMFORT PREFERENCE</h2>
      <div>
        <TabsComponent />
      </div>
      <div>
        {comfortList &&
          comfortList.length > 0 &&
          transformToTwoDimensionalArray(comfortList, 4).map((itemRow, key) => (
            <Row key={key} className="mt-3">
              {itemRow.map((comfort, id) => (
                <RoomsCardComponent key={id} comfort={comfort} />
              ))}
            </Row>
          ))}
      </div>
    </div>
  );
};

export default UserPageComponent;
