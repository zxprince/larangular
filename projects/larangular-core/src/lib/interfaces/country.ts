import { Base } from './base';

export interface Country extends Base {
  name?: string;
  slug?: string;
  iso_code_two?: string;
  iso_code_three?: string;
  currency_code?: string;
  currency_symbol?: string;
  calling_code?: string;
  customer_registration_allowed?: boolean;
}
