export interface IRoom {
  id?: string;
  name?: string;
  floor?: number;
  size?: number;
  capacity?: number;
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
}

export const defaultValue: Readonly<IRoom> = {};
