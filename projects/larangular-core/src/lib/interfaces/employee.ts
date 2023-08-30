import { Gender } from './../enums/gender';
import { Base } from './base';
export interface Employee extends Base {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  date_of_birth?: string;
  gender?: string;
  ac_status?: string;
  joining_date?: string;
  marital_status?: string;
  phone_number?: number;
  area_id?: string;
  line_1?: string;
  line_2?: string;
  em_contact_name?: string;
  em_phone_number?: number;
  job_position?: string;
}
