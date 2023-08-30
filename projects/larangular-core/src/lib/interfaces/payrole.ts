import { Base } from './base';
export interface Payrole extends Base {
  employee_id?: number;
  department_id?: number;
  designation_id?: number;
  base_salary?: number;
  payable_salary?: number;
  pay_frequency?: string;
  tax_percent?: number;
  bank_account_id?: number;
  bonus?: number;
  deductions?: number;
}
