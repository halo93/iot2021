import { IDevice } from 'app/shared/model/device.model';

export interface IRoom {
  id?: string;
  name?: string;
  floor?: number;
  size?: number;
  capacity?: number;
  devices?: IDevice[] | null;
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
}

export const defaultValue: Readonly<IRoom> = {};
