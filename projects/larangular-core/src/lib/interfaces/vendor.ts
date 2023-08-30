import { Base } from './base';

export interface Vendor extends Base {
  name?: string;
  contact_name?: string;
  phone_number?: string;
  address?: string;
  area_id?: string;
}
