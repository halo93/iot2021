export interface INoise {
  id?: string;
  value?: number;
  roomId?: string;
  deviceId?: string;
  createdDate?: Date | null;
  valid?: boolean;
}

export const defaultValue: Readonly<INoise> = {};

export class INoise {}
