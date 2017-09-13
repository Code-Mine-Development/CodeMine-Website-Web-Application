import {DeskCoordinate} from './deskPosition.interface';

export interface Employees {
  name: string;
  position: string;
  description: string;
  image: {
    normal: string,
    funny: string
  };
  deskCoordinate: DeskCoordinate
}

