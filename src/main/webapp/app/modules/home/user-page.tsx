import './home.scss';

import React, { useEffect, useState } from 'react';

import { Row, Spinner } from 'reactstrap';

import TabsComponent from './tabs';
import RoomsCardComponent from 'app/modules/home/rooms-card';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntities } from 'app/modules/home/user-preference.reducer';
import { transformToTwoDimensionalArray } from 'app/shared/util/entity-utils';

export const UserPageComponent = () => {
  const dispatch = useAppDispatch();
  const [temperature, setTemperature] = useState(true);
  const [light, setLight] = useState(true);
  const [noise, setNoise] = useState(true);
  const [humidity, setHumidity] = useState(true);

  const comfortList = useAppSelector(state => state.userPreference.entities);
  const loading = useAppSelector(state => state.userPreference.loading);
  const totalItems = useAppSelector(state => state.userPreference.totalItems);

  const getAllEntities = () => {
    dispatch(getEntities({ temperature, humidity, light, noise }));
  };

  useEffect(() => {
    getAllEntities();
  }, [temperature, light, noise, humidity]);

  // console.log(comfortList)

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>ROOM COMFORT PREFERENCE</h2>
      <div>
        <TabsComponent
          temperature={temperature}
          setTemperature={setTemperature}
          light={light}
          setLight={setLight}
          noise={noise}
          setNoise={setNoise}
          humidity={humidity}
          setHumidity={setHumidity}
        />
      </div>
      <div>
        {loading && (
          <div className="text-center">
            <Spinner color="primary" type="grow">
              Loading...
            </Spinner>
            <Spinner color="secondary" type="grow">
              Loading...
            </Spinner>
            <Spinner color="success" type="grow">
              Loading...
            </Spinner>
            <Spinner color="danger" type="grow">
              Loading...
            </Spinner>
            <Spinner color="warning" type="grow">
              Loading...
            </Spinner>
            <Spinner color="info" type="grow">
              Loading...
            </Spinner>
            <Spinner color="light" type="grow">
              Loading...
            </Spinner>
            <Spinner color="dark" type="grow">
              Loading...
            </Spinner>
          </div>
        )}
        {!loading &&
          comfortList &&
          comfortList.length > 0 &&
          transformToTwoDimensionalArray(comfortList, 4).map((itemRow, key) => (
            <Row key={`row-list-${key}`} className="mt-3">
              {itemRow.map((comfort, id) => (
                <RoomsCardComponent
                  key={`comfort-${id}`}
                  comfort={comfort}
                  temperature={temperature}
                  humidity={humidity}
                  light={light}
                  noise={noise}
                />
              ))}
            </Row>
          ))}
      </div>
    </div>
  );
};

export default UserPageComponent;
