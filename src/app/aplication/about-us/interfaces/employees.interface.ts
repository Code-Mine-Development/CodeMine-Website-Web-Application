import {DeskCoordinate} from './deskPosition.interface';

export interface Employees {
  name: string;
  surname: string;
  position: string;
  description: string;
  since: number;
  image: {
    normal: string,
    funny: string
  };
  deskCoordinate: DeskCoordinate
}

