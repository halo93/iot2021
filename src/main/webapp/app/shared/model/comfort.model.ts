import { IRoom } from 'app/shared/model/room.model';
import { ITemperature } from 'app/shared/model/temperature.model';
import { IHumidity } from 'app/shared/model/humidity.model';
import { ILight } from 'app/shared/model/light.model';
import { INoise } from 'app/shared/model/noise.model';

export interface IComfort {
  room?: IRoom | null;
  temperatures?: ITemperature[] | null;
  humidity?: IHumidity[] | null;
  lights?: ILight[] | null;
  noises?: INoise[] | null;
  rank?: string;
}

export const defaultValue: Readonly<IComfort> = {};

export class IComfort {}
