import { IRoom } from 'app/shared/model/room.model';
import { ITemperature } from 'app/shared/model/temperature.model';
import { IHumidity } from 'app/shared/model/humidity.model';
import { ILight } from 'app/shared/model/light.model';
import { INoise } from 'app/shared/model/noise.model';
import { Rank } from 'app/shared/model/enumerations/rank.model';

export interface IUserPreference {
  room?: IRoom | null;
  temperature?: ITemperature | null;
  humidity?: IHumidity | null;
  light?: ILight | null;
  noise?: INoise | null;
  rank?: Rank;
  createdDate?: Date | null;
}

export const defaultValue: Readonly<IUserPreference> = {};

export class IUserPreference {}
