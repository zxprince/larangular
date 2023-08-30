import { Base } from './base';
export interface AccountHead extends Base {
  name?: string;
  parent_id?: number;
  shop_id?: number;
  positive_entrie?: string;
  description?: string;
}
