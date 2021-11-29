export interface ILight {
  id?: string;
  value?: number;
  roomId?: string;
  deviceId?: string;
  createdDate?: Date | null;
  valid?: boolean;
}

export const defaultValue: Readonly<ILight> = {};

export class ILight {}
