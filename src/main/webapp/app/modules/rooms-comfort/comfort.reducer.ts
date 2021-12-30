import axios from 'axios';
import { createAsyncThunk, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

import { createEntitySlice, EntityState, serializeAxiosError } from 'app/shared/reducers/reducer.utils';
import { defaultValue } from 'app/shared/model/comfort.model';
import { IComfort } from 'app/shared/model/comfort.model';
import { getEntities } from 'app/entities/room/room.reducer';

const initialState: EntityState<IComfort> = {
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

export const getEntity = createAsyncThunk(
  'comfort/fetch_entity',
  async (id: string | number) => {
    const requestUrl = `${apiUrl}/eu-standards/${id}`;
    return axios.get<IComfort>(requestUrl);
  },
  { serializeError: serializeAxiosError }
);

// slice

export const ComfortSlice = createEntitySlice({
  name: 'comfort',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getEntity.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload.data;
      })
      .addMatcher(isPending(getEntity), state => {
        state.errorMessage = null;
        state.updateSuccess = false;
        state.loading = true;
      });
  },
});

export const { reset } = ComfortSlice.actions;

// Reducer
export default ComfortSlice.reducer;
