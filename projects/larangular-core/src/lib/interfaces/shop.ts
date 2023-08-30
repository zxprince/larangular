import { Base } from './base';

export interface Shop extends Base {
  name?: string;
  owner_id?: number;
  slug?: string;
  status?: string;
  type?: string;
}
