import { Base } from './base';

export interface Company extends Base {
  name?: string;
  country_id?: number;
  logo_src?: string;
}
