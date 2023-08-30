import { Base } from './base';

export interface Address extends Base {
  user_id?: number;
  title?: string;
  contact_name?: string;
  contact_phone_number?: string;
  line_one?: string;
  line_two?: string;
  post_code?: string;
  area_id?: number;
  created_by_id?: number;
}
