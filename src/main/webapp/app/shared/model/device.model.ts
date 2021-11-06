import { DeviceType } from 'app/shared/model/enumerations/device-type.model';

export interface IDevice {
  id?: string;
  name?: string | null;
  producer?: string | null;
  version?: string | null;
  type?: DeviceType;
}

export const defaultValue: Readonly<IDevice> = {};
