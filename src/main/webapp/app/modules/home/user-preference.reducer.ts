import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { createEntitySlice, EntityState } from 'app/shared/reducers/reducer.utils';
import { IUserPreference, defaultValue } from 'app/shared/model/user-preference.model';

export type IUserPreferenceQueryParams = { temperature?: boolean; humidity?: boolean; light?: boolean; noise?: boolean };
export type IUserPreferenceBody = {
  temperaturePriority: number;
  lightPriority: number;
  noisePriority: number;
  humidityPriority: number;
};

const initialState: EntityState<IUserPreference> = {
  loading: false,
  errorMessage: null,
  entities: [],
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

const apiUrl = 'api/comforts';

// Actions

export const getEntities = createAsyncThunk(
  'user-preference/fetch_entity_list',
  async ({ temperature, humidity, light, noise }: IUserPreferenceQueryParams) => {
    const requestUrl = `${apiUrl}/eu-standards?cacheBuster=${new Date().getTime()}
    ${temperature ? `&temperature=true` : `&temperature=false`}${humidity ? `&humidity=true` : `&humidity=false`}
    ${noise ? `&noise=true` : `&noise=false`}${light ? `&light=true` : `&light=false`}`;
    return axios.get<IUserPreference[]>(requestUrl);
  }
);

export const getUserPreferenceEntities = createAsyncThunk(
  'user-preference/fetch_user_preference_entity_list',
  async (entity: IUserPreferenceBody) => {
    const requestUrl = `${apiUrl}/user-preferences`;
    return await axios.post<IUserPreference[]>(requestUrl, entity);
  }
);

// slice

export const UserPreferenceSlice = createEntitySlice({
  name: 'user-preference',
  initialState,
  extraReducers(builder) {
    builder
      .addMatcher(isFulfilled(getEntities), (state, action) => {
        return {
          ...state,
          loading: false,
          entities: action.payload.data,
          totalItems: action.payload.data.length,
        };
      })
      .addMatcher(isFulfilled(getUserPreferenceEntities), (state, action) => {
        return {
          ...state,
          loading: false,
          entities: action.payload.data,
          totalItems: action.payload.data.length,
        };
      })
      .addMatcher(isPending(getEntities), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      })
      .addMatcher(isPending(getUserPreferenceEntities), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      });
  },
});

export const { reset } = UserPreferenceSlice.actions;

// Reducer
export default UserPreferenceSlice.reducer;
