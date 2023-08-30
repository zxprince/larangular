import { Base } from './base';
import { Country } from './country';

export interface Area extends Base {
  country_id?: number;
  country?: Country | null;
  name?: string;
  slug?: string;
  type?: string;
  parent_id?: number;
  parent?: Area | null;
  children?: Area[] | null;
  customer_registration_allowed?: boolean;
}
