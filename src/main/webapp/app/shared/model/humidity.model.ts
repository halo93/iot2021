export interface IHumidity {
  id?: string;
  value?: number;
  roomId?: string;
  deviceId?: string;
  createdDate?: Date | null;
  valid?: boolean;
}

export const defaultValue: Readonly<IHumidity> = {};

export class IHumidity {}
