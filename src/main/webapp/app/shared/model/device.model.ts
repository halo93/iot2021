import { DeviceType } from 'app/shared/model/enumerations/device-type.model';

export interface IDevice {
  id?: string;
  name?: string;
  producer?: string;
  version?: string;
  type?: DeviceType;
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
}

export const defaultValue: Readonly<IDevice> = {};
