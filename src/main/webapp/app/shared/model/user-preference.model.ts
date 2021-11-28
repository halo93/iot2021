export interface IUserPreference {
  id?: string;
  temperature?: string;
  humidity?: string;
  light?: string;
  sound?: string;
  createdBy?: string;
  createdDate?: Date | null;
}

export const defaultValue: Readonly<IUserPreference> = {};

export class IUserPreference {}
