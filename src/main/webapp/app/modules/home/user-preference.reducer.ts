import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { createEntitySlice, EntityState } from 'app/shared/reducers/reducer.utils';
import { IUserPreference, defaultValue } from 'app/shared/model/user-preference.model';

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

export const getEntities = createAsyncThunk('user-preference/fetch_entity_list', async () => {
  const requestUrl = `${apiUrl}/eu-standards?cacheBuster=${new Date().getTime()}`;
  return axios.get<IUserPreference[]>(requestUrl);
});

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
      .addMatcher(isPending(getEntities), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      });
  },
});

export const { reset } = UserPreferenceSlice.actions;

// Reducer
export default UserPreferenceSlice.reducer;
