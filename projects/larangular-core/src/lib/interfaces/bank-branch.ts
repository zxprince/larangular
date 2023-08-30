import { Base } from './base';

export interface BankBranch extends Base {
  name?: string;
  bank_id?: number;
  area_id?: number;
}
