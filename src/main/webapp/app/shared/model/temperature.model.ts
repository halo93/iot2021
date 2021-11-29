export interface ITemperature {
  id?: string;
  value?: number;
  roomId?: string;
  deviceId?: string;
  createdDate?: Date | null;
  valid?: boolean;
}

export const defaultValue: Readonly<ITemperature> = {};

export class ITemperature {}
