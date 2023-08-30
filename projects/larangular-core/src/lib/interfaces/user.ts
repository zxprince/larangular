import { Base } from './base';
import { Permission } from './permission';
import { Role } from './role';

export interface User extends Base {
  name?: string;
  email?: string;
  ac_active?: boolean;
  phone_number?: string;
  password?: string;
  email_verified_at?: string;
  permissions?: Permission[];
  roles?: Role[];
}
