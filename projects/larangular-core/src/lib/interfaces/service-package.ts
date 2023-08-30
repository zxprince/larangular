import { Base } from './base';

export interface ServicePackage extends Base {
  service_id?: number;
  name?: string;
  type?: string;
  status?: string;
  billing_cycle?: string;
  price: string;
  short_description?: string;
  details?: string;
}
