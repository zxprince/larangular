import { Base } from './base';

export interface Asset extends Base {
  name?: string;
  current_location_id?: string;
  vendor_id?: string;
  purchase_price?: number;
  purchase_at?: string;
  warranty_expire_at?: string;
}
