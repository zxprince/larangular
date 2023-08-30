import { Base } from './base';

export interface Racks extends Base {
  warehouse_id?: number;
  name?: string;
  levels?: string;
}
