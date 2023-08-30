import { Base } from './base';

export interface Permission extends Base {
  name?: string;
  slug?: string;
  group?: string;
  module?: string;
  description?: string;
}
