import { Base } from './base';
import { Permission } from './permission';

export interface Role extends Base {
  display_name?: string;
  name?: string;
  description?: string;
}
