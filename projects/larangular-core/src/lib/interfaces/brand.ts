import { Base } from './base';
import { Company } from './company';

export interface Brand extends Base {
  company_id?: number;
  company?: Company;
  name?: string;
  logo_src?: string;
}
