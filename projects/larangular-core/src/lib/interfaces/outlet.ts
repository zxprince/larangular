import { Base } from './base';

export interface Outlets extends Base {
  name?: string;
  shop_id?: number;
  area_id?: number;
  slug?: string;
  status?: string;
  is_hq?: string;
  logo_src?: string;
}
